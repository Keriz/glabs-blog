import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-10">
      <div>
        <Link href="/">
          <img src='logo.svg' width="200px" />
        </Link>
      </div>
      <div>
        <a href="https://github.com/Keriz/glabs-blog" aria-label="GLabs Blog Github">
          <img src='GitHub-Mark-32px.png' />
        </a>
      </div>
    </header>
  )
}
