import { Fragment } from "react"
import { useRouter } from "next/router"

import EventList from "../../components/events/event-list"
import { getFilteredEvents } from "../../dummy-data"
import LinkButton from "../../components/ui/link-button"
import ErrorMessage from "../../components/ui/error-message"

function FilteredEventPage() {
  const router = useRouter()

  const filterDate = router.query.slug

  const numberYear = filterDate && +filterDate[0]
  const numberMonth = filterDate && +filterDate[1]

  if (!router.query.slug) return <p style={{ margin: "auto" }}>Loading...</p>

  if (
    isNaN(numberYear) ||
    isNaN(numberMonth) ||
    numberYear > 2022 ||
    numberYear < 2021 ||
    numberMonth < 1 ||
    numberMonth > 12
  )
    return (
      <Fragment>
        <ErrorMessage>Invalid Filter. please adjust your values!</ErrorMessage>
        <div className="flex justify-center">
          <LinkButton link="/events">Show All Events</LinkButton>
        </div>
      </Fragment>
    )

  const filteredEvents = getFilteredEvents({
    year: numberYear,
    month: numberMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <Fragment>
        <ErrorMessage>No events found for the chosen filter!</ErrorMessage>
        <div className="flex justify-center">
          <LinkButton link="/events">Show All Events</LinkButton>
        </div>
      </Fragment>
    )

  return (
    <Fragment>
      <EventList events={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventPage
