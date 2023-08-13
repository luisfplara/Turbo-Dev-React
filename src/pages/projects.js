import React, { Component } from 'react'

import './projects.css'

import ProjectCard from '../components/projectCard'

export default class Projects extends Component {
  render(props) {
    return (

      <div className='page-body'>
        <div className='cards'> 

        <ProjectCard
          name='Pet Shop Seu Amigo'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
          status='Launched'
          releaseDate='05/08/2023' />

        <ProjectCard
          name='PET SHOP SEU AMIGO'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
          status='Launched'
          releaseDate='05/08/2023' />
        <ProjectCard
          name='PET SHOP SEU AMIGO'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
          status='Launched'
          releaseDate='05/08/2023' />
        <ProjectCard
          name='PET SHOP SEU AMIGO'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...'
          status='Launched'
          releaseDate='05/08/2023' />
        <ProjectCard />
        <ProjectCard />

        </div>

      </div>
    )
  }

}
