import React from "react"
import posed from "react-pose"
import Img from "gatsby-image/withiepolyfill"

const Image = posed.img({
  zoomedIn: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flip: true,
  },
  zoomedOut: {
    position: "static",
    width: "auto",
    height: "auto",
    flip: true,
  },
})

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99],
}

const Frame = posed.div({
  zoomedIn: {
    applyAtStart: { display: "block" },
    opacity: 1,
  },
  zoomedOut: {
    applyAtEnd: { display: "none" },
    opacity: 0,
  },
})

class ZoomImg extends React.Component {
  state = { isZoomed: false }
  zoomIn() {
    this.setState({ isZoomed: true })
  }
  zoomOut() {
    this.setState({ isZoomed: false })
  }

  zoomOut = () => {
    window.removeEventListener("scroll", this.zoomOut)
    this.setState({ isZoomed: false })
  }
  render() {
    const { imageWidth, imageHeight, ...props } = this.props
    const { isZoomed } = this.state
    const pose = isZoomed ? "zoomedIn" : "zoomedOut"
    return (
      <div
        className="image-frame"
        onClick={() => (this.state.isZoomed ? this.zoomOut() : this.zoomIn())}
        style={{ width: imageWidth, height: imageHeight }}
      >
        {/* <Img fluid={} alt={}/> */}
        <Frame pose={pose} class="frame" />
        <Image pose={pose} {...props} />
      </div>
    )
  }
}

export default ZoomImg
