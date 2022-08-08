import { children, createContext, useReducer } from 'react'
import { React } from 'react'

export const FeelingsContext = createContext()

export const feelingsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FEELINGS':
      return {
        feelings: action.payload,
      }
    case 'CREATE_FEELING':
      return {
        feelings: [action.payload, ...state.feelings],
      }
    default:
      return state
  }
}

export const FeelingsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(feelingsReducer, { feelings: null })

  return (
    <FeelingsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FeelingsContext.Provider>
  )
}
