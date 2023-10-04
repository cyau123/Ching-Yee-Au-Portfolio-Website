import React, { useRef, useState, useContext, useEffect } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser'
import { themeContext } from '../../Context';
import { useFormik} from 'formik';
import * as Yup from 'yup';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        emailjs.sendForm('service_uvgi2vb', 'template_7idiogt', form.current, 'uJf10YAlAIUHB0swZ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
            formik.resetForm();
        }, (error) => {
            console.log(error.text);
        });
    };

    {/* Yup validation schema */}

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is a required field"),
        email: Yup.string().email("Invalid email address").required("Email is a required field"),
        message: Yup.string()
        .min(25, "Message must be at least 25 characters")
        .required("Message is a required field"),
    });

    const formik = useFormik({
        initialValues:{
            name: "",
            email: "",
            message:"",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            sendEmail(values);
        },
    });

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="awesome">
                <span style = {{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={formik.handleSubmit}>

                {/* Name */}
                <div className={`input-group ${formik.touched.name && formik.errors.name ? 'error' : ''}`}>
                    <label htmlFor='name'>Name *</label>
                    <input type="text" name="name" id="name" className={`user ${darkMode ? 'dark-mode' : ''}`} placeholder='Please enter your name' onChange={formik.handleChange} value={formik.values.name} />
                    {formik.touched.name && formik.errors.name && <div className="error-message">{formik.errors.name}</div>}
                </div>
                
                {/* Email address */}
                <div className={`input-group ${formik.touched.email && formik.errors.email ? 'error' : ''}`}>
                    <label htmlFor='email'>Email *</label>
                    <input type="email" name="email" id="email" className={`user ${darkMode ? 'dark-mode' : ''}`} placeholder='Please enter your email address' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email && <div className='error-message'>{formik.errors.email}</div>}
                </div>

                {/* Message area */}
                <div className={`input-group ${formik.touched.message && formik.errors.message ? 'error' : ''}`}>
                    <label htmlFor='message'>Message *</label>
                    <textarea name="message" id="message" className={`user ${darkMode ? 'dark-mode' : ''}`} placeholder='Please enter your message' onChange={formik.handleChange} value={formik.values.message}></textarea>
                    {formik.touched.message && formik.errors.message && <div className='error-message'>{formik.errors.message}</div>}
                </div>
                
                <input type="submit" value="Send" className='button' />
                <div className={done? 'success' : 'hidden'}>Thank you for reaching out! Your message has been successfully sent.</div>
                <div className="blur c-blur1" style={{background: "var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact