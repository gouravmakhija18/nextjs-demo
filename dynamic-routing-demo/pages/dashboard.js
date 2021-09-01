import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  /**
   * Dynamically Fetch data based on page dynamic routing
   */
  static async getInitialProps() {
    const USER_NAME = 'rwieruch'
    const API_URL = `https://api.github.com/users/${USER_NAME}`;
    
    try {
      const res = await fetch(API_URL);
      let user = await res.json();
      return { user } // post will be available in props like this.props.post
    } catch(e) {
      throw new Error(e);
    }
  }

  render() {
    const { name, bio, blog } = this.props.user;
    return (
      <>
        <h1>{name}</h1>
        <p>{`Bio: ${bio}`}</p>
        <p>{`Blog: ${blog}`}</p>
      </>
    )
  }
}

export default withRouter(Dashboard);