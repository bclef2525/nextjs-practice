import EventItem from "./event-item"

function EventList({ events }) {
  return (
    <div className="2xl mx-auto">
      <ul>
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  )
}

export default EventList
