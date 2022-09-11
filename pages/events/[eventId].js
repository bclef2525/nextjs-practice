import { Fragment } from "react"
import { useRouter } from "next/router"
import { getEventById } from "../../dummy-data"
import EventSummary from "../../components/events/event-detail/event-summary"
import EventLogistics from "../../components/events/event-detail/event-logistics"
import EventContent from "../../components/events/event-detail/event-content"

function EventDetailPage() {
  //   const { id, title, description, location, date, image } = event

  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)

  if (!event) return <h1>no event found</h1>

  return (
    <div className="h-screen">
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p className="text-white text-2xl">{event.description}</p>
      </EventContent>
    </div>
  )
}

export default EventDetailPage
