/**
 * Demo Include below NextJS features.
 *  - getInitialProps
 *  - withRouter
 *  - dynamic query parameter from page url e.g. {query} or this.props.router.query
 */
import React, { Component } from 'react';
import { withRouter } from 'next/router';

class Post extends Component {
  constructor(props){
    super(props);
  }

  /**
   * Dynamically Fetch data based on page dynamic routing
   */
  static async getInitialProps({ query }) {
    if(!query){
      return {post: []};
    }
    const API_URL = `https://jsonplaceholder.typicode.com/posts/${query.id}`;
    
    try {
      const res = await fetch(API_URL);
      let post = await res.json();
      return { post } // post will be available in props like this.props.post
    } catch(e) {
      throw new Error(e);
    }
  }

  render(){
    const { router, post } = this.props;
    const { title = '', body = '' } = post;
    return (
      <div>
        <h1> Id : {router.query.id}</h1>
        <h2>{title || 'No Records Found'}</h2>
        <p>{body}</p>
      </div>
    )
  }
}

export default withRouter(Post);