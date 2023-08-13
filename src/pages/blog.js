import React, { Component } from 'react'

import './blog.css'

import BlogCard from '../components/blogCard'

export default class Blogs extends Component {
  render(props) {
    return (

      <div className='page-body'>
        <div className='cards'>

          <BlogCard
            tittle='Como criar um blog post'
            resume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
            status='Launched'
            releaseDate='05/08/2023' />
          <BlogCard
            tittle='Como criar um blog post'
            resume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
            status='Launched'
            releaseDate='05/08/2023' />
          <BlogCard
            tittle='Como criar um blog post'
            resume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
            status='Launched'
            releaseDate='05/08/2023' />
          <BlogCard
            tittle='Como criar um blog post'
            resume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
            status='Launched'
            releaseDate='05/08/2023' />
          <BlogCard
            tittle='Como criar um blog post'
            resume='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
            status='Launched'
            releaseDate='05/08/2023' />


        </div>

      </div>
    )
  }

}
