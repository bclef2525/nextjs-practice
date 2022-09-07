import { useRouter } from "next/router"

function ClientProjectPage() {
  const { query, push } = useRouter()

  const loadProjectHandler = (id) => {
    push({
      pathname: "/clients/[id]/[clientprojectId]",
      query: { id, clientprojectId: "projecta" },
    })
  }

  return (
    <div>
      <h1>The Projects of a Given Client {query.id}</h1>
      <button onClick={() => loadProjectHandler(query.id)}>
        Load Project A
      </button>
    </div>
  )
}

export default ClientProjectPage
