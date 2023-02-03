import CommonPage from "../layout/CommonPage/index"
import {useEffect} from "react"
import useSWR from "swr"

export default function componentName() {

  return (
    <CommonPage title="Holidays" btnTitle="Add New Holiday" page="holiday"/>
  );
}
