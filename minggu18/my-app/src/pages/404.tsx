import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Customer404 = () => {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta name="description" content="Halaman tidak tersedia" />
      </Head>

      <div className={styles.container}>
        {/* <img src="/page-not-found.png" alt="404" className={styles.image} /> */}

        <Image src="/page-not-found.png" alt="404" width={400} height={200} className={styles.image} />

        <h1 className={styles.title}>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia.</p>

        <Link href="/" className={styles.button}>
          Kembali ke Home
        </Link>
      </div>
    </>
  );
};

export default Customer404;

