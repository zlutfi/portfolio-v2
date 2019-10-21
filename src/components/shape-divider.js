import React from "react"

const ShapeDivider = props => {
  // Define props
  const fill = props.fill
  const fill2 = props.fill2
  // If rotate prop is true return this
  if (props.rotateY === true)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          transform: "rotateY(180deg)",
          // backgroundColor: `${bgcolor}`,
          margin: "-2px",
        }}
      >
        <rect width="1440" height="320" fill={fill2} />
        <path
          // Replace default fill color with fill prop string value
          fill={fill}
          fillOpacity="1"
          d="M0,32,80,69.3C160,107,320,181,480,202.7,640,224,800,192,960,165.3c160-26.3,320-48.3,400-58.6L1440,96V320H0Z"
        ></path>
      </svg>
    )
  if (props.rotateX === true)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{
          transform: "rotateX(180deg)",
          // backgroundColor: `${bgcolor}`,
          margin: "-2px",
        }}
      >
        <rect width="1440" height="320" fill={fill2} />
        <path
          // Replace default fill color with fill prop string value
          fill={fill}
          fillOpacity="1"
          d="M0,32,80,69.3C160,107,320,181,480,202.7,640,224,800,192,960,165.3c160-26.3,320-48.3,400-58.6L1440,96V320H0Z"
        ></path>
      </svg>
    )
  // If rotate prop is false return this
  else
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ margin: "-2px" }}
      >
        <rect width="1440" height="320" fill={fill2} />
        <path
          // Replace default fill color with fill prop string value
          fill={fill}
          fillOpacity="1"
          d="M0,32,80,69.3C160,107,320,181,480,202.7,640,224,800,192,960,165.3c160-26.3,320-48.3,400-58.6L1440,96V320H0Z"
        ></path>
      </svg>
    )
}

export default ShapeDivider
