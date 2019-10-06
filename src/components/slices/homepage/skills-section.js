import React, { Component } from "react"
import PropTypes from "prop-types"
import SectionTitle from "../../section-title"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import Zoom from "react-reveal/Zoom"
import ShapeDivider from "../../shape-divider"

export default class Skills extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <ShapeDivider fill="#f7f8fa" />
        <MDBContainer
          className="py-4 py-md-5 mx-auto text-center"
          tag="section"
        >
          {/* Title section */}
          <SectionTitle
            title={input.primary.skills_section_title.text}
            subtitle={input.primary.skills_section_subtitle.html}
          />
          {/* Display all skills dynamically */}
          <MDBRow>
            {input.items.map((skill, index) => (
              <MDBCol size="6" md="3" key={index}>
                {/* Zoom in on reveal */}
                <Zoom key={index} delay={index * 300}>
                  {/* Main skill icon */}
                  <MDBIcon
                    icon={skill.skill_icon}
                    size="5x"
                    className="text-primary"
                  />
                  {/* Skill header */}
                  <h5 className="pt-5 font-weight-bold">
                    {skill.skill_title.text}
                  </h5>
                  {/* Skill text */}
                  <p>{skill.skill_content.text}</p>
                </Zoom>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

Skills.propTypes = {
  input: PropTypes.object.isRequired,
}
