import React from "react"
// import SplitText from "react-pose-text"
import posed, { PoseGroup } from "react-pose"

const Title = props => {
  // Animation settings

  const Content = posed.div({
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      duration: 400,
    },
  })
  return (
    <>
      {/* Conditionally render title if supplied */}
      {props.title && (
        <h1 className="font-weight-bold white-text">
          {/* Apply text effects */}
          <Content initialPose="exit" pose="enter">
            {props.title}
          </Content>
        </h1>
      )}
      {/* Conditionally render title if supplied */}
      {props.subtitle && (
        <h5 className="text-white">
          {/* Apply text effects */}
          <Content initialPose="exit" pose="enter">
            {props.subtitle}
          </Content>
        </h5>
      )}
    </>
  )
}

export default Title
