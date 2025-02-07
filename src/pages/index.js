import React from "react"
import * as styles from "./index.module.css"
import Seo from "../components/seo"
import Layout from "../components/layout"

const HomePage = () => {
  return (
    <Layout>
      <div class={styles.container}>
        <h1 class={styles.title}>From Scratch Press</h1>
        <p class={styles.subtitle}>Coming soon! Subscribe below for updates.</p>
        <iframe
          title="Substack"
          src="https://fromscratchdotorg.substack.com/embed"
          width="480"
          height="320"
          style={{ border: "1px solid #EEE", background: "white" }}
          frameborder="0"
        ></iframe>
        <p class={styles.footer}>
          Visit <a href="https://fromscratchcode.com/">From Scratch Code</a> for
          personalized Rust and Python mentorship.
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Coming Soon" />

export default HomePage
