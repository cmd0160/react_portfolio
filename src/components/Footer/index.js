import React from 'react'
import linkedIn from '../../assets/images/LinkedIn_icon.png'
import gitHub from '../../assets/images/GitHub_icon.png'

const Footer = () => {
  return (
    <div className='container gh_li_con'>
      <div className="icons">
        <img src={gitHub} alt="GitHub Icon" className="github" />
      </div>
      <div className="icons">
        <img src={linkedIn} alt="GitHub Icon" className="github" />
      </div>
    </div>
  )
}

export default Footer