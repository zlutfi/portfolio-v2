import React, { Component } from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact"
import ShapeDivider from "../../shape-divider"
import SectionTitle from "../../section-title"
import Zoom from "react-reveal/Zoom"

export default class Tech extends Component {
  render() {
    const { input } = this.props
    return (
      <>
        <ShapeDivider fill="#f7f8fa" rotate />
        <section style={{ backgroundColor: "#f7f8fa" }}>
          <MDBContainer
            className="py-4 py-md-5 mx-auto text-center"
            style={{ backgroundColor: "#f7f8fa" }}
          >
            {/* Title section */}
            <SectionTitle
              title={input.primary.technology_section_title.text}
              subtitle={input.primary.technology_section_subtitle.text}
            />
            {/* List all technologies dynamically */}
            <MDBRow>
              {input.items.map((tech, index) => (
                <MDBCol size="3" md="2" key={index}>
                  {/* Animate this via Zoom */}
                  <Zoom delay={index * 300}>
                    {/* Tech icon */}
                    <MDBIcon
                      fab
                      icon={tech.technology_icon}
                      size="3x"
                      className="text-primary py-4"
                    />
                    {/* Tech header */}
                    <h5 className="grey-text">{tech.technology_title.text}</h5>
                  </Zoom>
                </MDBCol>
              ))}
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    )
  }
}

Tech.propTypes = {
  input: PropTypes.object.isRequired,
}
