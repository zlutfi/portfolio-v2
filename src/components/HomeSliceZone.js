import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  CapabilitiesSection,
  PostsSection,
  ProjectsSection,
  HeroSection,
  ContactSection,
  BodyText,
} from "../components/slices"

export default class HomeSliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "text":
          return <BodyText key={s.id} input={s} />
        case "hero":
          return <HeroSection key={s.id} input={s} />
        case "capabilities":
          return <CapabilitiesSection key={s.id} input={s} />
        case "posts":
          return <PostsSection key={s.id} input={s} />
        case "projects":
          return <ProjectsSection key={s.id} input={s} />
        case "contact_cta":
          return <ContactSection key={s.id} input={s} />

        default:
          return null
      }
    })
    return <content>{slice}</content>
  }
}

HomeSliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
