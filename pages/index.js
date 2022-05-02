import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className="mb-5">Modelo de satisfacción en la vida</h1>
                <Link href="/child">
                    <div className="btn btn-primary d-flex align-items-center text-center w-25 mb-3">
                        Niños
                    </div>
                </Link>
                <Link href="/senior">
                    <div className="btn btn-primary d-flex align-items-center text-center w-25 mb-5">
                        Adultos mayores
                    </div>
                </Link>
                <h2>
                    Funcionamiento
                </h2>
                <p className="w-50">
                    La aplicación web del modelo de satisfacción de vida permite predecir la satisfacción de vida de niños y abuelos. Se considera un niño a una persona de 12 o menos años y un abuelo alguien de 60 o mas años.
                    La aplicación recibe unas respuestas socioeconómicas básicas como la edad, calidad de la vivienda, del sector, etc. Con base en estas respuestas, se predice en una escala del 1 al 10 que tan satisfecha se encuentra la persona con la vida, siendo 1 muy insatisfecho y 10 totalmente satisfecho.
                </p>
            </main>
        </div>
    );
}
