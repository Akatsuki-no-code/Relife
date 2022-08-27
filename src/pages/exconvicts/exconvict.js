import React, { useState, useEffect } from "react";
import "./styles/exconvict.css";
import img1 from "../../static/images/vector 1.jpg"
import img2 from "../../static/images/31161.jpg"
import img3 from '../../static/images/v2.jpg'
import {Link,useNavigate} from 'react-router-dom'

const ExconvictInfo = () => {
    const nav = useNavigate()

  return (
    <div style={{ margin: 10 }}>
      <div>
        <div className="quote-holder">
          <div className="quote">
            <q style={{ textAlign: "center" }}>
              No matter how corrupt and unjust a convict may be, he loves
              fairness more than anything else. If the people placed over him
              are unfair, from year to year he lapses into an embittered state
              characterized by an extreme lack of faith.
            </q>
            <p> - Anton Chekhovs</p>
          </div>
        </div>

        <div className={"info-holder"}>
          <h1>Who are Ex-convicts?</h1>
          <div>
          <p className="info-body">
                Ex-Convict (or ex-offender or former inmate or probationer) is/are
                one of the various names a person can have. In simple term, it means
                former prisoner. Labelling every prisoner as an ex-convict has led
                to a major misunderstanding in the society. People view every
                ex-convict on the same level. Even if they stole something and went
                to jail, they are treated as if they committed a murder. This has
                led to a huge problem of separation of these people from the rest of
                the society. They aren’t able to reintegrate back into the society
                and earn a livelihood normally. Hence, they go back to the old means
                of committing crime to earn themselves some bread and get stuck in
                an endless loop of no return.
            </p>
            <img src={img1} height={350} />
            </div>
        </div>
        <div className={"info-holder"}>
            <div>
        <p className="info-body">
            Studies have shown that 83% of released prisoners are rearrested with
            a decade. Ex-convicts are often not allowed to vote, they struggle to
            find work and people think they are still dangerous and bad people. In
            other words, ex-prisoners are rejected from the society they are
            trying to re-enter and this rejection makes life after prison
            stressful and depressing. And what does this do? Stressed and unhappy
            ex-offenders reoffend.
            </p>
            <img src={img2} height={350}/>
            </div>
        </div>
        <div className={"info-holder"}>
            <div>
            <p>
        Hence, we are able to see that being an ex-convict makes it harder for
          you to reintegrate with society and being an addicted person makes it
          harder for you to live a healthy normal life. People often, knowingly
          or unknowingly, discriminate against ex-convicts and/or addicted
          people making a visible line of distinction between them and hence the
          gap only widens.</p>
          <img src={img2} height={350}/>
          </div></div>
      </div>
      <div className={"info-holder enroll-holder"}>
        <p>
        So JOIN US and make a difference
        </p>
        <div><button className="enroll-btn">
            Enroll
        </button>
        <button className="enroll-btn" onClick={()=> nav("/quiz")}>
            Take a mental health quiz
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default ExconvictInfo;
