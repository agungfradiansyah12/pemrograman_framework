import styles from "@/styles/Home.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Halaman About</h1>
        <p>Nama: Agung Fradiansyah</p>
        <p>NIM: 2341720045</p>
        <p>Program Studi: D4 Teknik Informatika</p>
        <a href="/" style={{ color: "red" }}>
          Kembali ke Home
        </a>
      </div>
    </main>
  );
}
