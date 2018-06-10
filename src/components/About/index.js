import React from 'react'
// import Link from 'gatsby-link'
import logo from './../../logo.png'
import styles from '../../pages/master.module.css'

const About = () => (
  <div
  style={{
    margin: '4rem 0',
    display: 'grid',
    gridTemplateColumns: '1fr minmax(max-content, 3fr) 1fr',
    gridGap: 20
  }}
  >
  <div></div>
  <div
  className={`${styles.skew2} ${styles.shadow}`}
  style={{
    padding: '2rem',
    color: '#fff',
    backgroundColor: '#222',
  }}
  >
  <div className={styles.skew1}
  style={{
    position:'relative'
  }}>
  alert
   <img src={logo} width="60" style={{
     margin: 'auto',
     opacity:.5,
     top:0,
     left:0,
    right:0,
     bottom:0,
     width:'50%',
     position:'absolute'
       }} />
  </div>

  </div>


  <div></div>
  </div>
)

export default About
