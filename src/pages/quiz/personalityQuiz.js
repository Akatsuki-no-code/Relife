import React, { useState, useEffect } from "react";
import $ from "jquery";
import { QUESTION_SET } from "./questions";
import { WORDS } from "./words";
import "./main.css";

const PQuiz = () => {
  useEffect(() => {
    var NUM_QUESTIONS = QUESTION_SET.length,
      QUESTIONS = null,
      elem_question = $("#question"),
      elem_completed = $("#completed"),
      elem_facets = $("#result-facets"),
      elem_words = $("#result-words"),
      CURRENT_QUESTION = 0,
      SCORES = {},
      QUESTION_ORDER = [],
      PREVIOUS_QUESTIONS = [];

    function shuffle(a) {
      for (
        var j, x, i = a.length;
        i;
        j = parseInt(Math.random() * i), x = a[--i], a[i] = a[j], a[j] = x
      );
      return a;
    }

    function askQuestion() {
      elem_completed.text(CURRENT_QUESTION);

      if (CURRENT_QUESTION >= NUM_QUESTIONS) {
        elem_question.text("THE QUIZ HAS COMPLETED.");
        return;
      }

      elem_question.text(QUESTIONS[CURRENT_QUESTION].question);
    }

    function answerQuestion(answer) {
      if (CURRENT_QUESTION >= NUM_QUESTIONS) return;

      var question = QUESTIONS[CURRENT_QUESTION],
        alpha = question.alpha,
        facet = question.facet,
        aspect = question.aspect,
        inverted = question.inverted;

      if (inverted) answer = -answer;

      SCORES[facet].push(answer);
      SCORES[aspect].push(answer * alpha);

      buildResults();

      PREVIOUS_QUESTIONS.push([aspect, facet]);

      CURRENT_QUESTION += 1;

      askQuestion();
    }

    function undoAnswer() {
      var previousQuestion = PREVIOUS_QUESTIONS.pop();

      if (previousQuestion) {
        var previousAspect = previousQuestion[0],
          previousFacet = previousQuestion[1];

        SCORES[previousAspect].pop();
        SCORES[previousFacet].pop();

        buildResults();

        CURRENT_QUESTION -= 1;

        askQuestion();
      }
    }

    function arrangeQuestions(questions, facets) {
      var result = [],
        aspects = {
          openness: false,
          conscientiousness: false,
          extraversion: false,
          agreeableness: false,
          neuroticism: false,
        },
        aspectsAnswered = 0;

      var answeredHere = 0;

      while (questions.length > 0) {
        for (var k in facets) {
          facets[k] = false;
        }

        for (var i = 0; i < questions.length; ++i) {
          var question = questions[i];

          if (!facets[question.facet] && !aspects[question.aspect]) {
            aspects[question.aspect] = true;
            facets[question.facet] = true;
            result.push(question);
            questions.splice(i, 1);
            i -= 1;
            aspectsAnswered += 1;
          }

          if (aspectsAnswered >= 5) {
            for (var k in aspects) {
              aspects[k] = false;
            }

            aspectsAnswered = 0;
          }
        }
      }

      return result;
    }

    function begin() {
      var facets = {};

      $("#all-results").toggle();

      QUESTIONS = QUESTION_SET.slice(0);

      shuffle(QUESTIONS);

      for (var i = 0; i < QUESTIONS.length; ++i) {
        var question = QUESTIONS[i],
          facet = question.facet,
          aspect = question.aspect;

        facets[facet] = false;

        if (!SCORES[facet]) SCORES[facet] = [];
        if (!SCORES[aspect]) SCORES[aspect] = [];
      }

      for (var k in WORDS) {
        var words = WORDS[k];

        words.lo = words.lo.split(", ");
        words.hi = words.hi.split(", ");
      }

      QUESTIONS = arrangeQuestions(QUESTIONS, facets);

      for (var i = 0; i < QUESTIONS.length; ++i) {
        QUESTION_ORDER.push(+QUESTIONS[i].index);
      }

      CURRENT_QUESTION = 0;
      buildResults();
      askQuestion();
    }

    function beginFrom(datastr) {
      var data = JSON.parse(datastr),
        question_order = data.question_order,
        scores = data.scores,
        current_question = data.current_question;

      QUESTIONS = [];

      for (var i = 0; i < question_order.length; ++i) {
        QUESTIONS.push(QUESTION_SET[question_order[i]]);
      }

      SCORES = scores;
      CURRENT_QUESTION = current_question;
      QUESTION_ORDER = question_order;

      buildResults();
      askQuestion();
    }

    function showProgress() {
      return JSON.stringify({
        question_order: QUESTION_ORDER,
        scores: SCORES,
        current_question: CURRENT_QUESTION,
      });
    }

    function makeScore(answers) {
      if (answers.length == 0) return 0;

      var total = 0,
        count = 0;

      for (var i = 0; i < answers.length; ++i) {
        total += answers[i];
        count += 1;
      }

      return total / count;
    }

    var Z = 1.96,
      Z2 = Z * Z;

    function confidence(n) {
      if (n == 0) return 0;

      return (
        (1 + Z2 / (2 * n) - Z * Math.sqrt(Z2 / (4 * n * n))) / (1 + Z2 / n)
      );
    }

    function addWords(words, added) {
      var la = added.length,
        lw = words.length;
      for (var i = 0; i < la; ++i) {
        var present = false,
          add = added[i];

        for (var j = 0; j < lw; ++j) {
          if (words[j] == add) {
            present = true;
            break;
          }
        }

        if (!present) words.push(add);
      }
    }

    function buildResults() {
      var facets = [];

      for (var k in SCORES) {
        var scores = SCORES[k],
          count = scores.length,
          score = makeScore(scores);

        facets.push([k, count, score]);
      }

      facets.sort(function (a, b) {
        return Math.abs(b[2]) - Math.abs(a[2]);
      });

      var tableHTML = "",
        words = [],
        odd = true;

      for (var i = 0; i < facets.length; ++i) {
        var facet = facets[i],
          name = facet[0],
          count = facet[1],
          value = facet[2],
          shown = Math.round(value * 100);

        if (odd) {
          tableHTML += '<tr class="odd-row">';
        } else {
          tableHTML += "<tr>";
        }

        odd = !odd;

        var shownName = name;

        if (
          name == "openness" ||
          name == "conscientousness" ||
          name == "extraversion" ||
          name == "agreeableness" ||
          name == "neuroticism"
        ) {
          shownName = "<strong>" + name + "</strong>";
        }

        tableHTML +=
          "<td>" +
          shownName +
          '</td><td class="num">' +
          shown +
          '%</td><td class="faint">based on</td><td class="num">' +
          count +
          '</td><td class="faint">questions</td></tr>';

        if (value >= 0.175) {
          addWords(words, WORDS[name]["hi"]);
        } else if (value <= -0.175) {
          addWords(words, WORDS[name]["lo"]);
        }
      }

      elem_facets.html(tableHTML);
      elem_words.text(words.join(", "));
    }

    $("#answer").click(function (e) {
      var result =
        2 * (Math.max(0, (e.pageX - $("#answer").position().left) / 200) - 0.5);
      answerQuestion(result);
    });

    $("#save-progress").click(function (e) {
      $("#progress-box").val(showProgress()).select();
    });

    $("#load-progress").click(function (e) {
      beginFrom($("#progress-box").val());
    });

    $("#undo-button").click(function (e) {
      undoAnswer();
    });

    $("#results-toggle").click(function (e) {
      $("#all-results").toggle();
    });

    begin();
  }, []);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          position: "absolute",
          top: -160,
          right: 0,
          transform: "rotateZ(180deg)",
          zIndex: "5",
          marginBottom: "500px",
        }}
      >
        <defs>
          <linearGradient id="gr2" x1={1} x2={0} y1={0} y2={1}>
            <stop stopColor="#4a00e0" />
            <stop stopColor="#8e2de2" offset="100%" />
          </linearGradient>
        </defs>

        <path
          fill="url(#gr2)"
          fillOpacity="1"
          d="M 0 96 L 40 85.3 C 80 75 160 53 240 64 C 320 75 400 117 480 117.3 C 560 117 640 75 741 154 C 826 201 852 158 960 117.3 C 1038 82 1038 82 1200 64 C 1280 53 1360 75 1400 85.3 L 1440 96 L 1440 320 L 1400 320 C 1360 320 1280 320 1200 320 C 1120 320 1040 320 960 320 C 880 320 800 320 720 320 C 640 320 560 320 480 320 C 400 320 320 320 240 320 C 165 319 80 320 42 319 L 0 320 Z"
        ></path>
      </svg>
      <div style={{marginLeft:"50px"}}>
        <h1 style={{ marginTop: "200px" }}>Psychometric Analysis</h1>
        <p>
          This test is widely recommended by psychologists, and is based on five
          main traits of human personality (OCEAN): openness, conscientiousness,
          extraversion, agreeableness, and neuroticism. It also considers facets
          of these different aspects.
        </p>
        <p>
          There are 300 questions in this test. The site will ask you one at a
          time. The results will update as you go, so you can stop and copy the
          results at any time. The more questions you answer, the more accurate
          your results will be. The quiz distributes the questions so that a
          well-distributed variety of questions will be asked, even if not many
          have been answered, so short sessions should still be accurate.
        </p>
        <p>
          Answers are selected on a scale of &#8220;Absolutely disagree&#8221;
          (left side of the spectrum), to &#8220;Absolutely agree&#8221; (right
          side of the spectrum). The middle represents, &#8220;Neither agree nor
          disagree.&#8221; Simply click on the spectrum in the spot you think
          best represents your stance.
        </p>
        <p>
          This quiz provides the ability to save your progress and resume a
          session. Near the bottom of the page are two buttons: &#8220;Save
          progress&#8221; and &#8220;Load progress.&#8221; Press &#8220;Save
          progress&#8221; to fill the text box with your progress. Copy and save
          all of the text in order to use it later. When you wish to resume your
          session at any other time, paste your text into the same box, and
          press &#8220;Load progress.&#8221;
        </p>
        <p>
          The results table will show the traits that your personality seems to
          have, based on your answers. Traits at the top are farthest from
          average, and will influence your personality more than traits beneath
          them.
        </p>
        <p>
          Near the bottom is a block of words that summarize the results of your
          personality. Similarly to the table, words near the beginning of the
          block are considered more significant to your personality than words
          that come later. Words will appear for a trait if it is farther than
          17.5% away from zero.
        </p>
        <hr />
        <p>
          <span id="completed"></span> of 300 questions answered
        </p>
        <p>
          <input type="button" id="undo-button" value="Undo last answer" />
        </p>
        <p id="question"></p>
        <table>
          <tr>
            <td colspan="3">
              <div
                id="answer"
                style={{ cursor: "pointer", width: "200px", height: "50px" }}
              ></div>
            </td>
          </tr>
          <tr>
            <td style={{ color: "#005290" }}>Disagree</td>
            <td></td>
            <td style={{ textAlign: "right", color: "#c47d00" }}>Agree</td>
          </tr>
        </table>
        <p>
          <input type="button" id="results-toggle" value="Hide/show results" />
        </p>
        <div id="all-results">
          <hr />
          <table id="result-facets" class="result-facets"></table>
          <hr />
          <p id="result-words"></p>
        </div>
        <hr />
        <p>
          <input id="save-progress" type="button" value="Save progress" />{" "}
          <input id="load-progress" type="button" value="Load progress" />
        </p>
        <p>
          <textarea id="progress-box" cols="50" rows="4"></textarea>
        </p>
      </div>
    </div>
  );
};

export default PQuiz;
