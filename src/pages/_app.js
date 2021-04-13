import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="/feed.xml" />
        <link rel="alternate" type="application/atom+xml" title="Atom 1.0" href="/atom.xml" />
        <link rel="alternate" type="application/json" title="JSON Feed" href="/feed.json" />
      </Head>
      <SectionContainer>
        <Header />
      </SectionContainer>
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
    </div>
  )
}
