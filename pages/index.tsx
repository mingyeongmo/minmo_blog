import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="title">
        Welcome to <Link href="/blog">home</Link>
      </h1>
    </div>
  );
};

export default Home;
