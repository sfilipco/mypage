import Head from 'next/head'

export default function Layout({children}) {
  return (
    <div className="flex flex-shrink-0 p-6 max-w-3xl mx-auto">
      <Head>
        <title>sfilip.com</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Stefan Filip's personal website"
        />
        <meta name="og:title" content="sfilip.com" />
      </Head>
      <main>
        {children}
      </main>
      <footer className="">
      </footer>
    </div>
  )
}
