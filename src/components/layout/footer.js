import React from "react"

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFooter,
  // MDBBtn,
} from "mdbreact"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => (
  <MDBFooter className="font-small">
    <div className="footer-copyright text-center py-5">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <OutboundLink
              href="https://github.com/zlutfi/"
              target="_blank"
              rel="noopener noreferrer"
              title="My GitHub projects"
            >
              {/* Font Awesome icons */}
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="text-white mr-2"
              />{" "}
            </OutboundLink>
            Built by <strong>Z Lutfi</strong> - &copy; &nbsp;
            <strong>{new Date().getFullYear()}</strong> All Rights Reserved.
            Powered by{" "}
            <OutboundLink
              href="https://gatsby.org
                  "
              target="_blank"
              rel="noopener noreferrer"
              title="Gatsby"
            >
              Gatsby
            </OutboundLink>{" "}
            and deployed via{" "}
            <OutboundLink
              href="https://netlify.com
                  "
              target="_blank"
              rel="noopener noreferrer"
              title="Netlify"
            >
              Netlify
            </OutboundLink>{" "}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  </MDBFooter>
)

export default Footer
