import React, { useState } from 'react'
import styles from './sec2.module.css'
import lottie2 from '../../../assets/lottie/lottie2_pc.json'
import Lottie from "lottie-react";

import lottie_mobile from "../../../assets/lottie/lottie_mobile.json";
import lottie_web from "../../../assets/lottie/lottie_web.json";
import lottie_desktop from "../../../assets/lottie/lottie_desktop.json";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './sec2.css'



const web = () => (
    <div className={styles.content}>
        <div className={styles.contentLeft}>
            <div className={styles.contentLeftHeader}>
                A web page plays a crucial role in today's digital age.
            </div>

            <div className='section-content-text '>
                It's a fundamental tool for modern businesses to establish an online presence, build credibility, engage with customers, and drive growth in the digital marketplace.
            </div>

            <div className={styles.contentLeftLearnMore}>
                Learn More
            </div>
        </div>
        <div className={styles.contentRight}>
            <Lottie
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                animationData={lottie_web}
                
                loop={true}
                autoplay={true}

            />
        </div>



    </div>
)
const mobile = () => (
    <div className={styles.content}>
        <div className={styles.contentLeft}>
            <div className={styles.contentLeftHeader}>
            A mobile app can offer numerous benefits to a business
            </div>

            <div className='section-content-text '>
            Mobile apps provide a direct and personalized channel for businesses to interact with their customers, and  with the increasing use of smartphones, customers expect quick and easy access to products and services. 
            </div>

            <div className={styles.contentLeftLearnMore}>
                Learn More
            </div>
        </div>
        <div className={styles.contentRight}>
            <Lottie
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                animationData={lottie_mobile}
                loop={true}
                autoplay={true}

            />
        </div>



    </div>
)
const desktop = () => (
    <div className={styles.content}>
        <div className={styles.contentLeft}>
            <div className={styles.contentLeftHeader}>
                Custom desktop aplications can fit better to your company needs 
            </div>

            <div className='section-content-text '>
            A business should consider developing its own custom desktop app for a variety of reasons, each of which can contribute to improved efficiency, productivity, and competitiveness.
            </div>

            <div className={styles.contentLeftLearnMore}>
                Learn More
            </div>
        </div>
        <div className={styles.contentRight}>
            <Lottie
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                animationData={lottie_desktop}
                loop={true}
                autoplay={true}

            />
        </div>



    </div>
)
const carousel = [
    web(),
    mobile(),
    desktop()
]
function Sec2() {

    const [activeIndex, setActiveIndex] = useState(0);
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className='section'>

            <div className='section-header'>
                Custom solutions for all kind of problems
            </div>


            <div className={styles.selector}>
                <div onClick={() => setActiveIndex (0)} style={activeIndex==0?{ borderBottom: '2px #006600 solid' }: {}}>Web</div>
                <div onClick={() => setActiveIndex (1)} style={activeIndex==1?{ borderBottom: '2px #006600 solid' }: {}}>Mobile</div>

                <div onClick={() => setActiveIndex (2)} style={activeIndex==2?{ borderBottom: '2px #006600 solid' }: {}}>Desktop</div>

            </div>

            <div className={styles.carousel}>
                <AliceCarousel
                    activeIndex={activeIndex}
                    infinite
                    mouseTracking
                    items={carousel}
                    disableDotsControls
                    onSlideChange ={syncActiveIndex}
                    onSlideChanged={syncActiveIndex}
                  
                />
            </div>





        </div>
    )


}





export default Sec2