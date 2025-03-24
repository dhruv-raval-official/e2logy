import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleText from './questions/question6';
import Form from './questions/question7';
import UpdateAddress from './questions/question8';
import FetchData from './questions/question9';
import { ThemeToggle, Container } from './questions/question10';

function App() {
  return (
    <>
      <div>
        <ToggleText />
        <Form />
        <UpdateAddress />
        <FetchData />
        <ThemeToggle>
          <Container />
        </ThemeToggle>
      </div>
    </>
  )
}

export default App
