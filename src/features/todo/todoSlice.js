import {createSlice,nanoid } from '@reduxjs/toolkit'

// it can have both array and object
const initialState = {
  todos: [{id: 1, text: 'react js'}]
}

export const todoSlice = createSlice({
  name: 'todo',
  // we can also make initialState here
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer

    // in this unlike context api we also define function here
    // state gives acces to the values in todos currently, hand to hand
    // action gives us values to perform tasks
   