import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function NotFound() {
  return (
    <Layout>
      <section className={styles.empatkosongempat}>
        <div>
          <h1>404 Pages Not Found</h1>
        </div>
      </section>
    </Layout>
  )
}
