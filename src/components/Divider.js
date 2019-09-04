import React from "react"
import PropTypes from "prop-types"

const Divider = props => {
  const fill = props.fill
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
      height="5vw"
    >
      <path
        fill={fill}
        d="M0 192v32h205.7v64h411.4v-32h205.8v-96h411.4v96H1440v64H0z"
      />
    </svg>
  )
}

Divider.propTypes = {
  fill: PropTypes.string.isRequired,
}

export default Divider
