
import Link from 'next/link'

function mainNav() {
  return (
    <nav>
      <ul className="flex justify-center gap-8">
        <li className="nav-item">
          <Link href='/systems'>Systems</Link>
        </li>
        <li className="nav-item">
          <Link href='/planets'>Planets</Link></li>
        <li className="nav-item">
          <Link href='/species'>Species</Link>
        </li>
        <li className="nav-item">
          <Link href='/docs'>Api Docs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default mainNav