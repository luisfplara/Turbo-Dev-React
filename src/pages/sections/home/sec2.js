import React from 'react'
import styles from './sec2.module.css'
import lottie2 from '../../../assets/lottie/lottie2_pc.json'
import Lottie from "lottie-react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './sec2.css'
function Sec2() {

    const mobile = () => (
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
                    animationData={lottie2}
                    loop={true}
                    autoplay={true}

                />
            </div>



        </div>
    )

    const mobile1 = (a) => {

        return <div style={{ height: 200, backgroundColor: 'red' }}> aaaaa </div>

    }



    const carousel = [
        mobile(),
        mobile(),
        mobile()
    ]
    const itemsLength = Array.from({ length: 5 });

    const items = itemsLength.map((item, index) => {

        return <div className="item" style={{ height: 400,width:'100%',  backgroundColor: 'red' }}>aaaa</div>;
    });
    console.log(items)
    console.log(carousel)
    //aaaasdas
    return (
        <div className='section'>

            <div className='section-header'>
                Custom solutions for all kind of problems
            </div>


            <div className={styles.selector}>
                <a style={{ borderBottom: '2px #006600 solid' }}>Web</a>
                <a>Mobile</a>
                <a>Desktop</a>

            </div>


            <div className={styles.carousel}>
                <AliceCarousel 
            

                    infinite
                    disableDotsControls
                
                    mouseTracking
                    items={carousel}
                />
            </div>




        </div>
    )


}






export default Sec2