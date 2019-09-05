import React from "react"
import PropTypes from "prop-types"

// Inline Logo SVG
const Logo = props => {
  const style = props.className
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 163.13 72.6"
      className={`${style}`}
      title="Logo"
    >
      <defs>
        <clipPath transform="translate(0 .02)">
          <polygon points="163.13 72.58 91.3 72.58 91.3 -0.02 119.62 -0.02 119.62 64.44 163.13 64.1 163.13 72.58" />
        </clipPath>
      </defs>
      <path
        d="M86.17,72.58H0v-8.5L43.08,7.25,1.84,7.12,1.72,0H79.46V5.72L37.66,64.61l48.51-.51Z"
        transform="translate(0 .02)"
      />
      <path
        d="M163.13,72.58H91.3V0h28.32V64.44l43.51-.34Z"
        transform="translate(0 .02)"
      />
      <polygon points="163.13 72.6 91.3 72.6 91.3 0 119.62 0 119.62 64.46 163.13 64.12 163.13 72.6" />
      <g>
        <path
          d="M86.17,72.58H0v-8.5L43.08,7.25,1.84,7.12,1.72,0H79.46V5.72L37.66,64.61l48.51-.51Z"
          transform="translate(0 .02)"
        />
      </g>
    </svg>
  )
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Logo
