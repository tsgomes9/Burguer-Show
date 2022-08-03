import SessionHeader from './components/SessionHeader/SessionHeader'
import SessionHigh from './components/SessionHigh/SessionHigh'
import SessionCombos from './components/SessionCombos/SessionCombos'
import SessionReservation from './components/SessionReservation/SessionReservation'
import SessionContact from './components/SessionContact/SessionContact'

function App() {
  return (
    <div>
      <SessionHeader />
      <SessionHigh />
      <SessionCombos />
      <SessionReservation />
      <SessionContact />
    </div>
  )
}

export default App
