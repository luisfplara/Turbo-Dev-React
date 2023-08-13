import React from 'react'
import styles from './sec1.module.css'
import lottie1 from '../../../assets/lottie/lottie1_pc.json'

import Lottie from "lottie-react";
function Sec1() {
    return (
        <div className='section'>

            <div className='section-header'>
                Empowering Digital Transformation

            </div>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div className='section-content-text'>
                        Software development plays a crucial role in today's increasingly digital world. It encompasses the process of designing, coding, testing, and maintaining software applications and systems.
                    </div>
                    <div className={styles.contentLeftButtons}>
                        <a href='/contact'>
                            <div className='std_btn' style={{ backgroundColor: '#006600' }}>Contact</div>
                            </a>
                        <div className='std_btn' style={{ backgroundColor: '#2A2A2A' }}>Learn More</div>
                    </div>
                    <div className={styles.contentLeftLiked}>
                        <div className={styles.contentLeftLikedImgs}>
                            <img style={{ left: '0px' }} src='https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&ixlib=rb-4.0.3&w=200' />
                            <img style={{ left: '-16px' }} src='https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&ixlib=rb-4.0.3&w=200' />
                            <img style={{ left: '-32px' }} src='https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&ixlib=rb-4.0.3&w=200' />
                        </div>
                        <div>
                            Aproved by 100+ client like you.
                        </div>

                    </div>
                </div>
                <div className={styles.contentRight}>
                    <Lottie
                        rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                        animationData={lottie1}
                        loop={true}
                        autoplay={true}

                    />
                </div>


            </div>
            
        </div>
    )
}
// /className={styles.lottie}
export default Sec1;