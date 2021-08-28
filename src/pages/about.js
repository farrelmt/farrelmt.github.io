import React from "react"
import Layout from "../components/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faGithub,
  faArtstation,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section className={styles.about}>
        <h1>About Me</h1>
        <p>
          my name is Farrel Muhammad Taqi, born 19 October 2000 in Surabaya, a
          computer and design enthusiast, currently is Informatics Student at
          Sepuluh Nopember Institute of Technology in Indonesia.
        </p>
      </section>

      <section className={styles.linkmedia}>
        <a
          target="_blank"
          href="https://www.artstation.com/farrelmt"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faArtstation} size="5x" />
        </a>

        <a
          target="_blank"
          href="mailto: farrelmuhammadtaqi@gmail.com"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="5x" />
        </a>

        <a
          target="_blank"
          href="https://www.facebook.com/farrel.muhammadtaqi.1/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="5x" />
        </a>

        <a target="_blank" href="https://github.com/farrelmt" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="5x" />
        </a>

        <a
          target="_blank"
          href="https://twitter.com/farrelmt71"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="5x" />
        </a>
      </section>
    </Layout>
  )
}
