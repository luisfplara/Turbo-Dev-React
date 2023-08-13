import React, { Component } from 'react'
import Sec1 from './sections/home/sec1'
import Sec2 from './sections/home/sec2'
import Sec3 from './sections/home/sec3'
import Sec4 from './sections/home/sec4'

import './home.css'



export default class Home extends Component {
  render() {
    return (

      <div className='home'>

       <Sec1/>
       <Sec2/>
       <Sec3/>
       <Sec4/>


      </div>
    )
  }
}

/*


      <div className='home'>

        <Sec1/>
        <Sec2/>
        <Sec3/>
        <Sec4/>
      
      </div>
*/