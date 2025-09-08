import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWidget } from '../store/store'

export default function AddWidgetModal({ onClose }) {
  const dispatch = useDispatch()
  const categories = useSelector(s => s.dashboard.categories)
  const [categoryId, setCategoryId] = useState(categories[0]?.id || '')
  const [type, setType] = useState('text')
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [dataStr, setDataStr] = useState('[{"label":"A","value":10,"color":"#8884d8"}]')

  function handleAdd() {
    if (!name) return alert('Enter widget name')
    let widget = { id: 'w-' + Date.now(), name, type }
    if (type === 'text') widget.text = text
    else {
      try {
        const parsed = JSON.parse(dataStr)
        widget.data = parsed
      } catch (e) {
        return alert('Invalid JSON for data')
      }
    }
    dispatch(addWidget({ categoryId, widget }))
    onClose()
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Add Widget</h3>
        <div className="form-row">
          <label>Category</label>
          <select value={categoryId} onChange={e => setCategoryId(e.target.value)}>
            {categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div className="form-row">
          <label>Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="text">Text</option>
            <option value="bar">Bar Chart</option>
            <option value="donut">Donut Chart</option>
          </select>
        </div>
        <div className="form-row">
          <label>Widget Name</label>
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
        {type === 'text' && <div className="form-row">
          <label>Text</label>
          <textarea value={text} onChange={e => setText(e.target.value)} rows={4} />
        </div>}
        {(type === 'bar' || type === 'donut') && <div className="form-row">
          <label>Data (JSON array of objects with label, value, color)</label>
          <textarea value={dataStr} onChange={e => setDataStr(e.target.value)} rows={6} />
          <div className="small">
            e.g. {[`{"label":"Critical","value":9,"color":"#B91C1C"}`]}
          </div>
        </div>}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 }}>
          <button className="btn" onClick={onClose}>Cancel</button>
          <button className="btn" onClick={handleAdd}>Add Widget</button>
        </div>
      </div>
    </div>
  )
}
