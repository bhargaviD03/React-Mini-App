import React from 'react'
import './Workprocess.css';
import Icon2 from "../Assests/icon2.png";

const Work= [
  {
    id: 1,
    icon: Icon2,
    title:"Get Ideas",
    para:"Godard pabst prism fam cliche."
  },
  {
    id: 2,
    icon: Icon2,
    title:"Sketch Up",
    para: "Godard pabst prism fam cliche."
  },
  {
    id: 3,
    icon: Icon2,
    title:"Discuss",
    para:"Godard pabst prism fam cliche."
  },
   {
    id: 4,
    icon: Icon2,
    title:"Revise",
    para:"Godard pabst prism fam cliche."
  },
   {
    id: 5,
    icon: Icon2,
    title:"Approve",
    para:"Godard pabst prism fam cliche."
  },
   {
    id: 6,
    icon: Icon2,
    title:"Launch",
    para:"Godard pabst prism fam cliche."
  },
]

export default function Workprocess() {
  return (
     <section id="workprocess"
      className="Heros">
      <h1>
        Work Process
      </h1>

      <p>
       Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet interdum, vehicula ut ex. Donec ante diam.
      </p>

      <div className="content">
        {Work.map((info) => {
          return (
            <div key={info.id}>
              <img src={info.icon} alt="img" />

              <h2>{info.title}</h2>

              <p>{info.para}</p>
            </div>
          );
        })}
      </div>

      </section>
  )
}
