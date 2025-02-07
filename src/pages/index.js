import React from "react"
import * as styles from "./index.module.css"

const HomePage = () => {
  return (
    <div class={styles.container}>
      <head>
        <title>Coming Soon - From Scratch Press</title>
      </head>
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
  )
}

export default HomePage
