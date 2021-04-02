import React from 'react'
import DateSelection from './DateSelection';
import './RegisterForm.css';
import { useState } from 'react';

function RegisterForm() {
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        year: "",
        month: "",
        day: "",
        NoOfPersons: "",
    });
    const [valid,setValid] = useState(false);
    const [submitted,setSubmitted] = useState(false);
    const handleNameInputChange = (event) => {
        setSubmitted(false);
        setValues({...values,name:event.target.value});
    };
    const handlePhoneInputChange = (event) => {
        setSubmitted(false);
        setValues({...values,phone:event.target.value});
    }
    const handleEmailInputChange = (event) => {
        setSubmitted(false);
        setValues({...values,email: event.target.value});
    }
    const handlePersonsInputChange = (event) => {
        setSubmitted(false);
        setValues({...values,NoOfPersons: event.target.value});
    }
    const redirect = () => {
        clearInterval(initialInterval);
        window.location = "/";
    }
    let initialInterval;
    // let exp;
    let exp = /^[A-Za-z ]*$/;
    const handleSubmit = (event) => {
        event.preventDefault();
        // let exp = /^[A-Za-z ]*$/;
        let username = document.myform.name.value;
        console.log(exp.test(username));
        if(exp.test(username))
        {
            if(values.email && values.email.includes('@'))
            {
                if(values.NoOfPersons)
                {
                    if(values.phone && values.phone.length > 9)
                    {
                        setValid(true);
                        initialInterval = setInterval(redirect,1000);
                    }
                }
            }
        }
        
        setSubmitted(true);
    }


    return (
        <body id="register-form-container">
            <form name="myform" onSubmit={handleSubmit}>
                {submitted && valid ? <div className="success-message">Success! Thank you for registering!</div> : <div id="enter-details">Enter Your details</div>}
                <input type="text" 
                onChange={handleNameInputChange} 
                required 
                value={values.name} 
                name="name" 
                className="form-field" 
                placeholder="Name">
                </input>
                {submitted && !values.name ? <span className="error-in-register">Name Error</span> : null}
                {submitted && values.name && !exp.test(values.name) ? <span className="error-in-register">Name cannot be alphanumeric</span> : null}
                <input type="number" 
                onChange={handlePhoneInputChange} 
                required 
                value={values.phone} 
                name="phone" 
                className="form-field" 
                placeholder="Phone Number">
                </input>
                {submitted && values.phone && values.phone.length < 10 ? <span className="error-in-register">Enter valid phone number</span> : null}
                <input type="email" 
                onChange={handleEmailInputChange} 
                required name="email" 
                value = {values.email} 
                className="form-field" 
                placeholder="Email Address">
                </input>
                {submitted && !values.email ? <span className="error-in-register">Email Error</span> : null}
                {submitted && values.email && !values.email.includes("@") ? <span className="error-in-register">Email must contain @</span> : null}
                <span id="span-date-select">Select the date you want to visit.</span>
                <span className="form-field"><DateSelection id="date-selection"/></span>
                <input type="number" 
                onChange={handlePersonsInputChange} 
                required value = {values.NoOfPersons} 
                name="NoOfPersons" 
                className="form-field" 
                placeholder="Number of Persons">
                </input>
                <button className="form-field" type="Submit">Submit</button>
            </form>
    </body>
    )
}

export default RegisterForm;
