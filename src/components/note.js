import React from 'react'

import PropTypes from 'prop-types'

import './note.css'

const Note = (props) => {
  return (
    <div className="note-container">
      <div className="note-web-note">
        <div className="note-content">
          <main className="note-main">
            <h2 className="note-heading">{props.Heading}</h2>
            <p className="note-paragraph">
              <span>{props.text}</span>
              <br></br>
              <br></br>
              <span>{props.text1}</span>
              <br></br>
            </p>
          </main>
          <div className="note-explore-more">
            <p className="note-text05">{props.Text}</p>
          </div>
        </div>
        <div className="note-image">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="note-image1"
          />
        </div>
      </div>
      <div className="note-desktop-note">
        <div className="note-content1">
          <main className="note-main1">
            <h2 className="note-heading1">{props.Heading2}</h2>
            <p className="note-paragraph1">
              <span>{props.text4}</span>
              <br></br>
              <br></br>
              <span>{props.text5}</span>
              <br></br>
            </p>
          </main>
          <div className="note-explore-more1">
            <p className="note-text11">{props.Text2}</p>
          </div>
        </div>
        <div className="note-image2">
          <img
            alt={props.image_alt2}
            src={props.image_src2}
            className="note-image3"
          />
        </div>
      </div>
      <div className="note-mobile-note">
        <div className="note-content2">
          <main className="note-main2">
            <h2 className="note-heading2">{props.Heading1}</h2>
            <p className="note-paragraph2">
              <span>{props.text2}</span>
              <br></br>
              <br></br>
              <span>{props.text3}</span>
              <br></br>
            </p>
          </main>
          <div className="note-explore-more2">
            <p className="note-text17">{props.Text1}</p>
          </div>
        </div>
        <div className="note-image4">
          <img
            alt={props.image_alt1}
            src={props.image_src1}
            className="note-image5"
          />
        </div>
      </div>
    </div>
  )
}

Note.defaultProps = {
  text2:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  text3:
    'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  Heading1: 'Accessing this Medicare benefit is easy',
  Text1: 'Explore more ->',
  text1:
    'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  Text2: 'Explore more ->',
  Heading: 'Accessing this Medicare benefit is easy',
  image_alt2: 'image',
  text5:
    'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  image_alt1: 'image',
  Heading2: 'Accessing this Medicare benefit is easy',
  image_src1: '/SectionImages/group%201490-1200w.png',
  text4:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  image_src: '/SectionImages/group%201490-1200w.png',
  image_alt: 'image',
  image_src2: '/SectionImages/group%201490-1200w.png',
  text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.',
  Text: 'Explore more ->',
}

Note.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  Heading1: PropTypes.string,
  Text1: PropTypes.string,
  text1: PropTypes.string,
  Text2: PropTypes.string,
  Heading: PropTypes.string,
  image_alt2: PropTypes.string,
  text5: PropTypes.string,
  image_alt1: PropTypes.string,
  Heading2: PropTypes.string,
  image_src1: PropTypes.string,
  text4: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src2: PropTypes.string,
  text: PropTypes.string,
  Text: PropTypes.string,
}

export default Note
