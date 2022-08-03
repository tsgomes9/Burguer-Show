import Button from 'react-bootstrap/esm/Button'
import NavigationBar from '../NavigationBar/NavigationBar'
import './style/SessionHeader.css'
import burguerHeader from '../../img/burguerHeader.jpg'

function SessionHeader() {
  return (
    <div
      className="header-area bg-dark"
      style={{ backgroundImage: `url(${burguerHeader})` }}
      id="session-header"
    >
      <NavigationBar />

      <div className="header-text-area">
        <div>
          <p className="header-text01 text-warning">semana</p>
          <p className="header-text02">SUPER COMBOS</p>
        </div>
        <Button variant="warning" className="btn-header" href="#session-high">
          confira
        </Button>
      </div>
    </div>
  )
}

export default SessionHeader
