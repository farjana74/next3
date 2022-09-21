import Head from 'next/head';
import Script from 'next/script';

import Banner from './Banner';
import Service from './Service';
import Team from './Team';

export default function Home() {
  return (
<>

      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>

      <Banner></Banner>
      <Service></Service>
      <br/>
      <br/>
      <br/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Team></Team>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"/>

     
  
 </>
  )
}
