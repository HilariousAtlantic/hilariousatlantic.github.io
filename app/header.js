import React from 'react';

export default class Header extends React.Component {

  render() {

    return (
      <header>
        <a href="/">
          <img src="./img/logo-md.png" alt="Hilarious Atlantic Logo" />
        </a>
        <nav>
          <a href="#">Members</a>
          <a href="#">Projects</a>
          <a href="#">Articles</a>
        </nav>
      </header>
    )

  }

}
