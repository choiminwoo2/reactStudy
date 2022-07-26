import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./layout.module.css";
type Props = {
  children: React.ReactNode
  home?: boolean;
}

const Layout = ({
  children,
  home,
}: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn Next.js" />
      </Head>
      <header className={styles.header}>
        {home ? <Fragment>
            <Image priority
            src="/images"/>
        </Fragment> : <Fragment></Fragment>}
      </header>
    </div>
  );
};

export default Layout;
