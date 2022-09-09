import Image from "next/image"
import Link from "next/link"
function EventItem({ event }) {
  const { id, title, description, location, date, image } = event
  const readableDate = new Date(date).toLocaleString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const formattedAddress = location.replace(", ", "\n")
  console.log(formattedAddress)
  const exploreLink = "/" + image

  return (
    <li>
      <div className="xl w-11/12 m-10 flex rounded-lg overflow-auto shadow-2xl">
        <img className="w-6/12 h-auto" src={exploreLink} alt={title}></img>
        <div className="w-6/12 h-auto p-10 flex flex-col justify-between">
          <h2 className="text-3xl font-bold">{title}</h2>
          <text className="my-4 text-sm md:text-xl">{description}</text>
          <address className="my-2 text-sm md:text-xl">
            {formattedAddress}
          </address>
          <time className="my-2 font-bold">{readableDate}</time>
          <Link href="/">Explore Link</Link>
        </div>
      </div>
    </li>
  )
}

export default EventItem
