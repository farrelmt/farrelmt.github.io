import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const {
    title,
    // stack,
    featuredImage,
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.featured}>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <br />
        <br />
        {/* <h5>{stack}</h5> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetailQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        thumb {
          id
        }
        featuredImage {
          childImageSharp {
            fluid(quality: 10) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
