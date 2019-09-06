import React from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBAlert,
  MDBAnimation,
} from "mdbreact"

import { Formik, Field } from "formik"
import validationSchema from "../utils/validationSchema"
import Img from "gatsby-image/withiepolyfill"
import Zoom from "react-reveal/Zoom"
import { navigate } from "gatsby-link"

export default function ContactForm({ input }) {
  return (
    <MDBRow className="justify-content-center">
      <MDBCol size="12" className="mx-auto">
        <Zoom bottom>
          <MDBCard>
            <MDBCardBody>
              <MDBRow>
                <MDBCol>
                  <Form />
                </MDBCol>
                <MDBCol md="6" className="d-none d-lg-block pr-md-4" middle>
                  <Img
                    fluid={
                      input.primary.contact_image.localFile.childImageSharp
                        .fluid
                    }
                    alt={input.primary.contact_image.alt}
                    className="rounded py-3"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </Zoom>
      </MDBCol>
    </MDBRow>
  )
}

// Form additions here.

// URI Encoder Component
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// Formik contact form fields
const Form = () => {
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
          .then(() => {
            navigate("/success")
            setSubmitting(false)
          })
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
          <input type="hidden" name="subject" value="Portfolio contact form" />
          <MDBRow>
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
                {touched.name && errors.name && (
                  <MDBAnimation type="fadeIn">
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.name}
                    </MDBAlert>
                  </MDBAnimation>
                )}
              </div>
            </MDBCol>
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
                {touched.email && errors.email && (
                  <MDBAnimation type="fadeIn">
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.email}
                    </MDBAlert>
                  </MDBAnimation>
                )}
              </div>
            </MDBCol>
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
                {touched.phone && errors.phone && (
                  <MDBAnimation type="fadeIn">
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.phone}
                    </MDBAlert>
                  </MDBAnimation>
                )}
              </div>
            </MDBCol>
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

                {touched.message && errors.message && (
                  <MDBAnimation type="fadeIn">
                    <MDBAlert className="danger mt-2" color="danger">
                      {errors.message}
                    </MDBAlert>
                  </MDBAnimation>
                )}
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-center pt-2">
              <MDBBtn
                color="light-green"
                type="submit"
                name="submit"
                disabled={isSubmitting}
                aria-label="Submit"
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
