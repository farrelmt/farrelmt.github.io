import React from "react"
import Navbar from "./Navbar"
import "../styles/index.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content"></div>
      {children}
      <footer></footer>
    </div>
  )
}
