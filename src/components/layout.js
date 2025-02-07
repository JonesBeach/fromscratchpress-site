import * as React from "react"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: `var(--size-content)`,
        padding: `var(--size-gutter)`,
      }}
    >
      <main>{children}</main>
      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
        }}
      >
        © {new Date().getFullYear()} From Scratch Enterprises LLC
      </footer>
    </div>
  </>
)

export default Layout
