import React, { useEffect } from "react"
import { navigate, useStaticQuery, graphql } from "gatsby"
import { usePrismicPreview } from "gatsby-source-prismic"

export const PreviewPage = ({ location }) => {
  const { allPrismicPage } = useStaticQuery(graphql`
    {
      allPrismicPage {
        nodes {
          uid
        }
      }
    }
  `)
  const pageUIDs = allPrismicPage.nodes.map(node => node.uid)

  const pathResolver = () => doc => {
    const previewedUID = doc.prismicPage.uid

    if (pageUIDs.includes(previewedUID)) {
      return previewedUID
    } else {
      return "/unpublishedPreview"
    }
  }

  const { previewData, path } = usePrismicPreview(location, {
    repositoryName: "myRepoName",
    pathResolver,
  })

  useEffect(() => {
    if (previewData && path) {
      window.__PRISMIC_PREVIEW_DATA = previewData
      navigate(path)
    }
  }, [path, previewData])

  return <div>Loading preview...</div>
}
