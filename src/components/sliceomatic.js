import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  Text,
  Code,
  Image,
  Quote,
  Info,
  Gallery,
  ImageLeft,
  ImageRight,
  TextCard,
  Carousel,
  // SwiperCarousel,
  ThreeColumns,
  Columns,
  Divider,
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
          return <Code key={s.id} input={s} />
        case "image":
          return <Image key={s.id} input={s} />
        case "quote":
          return <Quote key={s.id} input={s} />
        case "project_info":
          return <Info key={s.id} input={s} />
        case "image_gallery":
          return <Gallery key={s.id} input={s} />
        case "left_image_right_text":
          return <ImageLeft key={s.id} input={s} />
        case "right_image_left_text":
          return <ImageRight key={s.id} input={s} />
        case "text_with_image":
          return <TextCard key={s.id} input={s} />
        case "carousel":
          return <Carousel key={s.id} input={s} />
        // case "carousel":
        //   return <SwiperCarousel key={s.id} input={s} />
        case "three_columns":
          return <ThreeColumns key={s.id} input={s} />
        case "columns":
          return <Columns key={s.id} input={s} />
        case "divider":
          return <Divider key={s.id} input={s} />

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
