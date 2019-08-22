import { React } from "react"

export const PrevNext = ({ data: { allPrismicProject } }) => {
  const { data } = allPrismicProject
  allPrismicProject.edges.map(nav => (
    <>
      <Link to={nav.previous.url} key={nav.id}>
        <MDBBtn size="sm" tag="span" color="elegant">
          <MDBIcon icon="caret-left" className="mr-2" />
          Previous Project
        </MDBBtn>
      </Link>
      <Link to={nav.next.url} key={nav.id}>
        <MDBBtn size="sm" tag="span" color="primary">
          Next Project <MDBIcon icon="caret-right" className="ml-2" />
        </MDBBtn>
      </Link>
    </>
  ))
  if ((nav.previous.url = null))
    return (
      <>
        <Link to={nav.previous.url} key={nav.id}>
          <MDBBtn size="sm" tag="span" color="elegant" disabled>
            <MDBIcon icon="caret-left" className="mr-2" />
            Previous Project
          </MDBBtn>
        </Link>
        <Link to={nav.next.url} key={nav.id}>
          <MDBBtn size="sm" tag="span" color="primary">
            Next Project <MDBIcon icon="caret-right" className="ml-2" />
          </MDBBtn>
        </Link>
      </>
    )
  if ((nav.next.url = null))
    return (
      <>
        <Link to={nav.previous.url} key={nav.id}>
          <MDBBtn size="sm" tag="span" color="elegant">
            <MDBIcon icon="caret-left" className="mr-2" />
            Previous Project
          </MDBBtn>
        </Link>
        <Link to={nav.next.url} key={nav.id}>
          <MDBBtn size="sm" tag="span" color="primary" disabled>
            Next Project <MDBIcon icon="caret-right" className="ml-2" />
          </MDBBtn>
        </Link>
      </>
    )
  else
    return (
      <>
        <Link to={data.previous}>
          <MDBBtn size="sm" tag="span" color="elegant">
            <MDBIcon icon="caret-left" className="mr-2" />
            Previous Project
          </MDBBtn>
        </Link>
        <Link to={data.next}>
          <MDBBtn size="sm" tag="span" color="primary">
            Next Project <MDBIcon icon="caret-right" className="ml-2" />
          </MDBBtn>
        </Link>
      </>
    )
}
