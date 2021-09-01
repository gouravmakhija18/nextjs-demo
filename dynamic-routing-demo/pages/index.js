import Head from 'next/head'
import Header from '../components/header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <h1>Next JS Tutorial</h1>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}
