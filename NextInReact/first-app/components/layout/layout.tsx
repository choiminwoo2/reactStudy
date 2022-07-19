import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import styles from './layout.module.css'
const Layout = ({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn Next.js" />
      </Head>
      <header className={styles.header}>
        {home ? (<Fragment></Fragment>) : (<Fragment></Fragment>)}
      </header>
    </div>
  );
};

export default Layout;
