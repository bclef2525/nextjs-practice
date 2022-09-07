import { useRouter } from "next/router"
import { useEffect } from "react"

function PortfolioProjectPage() {
  const { query } = useRouter()
  console.log(query)

  const getData = (id) => {
    console.log(id)
  }

  useEffect(() => {
    getData(query.projectId)
  }, [query])

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage
