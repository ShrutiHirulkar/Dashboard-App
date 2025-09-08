import { configureStore, createSlice } from '@reduxjs/toolkit'
import { initialData } from '../data/dashboardData'

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialData,
  reducers: {
    addWidget(state, action) {
      const { categoryId, widget } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) cat.widgets.push(widget)
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.categories.find(c => c.id === categoryId)
      if (cat) cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
    },
    updateFromJson(state, action) {
      return action.payload
    }
  }
})

export const { addWidget, removeWidget, updateFromJson } = dashboardSlice.actions
export const store = configureStore({ reducer: { dashboard: dashboardSlice.reducer } })
