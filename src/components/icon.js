import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCode,
  faMobileAlt,
  faTachometerAlt,
  faUniversalAccess,
  faEnvelope,
  faFolderOpen,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons"

import {
  faHtml5,
  faCss3Alt,
  faJs,
  faAdobe,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"

// Generate Icons for rendering
const Icon = props => {
  // Skills section Icons
  if (props.type === "faCode") {
    return (
      <FontAwesomeIcon
        icon={faCode}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faMobileAlt") {
    return (
      <FontAwesomeIcon
        icon={faMobileAlt}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faTachometerAlt") {
    return (
      <FontAwesomeIcon
        icon={faTachometerAlt}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faUniversalAccess") {
    return (
      <FontAwesomeIcon
        icon={faUniversalAccess}
        size={props.size}
        className={props.color}
      />
    )
  }
  //   Technology section icons
  if (props.type === "faHtml5") {
    return (
      <FontAwesomeIcon
        icon={faHtml5}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faCss3Alt") {
    return (
      <FontAwesomeIcon
        icon={faCss3Alt}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faJs") {
    return (
      <FontAwesomeIcon icon={faJs} size={props.size} className={props.color} />
    )
  }
  if (props.type === "faAdobe") {
    return (
      <FontAwesomeIcon
        icon={faAdobe}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faJs") {
    return (
      <FontAwesomeIcon icon={faJs} size={props.size} className={props.color} />
    )
  }
  if (props.type === "faReact") {
    return (
      <FontAwesomeIcon
        icon={faReact}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faNodeJs") {
    return (
      <FontAwesomeIcon
        icon={faNodeJs}
        size={props.size}
        className={props.color}
      />
    )
  }
  //   Miscellaneous Icons
  if (props.type === "faEnvelope") {
    return (
      <FontAwesomeIcon
        icon={faEnvelope}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faFolderOpen") {
    return (
      <FontAwesomeIcon
        icon={faFolderOpen}
        size={props.size}
        className={props.color}
      />
    )
  }
  if (props.type === "faPaperPlane") {
    return (
      <FontAwesomeIcon
        icon={faPaperPlane}
        size={props.size}
        className={props.color}
      />
    )
  }
  return null
}

export default Icon
