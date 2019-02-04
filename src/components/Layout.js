import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
class Layout extends React.Component {
  state = {display: 'programming'}

  render() {
    const { location, title, category, handler, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(.15),
            marginBottom: rhythm(3.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              ...scale(.45),
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              float: `left`,
            }}
            to={'/'}
          >
            {title}
          </Link>
          <ul style={{ float: `right`, }}>
            {category.map((type, i)=>{
              return (
                <li onClick={() => handler(type)}
                    style={{display: `inline-block`,
                            marginRight: `1rem`,
                            marginTop: `.5rem`,
                            cursor: `pointer`}}
                    key={i}>
                  {type}
                </li>)
            })}
          </ul>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#ffa7c4',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
