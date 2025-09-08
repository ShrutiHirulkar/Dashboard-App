import React from 'react'

export default function Navbar({ onOpenAdd }) {
  return (
    <div className="navbar">
      <div className="breadcrumb">Home <span style={{margin:'0 8px'}}>{'>'}</span> <strong>Dashboard V2</strong></div>
      <div className="search">
        <input placeholder="Search anything..." />
      </div>
      <div className="actions">
        <button className="btn" onClick={onOpenAdd}>Add Widget</button>
        <button className="btn">⟳</button>
        <button className="btn">⋯</button>
        <div>
          <select className="btn">
            <option>Last 2 days</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
      </div>
    </div>
  )
}
