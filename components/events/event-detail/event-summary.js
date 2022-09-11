function EventSummary(props) {
  const { title } = props
  return (
    <h1 className="w-1/1 h-2/6  bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-6xl text-center flex justify-center items-center font-bold drop-shadow-2xl">
      {title}
    </h1>
  )
}

export default EventSummary
