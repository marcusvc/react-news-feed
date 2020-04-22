import React from 'react'
import Articles from './article/Articles'
import './App.css'

function App () {
  return (
    <div className="app container-fluid">
      <header className="app-header">
        <p>
          My Feed
        </p>
      </header>
      <Articles />
    </div>
  )
}

export default App
