import React, { Component } from 'react'

export default class NewsletterForm extends Component {
  render() {
    return (
      <div className="centered-iframe">
        <iframe
          width="100%"
          height="320"
          src="https://irul.substack.com/embed"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    )
  }
}
