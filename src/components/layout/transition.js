import React from "react"
import posed, { PoseGroup } from "react-pose"

const timeout = 500

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        // filter: "blur(0px)",
        // y: 0,
        delay: timeout,
        beforeChildren: timeout,
        // transition: {
        //   y: { type: "spring", stiffness: 1000, damping: 15 },
        //   default: { duration: 300 },
        // },
      },
      exit: {
        opacity: 0,
        // filter: "blur(20px)",
        // y: 30,
        delay: timeout,
        // transition: {
        //   y: { type: "spring", stiffness: 1000, damping: 15 },
        //   default: { duration: 300 },
        // },
      },
    })

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
