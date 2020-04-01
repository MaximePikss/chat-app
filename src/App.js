import React from 'react'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Contact
        avatar="https://randomuser.me/api/portraits/lego/6.jpg"
        name="Ratata Gonzales"
        online
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/lego/0.jpg"
        name="Novak Gounvaski"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/lego/4.jpg"
        name="Joe Pompéleup"
        online
      />
    </div>
  )
}

export default App
