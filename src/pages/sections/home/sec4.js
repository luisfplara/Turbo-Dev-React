import React from 'react'
import styles from './sec4.module.css'
import ph from '../../../assets/placeholder.png'
import { colors } from '@mui/material'
function Sec4() {
    return (
        <div className='section'>
            <div className={styles.projectsImg}>
                <img src={ph} style={{ width: '100%' }} />
            </div>
            <div className={styles.contentBottom}>

                <div className={styles.contentLeft}>
                    <div>
                        <div className='section-header'>
                            Looking for inspiration?
                        </div>
                        <div className='section-content-text'>
                            Check all our projects
                        </div>


                    </div>
                </div>
                <div className={styles.contentRight}>
                    <a href='/contact'>
                    <div className='std_btn' style={{ backgroundColor: '#006600' }}>Contact</div>
                    </a>
                    <a href='/projects'>

                    <div className='std_btn' style={{ backgroundColor: '#D9D9D9', color: 'black' }}>Projects</div>
                    </a>
                    
                </div>

            </div>
        </div>
    )
}

export default Sec4