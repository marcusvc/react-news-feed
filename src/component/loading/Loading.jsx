import React from 'react'

function Loading () {
  return (
    <div className="row no-gutters align-items-center text-center row-cols-1" style={{ height: '100px' }}>
      <div className="col">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default Loading
