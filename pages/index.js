import Link from "next/link"

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/blog/2022/1">blog</Link>
        </li>
        <li>
          <Link href="/clients">clients</Link>
        </li>
        <li>
          <Link href="/products">products</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
