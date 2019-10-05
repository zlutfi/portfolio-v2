import React from "react"

const ShapeDivider = props => {
  // Define props
  const fill = props.fill
  // If rotate prop is true return this
  if (props.rotateY === true)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ transform: "rotateY(180deg)" }}
      >
        <path
          // Replace default fill color with fill prop string value
          fill={fill}
          fillOpacity="1"
          d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    )
  if (props.rotateX === true)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ transform: "rotateX(180deg)" }}
      >
        <path
          // Replace default fill color with fill prop string value
          fill={fill}
          fillOpacity="1"
          d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    )
  // If rotate prop is false return this
  else
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          // Replace default fill color with fill prop string value
          fill={fill}
          fillOpacity="1"
          d="M0,32L80,69.3C160,107,320,181,480,202.7C640,224,800,192,960,165.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    )
}

export default ShapeDivider
