import Head from "next/head";
import styles from "@/styles/404.module.scss";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Halaman Tidak Ditemukan</title>
        <meta name="description" content="Halaman tidak tersedia" />
      </Head>

      <div className={styles.container}>
        <img src="/page-not-found.png" alt="404" className={styles.image} />

        <h1 className={styles.title}>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
      </div>
    </>
  );
}
