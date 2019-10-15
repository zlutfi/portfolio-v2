import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionTitle from "../../section-title"
// import Logo from "../../../images/code.svg"
// import Img from "gatsby-image"

const Tech = ({ input }) => (
  <section style={{ backgroundColor: "#eee" }}>
    <MDBContainer
      fluid
      className="py-4 py-md-5 mx-auto text-center"
      style={{ backgroundColor: "#eee" }}
    >
      <MDBRow between>
        {/* Tech image section */}
        <MDBCol size="12" md="5">
          <SectionTitle
            title={input.primary.technology_section_title.text}
            subtitle={input.primary.technology_section_subtitle.html}
          />
          <MDBBtn color="primary" rounded>
            Learn More
          </MDBBtn>
          {/* <Img
            fluid={
              input.primary.technology_section_image.localFile.childImageSharp
                .fluid
            }
            alt={input.primary.technology_section_image.alt}
            className="ml-n5"
          /> */}
          {/* <img src={Logo} alt="Logo" className="img-fluid ml-n5" /> */}
        </MDBCol>
        <MDBCol size="12" md="7">
          {/* List all technologies dynamically */}
          <MDBRow>
            {/* Title section */}
            <MDBCol size="12">
              {/* <SectionTitle
                title={input.primary.technology_section_title.text}
                subtitle={input.primary.technology_section_subtitle.html}
              /> */}
              {/* <h2>{input.primary.technology_section_title.text}</h2>
              <p className="lead grey-text">
                {input.primary.technology_section_subtitle.text}
              </p> */}
            </MDBCol>
            {/* Tech Icons section */}
            {input.items.map((tech, index) => (
              <MDBCol size="4" key={index}>
                {/* Tech icon */}
                <FontAwesomeIcon
                  icon={["fab", tech.technology_icon]}
                  size="3x"
                  className="text-primary my-4"
                />
                {/* Tech header */}
                <h5 className="grey-text">{tech.technology_title.text}</h5>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
)

export default Tech

Tech.propTypes = {
  input: PropTypes.object.isRequired,
}
