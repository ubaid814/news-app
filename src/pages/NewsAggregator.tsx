import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchSources } from "../store/thunks"
import AppSearchBar from "../components/AppSearchBar"
import News from "../components/News"

function NewsAggregator() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchSources())

  }, [dispatch])
  return (
    <>
      <AppSearchBar />
      <News />
    </>
  )
}


export default NewsAggregator
