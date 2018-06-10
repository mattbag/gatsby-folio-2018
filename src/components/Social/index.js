import React from 'react'
import Link from 'gatsby-link'
import styles from './../../pages/master.module.css'

const socials = [
  {
    what: 'twitter',
    link: 'www',
  },
  {
    what: 'github',
    link: 'www',
  },
  {
    what: 'codepen',
    link: 'www',
  },
  {
    what: 'linkedin',
    link: 'www',
  },
]

const Social = () => (
  <div
    className={`${styles.shadow}`}
    style={{
      padding: '2rem 1rem',
      backgroundColor: 'blue',
      transform: 'translateY(40%) skewY(3deg)',
    }}
  >
    <div
      style={{
        // transform:'skewY(-10deg)',
        position: 'relative',
      }}
    >
      <ul
        style={{
          margin: 0,
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {socials.map(s => (
          <li key={s.what}>
            <Link
              to={s.link}
              style={{
                color: '#fff',
              }}
            >
              {s.what}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Social
