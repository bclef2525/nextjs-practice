import { getFeaturedEvents } from "../dummy-data"

function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <h1 className="text-9xl font-thin underline">Hello world!</h1>
    </div>
  )
}

export default HomePage
