import React from "react"
import PropTypes from "prop-types"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import Fade from "react-reveal/Fade"

const Divider = ({ input }) => (
  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol className="py-5 text-center text-md-left">
        <Fade>
          <hr />
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
)

export default Divider

Divider.propTypes = {
  input: PropTypes.object.isRequired,
}

// const Divider = ({ input }) => {
//     const divider = input.primary.show_divider
//     const res = divider.valueOf()
//     if (res === "False") {
//       return (
//         <MDBContainer>
//           <MDBRow className="py-5">
//             <MDBCol className="py-5 text-center text-md-left">
//               <Fade>
//                 <hr />
//               </Fade>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       )
//     } else {
//       return <p>Nope</p>
//     }
//   }
