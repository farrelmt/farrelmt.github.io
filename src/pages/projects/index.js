import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

export default function Projects({ data }) {
  const projects = data.projectproperty.nodes
  return (
    <Layout>
      <section className={styles.portofolio}>
        <h1>Projects</h1>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectQuery {
    projectproperty: allMarkdownRemark(
      sort: { fields: frontmatter___title, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`
