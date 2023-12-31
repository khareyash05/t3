import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

import Layout from "~/components/Layout/Layout"

export default function Home() {

  const {data} = api.post.getAll.useQuery()
  console.log(data)
  
  return (
    <>      
      <Head>
        <title>Free-Guard</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout/>
    </>
  );
}
