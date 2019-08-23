import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const HomePage = ({ data }) => {
    return (
      <Layout>
        <Img
          className="headshot"
          fixed={data.file.childImageSharp.fixed}
          alt=""
        />
      </Layout>
    )
  }
  export const query = graphql`
    query {
      file(relativePath: { eq: "IMG_2895.JPG" }) {
        childImageSharp {
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `
  export default HomePage
