import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SectionTitle from "../../section-title"
import Logo from "../../../images/code.svg"

const Tech = ({ input }) => (
  <section style={{ backgroundColor: "#f7f8fa" }}>
    <MDBContainer
      className="py-4 py-md-5 mx-auto text-center"
      style={{ backgroundColor: "#f7f8fa" }}
    >
      {/* Title section */}
      <SectionTitle
        title={input.primary.technology_section_title.text}
        subtitle={input.primary.technology_section_subtitle.html}
      />
      <img src={Logo} alt="Logo" />
      {/* List all technologies dynamically */}
      <MDBRow>
        {input.items.map((tech, index) => (
          <MDBCol size="3" md="2" key={index}>
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
    </MDBContainer>
  </section>
)

export default Tech

Tech.propTypes = {
  input: PropTypes.object.isRequired,
}
