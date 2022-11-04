import Head from 'next/head'
import Image from 'next/image'
const roles = require('../config/roles.json');

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJs CMS</title>
        <meta name="description" content="CMS Framework using NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className='text-3xl font-bold underline'>
          {roles.admin ? 'Hello Admin' : 'Hello Subscriber'}  Welcome to CMS
        </h1>
      </main>
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
