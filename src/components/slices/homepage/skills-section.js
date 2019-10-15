import React from "react"
import PropTypes from "prop-types"
import SectionTitle from "../../section-title"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
// import ShapeDivider from "../../shape-divider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Skills = ({ input }) => (
  <>
    {/* <ShapeDivider fill="#f7f8fa" /> */}
    <section style={{ backgroundColor: "#111" }}>
      <MDBContainer className="py-4 py-md-5 mx-auto text-center">
        {/* Title section */}
        <SectionTitle
          title={input.primary.skills_section_title.text}
          subtitle={input.primary.skills_section_subtitle.html}
        />
        {/* Display all skills dynamically */}
        <MDBRow className="grey-text">
          {input.items.map((skill, index) => {
            return (
              <MDBCol size="6" md="3" key={index}>
                {/* Main skill icon */}
                <FontAwesomeIcon
                  icon={skill.skill_icon}
                  size="5x"
                  className="text-primary"
                />
                {/* Skill header */}
                <h5 className="pt-5 font-weight-bold grey-text">
                  {skill.skill_title.text}
                </h5>
                {/* Skill text */}
                <p>{skill.skill_content.text}</p>
              </MDBCol>
            )
          })}
        </MDBRow>
      </MDBContainer>
    </section>
  </>
)

export default Skills

Skills.propTypes = {
  input: PropTypes.object.isRequired,
}
