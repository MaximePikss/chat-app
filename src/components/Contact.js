import React from 'react'
import './components/Contact.css'

const name = 'Ratata Gonzales'
const avatar = 'https://randomuser.me/api/portraits/lego/6.jpg'
const online = true

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} />

      <div className="">
        <h4 className="name">{name}</h4>
        <div className="status">
          <span className="status-online"></span>
          <p className="status-text">{online ? 'Online' : 'Offline'}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
