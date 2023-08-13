import React from 'react'
import ph from '../assets/placeholder.png'
import styles from './projectCard.module.css'
function ProjectCard(props) {
  return (


    <div className={styles.projectCard}>
      <img src={ph} />
      <div className={styles.contentLeft}>
        <div className={styles.projectType}>
          e-commerce
        </div>
        <div className={styles.name}>
        {props.name}
        </div>
        <div className={styles.description}>
          {props.description}

          <div className={styles.link}>
            Visite the site
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.infoStatus}>
            <h4 >
              Status:
            </h4>
            {props.status}

          </div>
          <div className={styles.infoRelease}>
            <h4>
              Release Date:
            </h4>
            {props.releaseDate}
          </div>


        </div>

      </div>

    </div>
  )
}

export default ProjectCard;