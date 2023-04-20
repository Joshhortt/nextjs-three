import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Hello Welcome to Next.js 13</h1>
      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
