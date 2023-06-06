import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/mitja">Mitja</Link>
      <Link href="/janez">Janez</Link>
      <Link href="/brewery/123">Brewery 123</Link>
      <Link href="/brewery/5544">Brewery 5544</Link>
    </main>
  );
}
