import EventList from "../../components/event-list"
import { getFeaturedEvents } from "../../dummy-data"
import EventDetailPage from "./[eventId]"

function AllEventsPage() {
  const featuredEvents = getFeaturedEvents()

  return (
    <ul>
      <EventList events={featuredEvents} />
    </ul>
  )
}

export default AllEventsPage
