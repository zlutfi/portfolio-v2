import React from "react";
import Zoom from "react-reveal/Zoom"

const Reveal = ({children}) = (
        <Zoom delay={400}>
           {children} 
        </Zoom>
    )
export default Reveal