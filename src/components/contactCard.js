import React from 'react'
import styles from './contactCard.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
function ContactCard() {
    return (
 
        <div className={styles.contact}>

            <div className={styles.formLeft}>
                <form>
                    <div className={styles.checkBoxs}>
                        <div className={styles.checkBoxs}>
                            Person
                            <input placeholder='Name' type="radio" id="html" name="fav_language" value="HTML" />
                        </div>
                        <div className={styles.checkBoxs}>
                            Company
                            <input placeholder='Name' type="radio" id="html" name="fav_language" value="HTML" />
                        </div>
                    </div>

                    <input placeholder='Name' type="text" name="name" />


                    <input placeholder='Email' type="text" name="email" />


                    <input placeholder='Phone' type="text" name="phone" />


                    <textarea placeholder='Message' type="textarea" name="message" />

                    <div className={styles.contentLeftButtons}>
                        
                        <div className='std_btn' style={{ backgroundColor: '#2A2A2A' }}>Send</div>
                    </div>
                </form>

            </div>
            <div className={styles.formRight}>
                <div className={styles.contactLink}>
                <EmailIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                luisfplara@gmail.com

                </div>
                <div className={styles.contactLink}>
                <LinkedInIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                linkedin.com/in/luis-f-p-a79054a1

                </div>
                <div className={styles.contactLink}>
                <YouTubeIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                youtube.com/@turbodev

                </div>
                <div className={styles.contactLink}>
                <InstagramIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                instagram.com/turbodev/

                </div>
            
            </div>

        </div>
    )
}

export default ContactCard

/*

 
        <div className={styles.contact}>

            <div className={styles.formLeft}>
                <form>
                    <div className={styles.checkBoxs}>
                        <div className={styles.checkBoxs}>
                            Person
                            <input placeholder='Name' type="radio" id="html" name="fav_language" value="HTML" />
                        </div>
                        <div className={styles.checkBoxs}>
                            Company
                            <input placeholder='Name' type="radio" id="html" name="fav_language" value="HTML" />
                        </div>
                    </div>

                    <input placeholder='Name' type="text" name="name" />


                    <input placeholder='Email' type="text" name="email" />


                    <input placeholder='Phone' type="text" name="phone" />


                    <textarea placeholder='Message' type="textarea" name="message" />


                </form>

            </div>
            <div className={styles.formRight}>
                <div className={styles.contactLink}>
                <EmailIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                luisfplara@gmail.com

                </div>
                <div className={styles.contactLink}>
                <LinkedInIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                linkedin.com/in/luis-f-p-a79054a1

                </div>
                <div className={styles.contactLink}>
                <YouTubeIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                youtube.com/@turbodev

                </div>
                <div className={styles.contactLink}>
                <InstagramIcon style={{color: 'white', width:'30px', height:'30px'}}/>
                instagram.com/turbodev/

                </div>
            
            </div>

        </div>

*/