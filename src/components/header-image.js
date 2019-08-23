import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "IMG_2895.JPG" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    return <Img fixed={data.file.childImageSharp.fixed} />
  }