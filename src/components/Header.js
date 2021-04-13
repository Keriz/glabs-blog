import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <a aria-label="GLabs Blog">
            <span className="decoration-slice bg-clip-text bg-gradient-to-b from-red-400 via-yellow-400 to-red-400 text-transparent text-center font-title text-4xl"> GLabs</span>
          </a>
        </Link>
      </div>
      <div>
        <a  href="https://github.com/Keriz/glabs-blog" aria-label="GLabs Blog Github">
          <img src='GitHub-Mark-32px.png'/>
        </a>
      </div>
    </header>
  )
}
