import React from 'react'
import Icon3 from "../Assests/icon3.png"
import './Testimonials.css';

const Feedback = [
  {
    id: 1,
    icon: Icon3,
    title: "Proin a neque nisi. Nam ipsum nisi, venenatis ut nulla quis, egestas scelerisque orci. Maecenas a finibus odio.",
    para1: "Catherine Soft",
    para2: "Managing Director"
  },
  {
    id: 2,
    icon: Icon3,
    title: "Integer molestie aliquam gravida. Nullam nec arcu finibus, imperdiet nulla vitae, placerat nibh. Cras maximus venenatis molestie.",
    para1: "Kelvin Wood",
    para2: "Digital Marketer"
  },
  {
    id: 3,
    icon: Icon3,
    title: "Quisque diam odio, maximus ac consectetur eu, auctor non lorem. Cras quis est non ante ultrices molestie. Ut vehicula et diam at aliquam.",
    para1: "David Martin",
    para2: "Website Manager"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h1>What do they say?</h1>

      <p>Donec tempus, sem non rutrum imperdiet, lectus orci fringilla nulla, at accumsan elit eros a turpis. Ut sagittis lectus libero.</p>
      <div className="feed">
        {Feedback.map((info) => {
          return (
            <div key={info.id}>
              <img src={info.icon} alt="testimonial" />
              <p>{info.title}</p>
              <p>{info.para1}</p>
              <p>{info.para2}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
