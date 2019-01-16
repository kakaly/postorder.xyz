import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Karthik Kalyanaraman`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{ maxWidth: 350 }}>
          Personal blog by <a href="https://mobile.twitter.com/karthikkalyan90">Karthik Kalyanaraman</a>.
          {' '}
          I&nbsp;de-mystify concepts and ideas by doing a post-order traversal on them.
        </p>
      </div>
    )
  }
}

export default Bio
