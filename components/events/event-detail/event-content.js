function EventContent(props) {
  return (
    <div className="h-1/6 w-1/1 bg-blue-300 flex justify-center p-14">
      <h1>{props.children}</h1>
    </div>
  )
}

export default EventContent
