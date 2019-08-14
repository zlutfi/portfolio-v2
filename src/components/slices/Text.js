import React from "react"
import { RichText } from "prismic-reactjs"
import { linkResolver } from "../../utils/linkResolver"
import { htmlSerializer } from "../../utils/htmlSerializer"
import { MDBContainer } from "mdbreact"

export default ({ slice }) => (
  <section className="text" style={{ paddingBottom: "5rem" }}>
    <MDBContainer>
      {RichText.render(slice.primary.text, linkResolver, htmlSerializer)}
    </MDBContainer>
  </section>
)
