import Link from "next/link"

function LinkButton(props) {
  if (props.link)
    return (
      <Link href={props.link}>
        <div className="md:flex flex bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-justify">
          {props.children}
        </div>
      </Link>
    )
  return (
    <button
      className="md:flex bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-justify"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default LinkButton
