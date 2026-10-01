
import React from 'react';
import Leftimg from "../Assests/left-image.png";
import Rightimg from "../Assests/right-image.png";
import './About.css';
const Aboutsec = [
  {
    id: 1,
    icon: Leftimg,
    title: "Let’s discuss about your project",
    para: "Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
  },
  {
    id: 2,
    icon: Rightimg,
    title: "We can help you to grow your business",
    para: "Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."
  }
];

export default function About() {
  return (
    <section id="about" className="about">
      {Aboutsec.map((item) => (
        <div className="about-row" key={item.id}>
          <div className="about-image">
            <img src={item.icon} alt={item.title} />
          </div>

          <div className="about-content">
            <h2>{item.title}</h2>
            <p>{item.para}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

