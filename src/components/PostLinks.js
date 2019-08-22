import React from "react"
import { Link } from "gatsby"
import { MDBBtn } from "mdbreact"

const PostLinks = props => {
  return (
    <>
      {props.previous && (
        <Link to={`${props.previous.url}`}>
          <MDBBtn tag="span" color="elegant">
            &#8592; Prev Post
          </MDBBtn>
        </Link>
      )}
      {props.next && (
        <Link to={`${props.next.url}`}>
          <MDBBtn tag="span" color="elegant">
            Next Post &#8594;
          </MDBBtn>
        </Link>
      )}
    </>
  )
}

export default PostLinks
