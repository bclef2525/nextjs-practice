function ErrorMessage(props) {
  return (
    <div className="p-20 mx-60 my-20 flex justify-center bg-purple-300 text-purple-900 rounded-lg text-5xl text-bold">
      {props.children}
    </div>
  )
}

export default ErrorMessage
