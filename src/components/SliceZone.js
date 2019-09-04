import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Text,
  CodeBlock,
  Image,
  Quote,
  Info,
  Gallery,
  RecentPosts,
  RecentProjects,
  ImageLeft,
  ImageRight,
  TextImage,
  Carousel,
  ThreeColumns,
  //Homepage Slices
  Capabilities,
  Posts,
  Projects,
  Hero,
  Contact,
} from "../components/slices"

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map(s => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case "text":
          return <Text key={s.id} input={s} />
        case "code_block":
          return <CodeBlock key={s.id} input={s} />
        case "image":
          return <Image key={s.id} input={s} />
        case "quote":
          return <Quote key={s.id} input={s} />
        case "project_info":
          return <Info key={s.id} input={s} />
        case "image_gallery":
          return <Gallery key={s.id} input={s} />
        case "recent_posts":
          return <RecentProjects key={s.id} input={s} />
        case "recent_projects":
          return <RecentPosts key={s.id} input={s} />
        case "left_image_right_text":
          return <ImageLeft key={s.id} input={s} />
        case "right_image_left_text":
          return <ImageRight key={s.id} input={s} />
        case "text_with_image":
          return <TextImage key={s.id} input={s} />
        case "carousel":
          return <Carousel key={s.id} input={s} />
        case "three_columns":
          return <ThreeColumns key={s.id} input={s} />
        //Homepage Slices
        case "hero":
          return <Hero key={s.id} input={s} />
        case "capabilities":
          return <Capabilities key={s.id} input={s} />
        case "posts":
          return <Posts key={s.id} input={s} />
        case "projects":
          return <Projects key={s.id} input={s} />
        case "contact_cta":
          return <Contact key={s.id} input={s} />

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
