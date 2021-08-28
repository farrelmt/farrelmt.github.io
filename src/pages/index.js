import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import mascotGIF from "../images/mascot.gif"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <img src={mascotGIF} alt="mascot" />
        {/* <Img fluid={data.file.childImageSharp.fluid} /> */}

        <div>
          <h1>Farrel Muhammad Taqi</h1>
          <p>Programmer, 3D Generalist, Game Developer</p>
        </div>
      </section>
    </Layout>
  )
}

// export const query = graphql`
//   query BannerQuery {
//     file(relativePath: { eq: "Banner.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
