import React from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import validator from "validator";
const required = (value) => {
  if (!value.toString().trim().length) {
    // We can return string or jsx as the 'error' prop for the validated Component
    return 'require';
  }
};
 
const email = (value) => {
  if (!validator.isEmail(value)) {
    return `${value} is not a valid email.`
  }
};

function Contact() {
  return (
    <section>
      <p>
        If you would like to collaborate or have any additional questions for me. Contact me at mackn478@gmail.com
      </p>
      <Form>
        <h3>Contact Form</h3>
        <div>
            <label>
                Name*
                <Input value= "" name="name" validations={[required, ]}/>
            </label>
        </div>
        <div>
            <label>
                Email*
                <Input value= "" name="email" validations={[required, email ]}/>
            </label>
        </div>
        <div>
            <label>
                Message*
                <Input value= "" name="message" validations={[required,]}/>
            </label>
            <div>
            <input type= "submit" value="Submit"></input>
            
            </div>
        </div>
        
      </Form>
    </section>
  );
}

export default Contact;
