// import React from 'react'
import "./FormStyles.css"
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// const schema = yup.object().shape({
//   fullName: yup.string().required,
//   email: yup.string().email().required,
//   subject: yup.string().required,
//   message: yup.string().required
// })

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_15v6ry5', 
      'template_5vhxtms', 
      form.current, 
      'c7bARHmpbjAR9KDpe'
      ).then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

//   const { register, handleSubmit, errors } = useForm({
//     resolver: yupResolver(schema)
//   });

  // const submitForm = (data) => {

  // }
  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Full Name</label>
            <input type="text" name="fullName" placeholder="First & Last Name"/>
            <label>Your Email</label>
            <input type="email" name="email" />
            <label>Subject</label>
            <input type="text" name="subject" />
            <label>Message</label>
            <textarea rows="7" name="message" placeholder="Let me know how we can connect"/>
            {/* <input type="submit" id="submit"/> */}
            <button className="btn">Submit</button>
            {/* <input type="submit" value="Send" /> */}
        </form>
    </div>
  )
}

export default Form
