import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  BodyText,
  CodeBlock,
  Image,
  Quote,
  ProjectInfo,
  ImageGallery,
  RecentPosts,
  RecentProjects,
} from "../components/slices"

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "text":
          return <BodyText key={s.id} input={s} />
        case "code_block":
          return <CodeBlock key={s.id} input={s} />
        case "image":
          return <Image key={s.id} input={s} />
        case "quote":
          return <Quote key={s.id} input={s} />
        case "project_info":
          return <ProjectInfo key={s.id} input={s} />
        case "image_gallery":
          return <ImageGallery key={s.id} input={s} />
        case "recent_posts":
          return <RecentPosts key={s.id} input={s} />
        case "recent_projects":
          return <RecentProjects key={s.id} input={s} />
        default:
          return null
      }
    })
    return <content>{slice}</content>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
