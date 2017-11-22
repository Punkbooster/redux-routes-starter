import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostsIndex extends Component {
  render() {
    return(
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a post
          </Link>
        </div>
        <h3>Index Post Page</h3>
      </div>
    )
  }
}

export default PostsIndex
