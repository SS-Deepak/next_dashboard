import { createContext, useContext,useState, useRef } from "react";

const ToggleContext = createContext()


export function Toggler({children}) {
    const [show, setShow] = useState(true)
    const loading = useRef(false)

  return (
    <ToggleContext.Provider value={{show, setShow, loading}}>
        {children}
    </ToggleContext.Provider>
  )
}


export const useToggle = ()=> useContext(ToggleContext)