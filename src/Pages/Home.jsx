import React from "react";
import Button from "../Components/Button";
import "../Components/Button.css";
import './Home.css'

import Icon1 from "../Assests/icon1.png";

const Content = [
  {
    id: 1,
    icon: Icon1,
    title: "Modern Strategy",
    para: "Customize anything in this template to fit your website needs"
  },
  {
    id: 2,
    icon: Icon1,
    title: "Best Relationship",
    para: "Contact us immediately if you have a question in mind"
  },
  {
    id: 3,
    icon: Icon1,
    title: "Ultimate Marketing",
    para: "You just need to tell your friends about our free templates"
  },
]

export default function Home() {
  return (
    <section
      id="home"
      className="Hero">
      <h1>
        We provide the best strategy
        to grow up your business
      </h1><br />

      <p>
        Softy Pinko is a professional Bootstrap 4.0 theme
        designed by Template Mo for your company at absolutely
        free of charge
      </p><br />

      <Button text="Discover More" /><br />

      <div className="hero-content">
        {Content.map((info) => {
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
  );
}