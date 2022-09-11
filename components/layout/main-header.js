import Link from "next/link"

function MainHeader() {
  return (
    <header className="flex bg-gray-800 text-white justify-between font-bold px-10 py-5 text-3xl">
      <div>
        <Link href="/">
          <a>NextEvents</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Browse All Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader
