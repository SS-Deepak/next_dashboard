import {  useState, createContext, useContext } from "react"
import CommonPage from "./index"

const paginateContext = createContext({})

export default function index({fetchData, modal, title, btnTitle,header, buttons, searchType}:any) {
  const [body, setBody] = useState() as any
  const [paging, setPaging] = useState() as any
  const [status, setStatus] = useState(true)
  const [year, setYear] = useState(new Date(Date.now()).getFullYear())as any 

  // console.log(title, year)

  fetchData({setBody,year})

  if(body!==undefined && status){
    const data = Object.entries(body)

    const filterData= data.filter((item:any)=>{
      return(
        !["pagingCounter","data","status"].includes(item[0])
      )
    })
    setPaging(Object.fromEntries(filterData))
    setStatus(false)
  }

  

  return (
    <paginateContext.Provider value={{body,fetchData, setBody,title:title.toLowerCase(),year,setYear}}>
      <CommonPage
        title={title}
        btnTitle={btnTitle}
        header={header}
        pagination={{paging, callPaging: () =>useContext(paginateContext)}}
        buttons={buttons}
        year={title === "Holidays"? setYear: null}
        modal={modal?.Add}
        deleteModal = {modal?.DeleteModal}
        searchType={searchType}
      /> 
    </paginateContext.Provider>

  )
}

export const usePaginate = () =>useContext(paginateContext)