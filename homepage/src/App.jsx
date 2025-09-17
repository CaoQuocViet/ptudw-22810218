import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome.jsx'
import Greeting from './components/Greeting.jsx'
import Counter from './components/Counter.jsx'
import UserList from './components/UserList.jsx'

function App() {
  const element = <h1>Hello, world!</h1>

  const image = <img src={reactLogo} alt="React Logo" />

  const number = 10;
  constdouble = (
    <p>
      {number} doubled is {number * 2}
    </p>
  )

  isLoggedIn = true;

  isAdmin = false;

  function showAlert() {
    alert('Button clicked!')
  }

  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const [count, setCount] = useState(0);

  return (
    <>
      {/* {element}
      {image}
      {double}

      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}

      {isAdmin && <p>You have admin privileges.</p>}

      <button onClick={showAlert} className='alert-button'>Click Me</button> */}

      {/* <ul>Fruits:
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <Welcome firstName='Viet' lastName='Cao'/>

      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button> */}

      <Greeting />

      <Counter />

      <UserList />
    </>
  )
}

export default App
