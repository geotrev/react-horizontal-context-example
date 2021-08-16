import { createContext, useContext, useReducer } from "react"
import { reducer } from "./reducer"
import { initialState } from "./initial-state"

export const FormContext = createContext()
export const useFormContext = () => useContext(FormContext)

export function FormContextProvider({ children }) {
  return (
    <FormContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </FormContext.Provider>
  )
}
