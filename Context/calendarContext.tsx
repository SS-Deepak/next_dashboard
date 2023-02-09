import {useContext, createContext, useRef, useState} from "react"

const calenderContext= createContext({
    monthC: new Date(Date.now()).getMonth()+1,
    year: new Date(Date.now()).getFullYear(),
    setCCM: ()=>{},
    setCCY: ()=>{}
})

export default function component({children}:any){
    const [monthC, setCCM] = useState(new Date(Date.now()).getMonth()+1) as any
    const [year, setCCY] = useState(new Date(Date.now()).getFullYear()) as any

    return(
        <calenderContext.Provider value={{monthC, year, setCCM, setCCY}}>
            {children}
        </calenderContext.Provider>
    )
}

export const useCalendarProps = () => useContext(calenderContext)