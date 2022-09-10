import Link from "next/link"

function LinkButton(props) {
  return (
    <Link href={props.link}>
      <span className="md:flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer text-justify">
        {props.children}
      </span>
    </Link>
  )
}

export default LinkButton
