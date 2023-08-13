import React from 'react'
import styles from './sec3.module.css'
import lottie2 from '../../../assets/lottie/lottie2_pc.json'
import Lottie from "lottie-react";
import VerifiedIcon from '@mui/icons-material/Verified';
import BusinessSvg from '../../../assets/business.svg'
function Sec3() {
    return (
        <div className='section'>

            <div className={styles.content}>
                <div className='section-header'>
                    Why your business need a information system?
                </div>
                <div className='section-content-text ' style={{ paddingBottom: '15px' , textAlign:'center'}}>
                    A business needs an information system for several crucial reasons, as it plays a fundamental role in enhancing its overall efficiency, productivity, and competitiveness.
                </div>
                <div className={styles.contentBotton}>
                    <img src={BusinessSvg} />
                    <div className={styles.contentItens}>

                        <div style={{width: '50%'}} >

                            <div className={styles.contentItensCheck}>
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />
                                Data Management
                            </div>
                            <div className={styles.contentItensCheck}>
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />
                                Flexibility and Scalability
                            </div>
                            <div className={styles.contentItensCheck}>
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />
                                Streamlined Operations
                            </div>
                            <div className={styles.contentItensCheck}>
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />
                                Improved Communication
                            </div>


                        </div>

                        <div style={{width: '50%'}} >
                            <div className={styles.contentItensCheck} style={{ justifyContent: 'end', textAlign: 'end' }}>

                                Decision-making

                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />

                            </div>
                            <div className={styles.contentItensCheck} style={{ justifyContent: 'end', textAlign: 'end' }}>
                                Competitive Advantage
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />

                            </div>
                            <div className={styles.contentItensCheck} style={{ justifyContent: 'end', textAlign: 'end' }}>
                                Compliance and Security
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />

                            </div>
                            <div className={styles.contentItensCheck} style={{ justifyContent: 'end', textAlign: 'end' }}>
                                Enhanced Customer Service
                                <VerifiedIcon style={{
                                    color: "#006600",

                                }} />

                            </div>

                        </div>

                    </div>


                </div>
            </div>


        </div>
    )
}
//aa
export default Sec3