import LinkButton from "../ui/link-button"
import AdressIcon from "../icons/address-icon"
import DateIcon from "../icons/date-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
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
      <div className="xl  m-10 md:flex-row md:w-11/12 flex-col flex justify-center rounded-lg overflow-auto shadow-2xl">
        <img
          className="md:w-6/12 object-cover h-[500px]"
          src={imageLink}
          alt={title}
        ></img>
        <div className="md:w-6/12 h-auto p-10 flex flex-col justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="my-4 text-sm md:text-xl">{description}</p>
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
