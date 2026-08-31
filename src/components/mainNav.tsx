import React from 'react'

function mainNav() {
  return (
    <nav>
          <ul className="flex justify-center gap-8">
            <li className="nav-item">Systems</li>
            <li className="nav-item">Planets</li>
            <li className="nav-item">Species</li>
            <li className="nav-item">Api Docs</li>
          </ul>
        </nav>
  )
}

export default mainNav