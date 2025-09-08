import React from 'react'
import { PieChart, Pie, Cell, Tooltip as RTooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function WidgetRenderer({ widget }) {
  if (!widget) return null
  if (widget.type === 'empty') {
    return <div className="empty">+ Add Widget</div>
  }
  if (widget.type === 'donut') {
    return (
      <div>
        <div className="widget-title">{widget.name}</div>
        <div style={{width:'100%', height:160}}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={widget.data} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={70} label>
                {widget.data.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
              </Pie>
              <RTooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
  if (widget.type === 'bar') {
    return (
      <div>
        <div className="widget-title">{widget.name}</div>
        <div style={{width:'100%', height:140}}>
          <ResponsiveContainer>
            <BarChart data={widget.data} layout="horizontal">
              <XAxis dataKey="label" />
              <YAxis />
              <RTooltip />
              <Bar dataKey="value">
                {widget.data.map((entry, idx) => <Cell key={idx} fill={entry.color} />)}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
  // fallback: simple text widget
  return (
    <div>
      <div className="widget-title">{widget.name}</div>
      <div className="small">{widget.text || 'No data'}</div>
    </div>
  )
}
