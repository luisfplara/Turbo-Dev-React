import React from 'react'
import ph from '../assets/placeholder.png'
import styles from './blogCard.module.css'
function blogCard(props) {
  return (


    <div className={styles.blogCard}>
      <img src={ph} />
      <div className={styles.contentLeft}>
        <div className={styles.date}>

        3 days ago

        </div>
        <div className={styles.tittle}>
          {props.tittle}
        </div>
        <div className={styles.resume}>
          {props.resume}


        </div>
        <div className={styles.bottomInfo}>
          <div className={styles.autor}>
            <img src={ph} />
            Luis Fernando

          </div>
          <div className={styles.readFull}>
            Read full post 
          </div>

        </div>




      </div>

    </div>
  )
}

export default blogCard;