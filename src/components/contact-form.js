import React from "react"
import { MDBRow, MDBCol, MDBBtn, MDBIcon, MDBAlert } from "mdbreact"

import { Formik, Field } from "formik"
import validationSchema from "../utils/validationSchema"
import { navigate } from "gatsby-link"
import Fade from "react-reveal/Fade"

export default function ContactForm() {
  return (
    <MDBRow className="justify-content-center">
      <MDBCol size="12" className="mx-auto">
        <MDBRow>
          <MDBCol>
            <Form />
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  )
}

// Formik contact form fields
const Form = () => {
  // URI Encoder Component to validate form submissions
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contact",
            ...values,
          }),
        })
          // Navigate to success page after submission
          .then(() => {
            navigate("/success")
            setSubmitting(false)
          })
          // Display error message if message cannot be sent
          .catch(error => {
            alert("Error: Please Try Again!")
            setSubmitting(false)
          })
      }}
      render={({
        touched,
        errors,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (
        <form
          className="form m-3"
          name="contact"
          onSubmit={handleSubmit}
          onReset={handleReset}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          {/* Adjust this field to change the form values for Netlify Forms */}
          <input type="hidden" name="subject" value="Portfolio contact form" />
          <MDBRow>
            {/* Enter your name */}
            <MDBCol md="12" className="mb-0">
              <div className="form-group">
                <label htmlFor="name" className="label invisible">
                  Name
                </label>

                <Field
                  className="form-control form-control-md"
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                />
                {/* Display error message */}
                {touched.name && errors.name && (
                  <Fade collapse>
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.name}
                    </MDBAlert>
                  </Fade>
                )}
              </div>
            </MDBCol>
            {/* Enter your email address */}
            <MDBCol md="12" className="mb-0">
              <div className="form-group">
                <label htmlFor="email" className="label invisible">
                  Email Address
                </label>

                <Field
                  className="form-control form-control-md"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  aria-label="Email"
                />
                {/* Display error message */}
                {touched.email && errors.email && (
                  <Fade collapse>
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.email}
                    </MDBAlert>
                  </Fade>
                )}
              </div>
            </MDBCol>
            {/* Enter your phone number */}
            <MDBCol md="12" className="mb-0">
              <div className="form-group">
                <label htmlFor="phone" className="label invisible">
                  Phone Number
                </label>

                <Field
                  className="form-control form-control-md"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone"
                />
                {/* Display error message */}
                {touched.phone && errors.phone && (
                  <Fade collapse>
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.phone}
                    </MDBAlert>
                  </Fade>
                )}
              </div>
            </MDBCol>
            {/* Enter your message*/}
            <MDBCol md="12" className="mb-0">
              <div className="form-group">
                <label htmlFor="message" className="label invisible">
                  Message
                </label>

                <Field
                  className="form-control"
                  name="message"
                  component="textarea"
                  rows="6"
                  placeholder="Message"
                  aria-label="Message"
                />
                {/* Display error message */}
                {touched.message && errors.message && (
                  <Fade collapse>
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.message}
                    </MDBAlert>
                  </Fade>
                )}
              </div>
            </MDBCol>
          </MDBRow>
          {/* Submit this form on click */}
          <MDBRow>
            <MDBCol className="text-center pt-2">
              <MDBBtn
                color="primary"
                type="submit"
                name="submit"
                disabled={isSubmitting}
                aria-label="Submit"
                className="btn-rounded"
              >
                <MDBIcon icon="paper-plane" className="mr-2" />
                Send Your Message
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      )}
    />
  )
}
