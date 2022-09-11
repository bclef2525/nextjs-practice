import AddressIcon from "../../icons/address-icon"
import DateIcon from "../../icons/date-icon"

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props
  const readableDate = new Date(date).toLocaleString("ko-KR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const imageLink = "/" + image
  return (
    <div className="h-3/6 w-1/1 bg-blue-300 flex justify-center relative">
      <div className="md:w-[960px] md:h-[500px] w-[100%] h-[300px] bg-gray-800 rounded-lg flex justify-center absolute -top-20">
        <div className="flex items-center">
          <div className="w-1/2 p-10  flex items-center">
            <img
              className="border-4 w-[500px] h-[400px] object-cover"
              src={imageLink}
              alt={imageAlt}
            ></img>
          </div>
          <div className="flex-col px-10 text-xl">
            <div className="text-white my-10">
              <div style={{ color: "yellowgreen" }} className="w-10 h-10 my-5">
                <DateIcon />
              </div>
              <time>{readableDate}</time>
            </div>
            <div className="text-white my-10">
              <div style={{ color: "yellowgreen" }} className="w-10 h-10 my-5">
                <AddressIcon />
              </div>
              <address className="text-white">{address}</address>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventLogistics
