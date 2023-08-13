import React from 'react'
import me from '../../../assets/images/me.jpg.jpg'
import styles from './introduction.module.css'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
function Introduction() {
    return (
        <div className='section'>
            <div className={styles.introduction}>

                <img src={me} />
                <div className={styles.description}>
                    <div>
                        <FormatQuoteIcon style={{
                            transform: "scale(-2)",

                        }} />

                    </div>

                    A motivated individual with a passion for designing, developing, and implementing innovative solutions to complex technical problems. With a strong background in computer science and engineering, I have expertise in programming languages, software development methodologies, and hardware systems. My experience has allowed me to excel in a variety of roles, including software engineering, hardware design, and systems administration.

                    <div className={styles.quote}>
                        <FormatQuoteIcon style={{
                            transform: "scale(2)",

                        }} />

                    </div>
                </div>
                <div className={styles.name}>
                    Luis F P Lara
                </div>
                <div className={styles.tittle}>
                    Computer Engineer
                </div>
            </div>
            <div className={styles.buttons}>
                        <div className='std_btn' style={{ backgroundColor: '#006600' }}>Contact</div>
                        <div className='std_btn' style={{ backgroundColor: '#2A2A2A' }}>Curriculum</div>
                    </div>
        </div>

    )
}

export default Introduction