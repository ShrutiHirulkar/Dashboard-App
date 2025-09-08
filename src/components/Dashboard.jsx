import React, { useState } from 'react'
import WidgetRenderer from './WidgetRenderer'
import { useSelector, useDispatch } from 'react-redux'
import { removeWidget } from '../store/store'

export default function Dashboard({ onOpenAdd }) {
  const data = useSelector(s => s.dashboard)
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]) // default today

  const today = new Date(selectedDate)

  // 🔹 filter widgets by selected calendar date
  const isWithinSelectedDate = (widgetDate) => {
    if (!widgetDate) return true
    const wDate = new Date(widgetDate)
    return (
      wDate.getFullYear() === today.getFullYear() &&
      wDate.getMonth() === today.getMonth() &&
      wDate.getDate() === today.getDate()
    )
  }

  // 🔹 filter widgets by name + selected date & sort descending by date
  const filtered = data.categories.map(cat => ({
    ...cat,
    widgets: cat.widgets
      .filter(w => w.name.toLowerCase().includes(query.toLowerCase()) && isWithinSelectedDate(w.date))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
  })).filter(c => c.widgets.length > 0)

  // 🔹 formatted current date for display
  const formattedDate = today.toLocaleDateString('en-GB', { 
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  })

  return (
    <div className="container">
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div>
          <h1 style={{ marginBottom: 4 }}>CNAPP Dashboard</h1>
          <p style={{ color: "#555" }}>{formattedDate}</p>
        </div>

        {/* Calendar date picker */}
        <div>
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: "6px 10px", borderRadius: "6px", border: "1px solid #ccc" }}
          />
        </div>
      </div>

      {/* Search + Add */}
      <div style={{ marginBottom: 12 }}>
        <input 
          placeholder="Search widgets by name..." 
          value={query}
          onChange={(e)=>setQuery(e.target.value)} 
          style={{padding:8, width:300, borderRadius:8, border:'1px solid #e6e9ef'}} 
        />
        <button 
          className="add-btn" 
          style={{ marginLeft: 12 }} 
          onClick={onOpenAdd}
        >
          + Add Widget
        </button>
      </div>

      {/* Widgets */}
      {filtered.length > 0 ? (
        filtered.map(cat => (
          <section className="section" key={cat.id}>
            <h2>{cat.name}</h2>
            <div className="grid">
              {cat.widgets.map(w => (
                <div className="card" key={w.id}>
                  <button 
                    className="remove-btn" 
                    onClick={() => { 
                      if(window.confirm('Remove widget?')) 
                        dispatch(removeWidget({categoryId:cat.id, widgetId:w.id})) 
                    }}
                  >
                    X
                  </button>
                  <WidgetRenderer widget={w} />
                  {/* Show widget date */}
                  {w.date && (
                    <p style={{ fontSize: "12px", color: "gray", marginTop: "6px" }}>
                      Added on: {new Date(w.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ))}
              {/* placeholder slot */}
              <div className="card"><div className="empty">+ Add Widget</div></div>
            </div>
          </section>
        ))
      ) : (
        <p style={{ color: 'gray', marginTop: '20px' }}>No widgets found</p>
      )}
    </div>
  )
}
