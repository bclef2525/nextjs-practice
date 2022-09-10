import LinkButton from "./ui/link-button"
import AdressIcon from "./icons/address-icon"
import DateIcon from "./icons/date-icon"
import ArrowRightIcon from "./icons/arrow-right-icon"
function EventItem({ event }) {
  const { id, title, description, location, date, image } = event
  const readableDate = new Date(date).toLocaleString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const formattedAddress = location.replace(", ", "\n")
  const imageLink = "/" + image
  const exploreLink = `/events/${event.id}`

  return (
    <li>
      <div className="xl w-11/12 m-10 flex justify-center rounded-lg overflow-auto shadow-2xl">
        <img className="w-6/12" src={imageLink} alt={title}></img>
        <div className="w-6/12 h-auto p-10 flex flex-col justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <text className="my-4 text-sm md:text-xl">{description}</text>
          <div className="flex align-center h-auto">
            <div className="w-7 mx-3">
              <AdressIcon></AdressIcon>
            </div>
            <address className="my-2 text-sm md:text-xl">
              {formattedAddress}
            </address>
          </div>
          <div className="flex align-center h-auto">
            <div className="w-7 mx-3">
              <DateIcon />
            </div>
            <time className="my-2 font-bold">{readableDate}</time>
          </div>
          <div className="md:flex md:justify-end w-50">
            <LinkButton link={exploreLink}>
              Explore Link{" "}
              <div className="w-7 mx-3">
                <ArrowRightIcon />
              </div>
            </LinkButton>
          </div>
        </div>
      </div>
    </li>
  )
}

export default EventItem
