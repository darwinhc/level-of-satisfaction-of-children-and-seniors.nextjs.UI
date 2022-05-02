import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Modelo de satisfacción en la vida</h1>
                <Link href="/child">
                    <p>Niños</p>
                </Link>
                <Link href="/senior">
                    <p>Adultos mayores</p>
                </Link>
            </main>
        </div>
    );
}
