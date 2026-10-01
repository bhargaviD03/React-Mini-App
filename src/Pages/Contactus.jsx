import React, { useState } from 'react';
import Button from '../Components/Button';
import './Contactus.css';

export default function Contactus() {

 
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });


  const [err, setErr] = useState({});


  const handleChange = (e) => {
    setForm({ ...form,[e.target.name]: e.target.value });
  };


  const validate = () => {

    let newErrors = {};


    if (!form.name.trim()) {

      newErrors.name = "Name is required...";

    } else if (form.name.trim().length < 3) {

      newErrors.name = "Name must be at least 3 characters...";

    }


    if (!form.email.trim()) {

      newErrors.email = "Email is required...";

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {

      newErrors.email = "Enter a valid email address...";

    }


    if (!form.message.trim()) {

      newErrors.message = "Message is required...";

    } else if (form.message.trim().length < 10) {

      newErrors.message = "Message must be at least 10 characters...";

    }


    setErr(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (validate()) {
        console.log("Validated Form Data:", form);

      alert("Form submitted successfully....");

      setForm({
        name: '',
        email: '',
        message: ''
      });

      setErr({});
    }
  };


  return (
    <section id="contactus">

      <h1>Talk To Us</h1>

      <p>
        Maecenas pellentesque ante faucibus lectus
        vulputate sollicitudin. Cras feugiat hendrerit semper.
      </p>


      <div className="full">

      
        <div className="Left">

          <h1>Keep in touch</h1>

          <p>
            110-220 Quisque diam odio, maximus ac consectetur eu,
            10260 auctor non lorem
          </p>

          <br />

          <p>
            You are NOT allowed to re-distribute Softy Pinko
            template on any template collection websites. Thank you.
          </p>

        </div>


     
        <div className="Right">

          <form onSubmit={handleSubmit}>

            <div className="form-content">

              <input
                type="text"
                placeholder="Full Name"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              {err.name && (
                <p className="error">{err.name}</p>
              )}

            </div>


            <div className="form-content">

              <input
                type="email"
                placeholder="E-Mail Address"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              {err.email && (
                <p className="error">{err.email}</p>
              )}

            </div>


            <div className="form-content">

              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
              ></textarea>

              {err.message && (
                <p className="error">{err.message}</p>
              )}

            </div>


            <Button text="SEND MESSAGE" />

          </form>

        </div>

      </div>

    </section>
  );
}

