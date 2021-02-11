import styles from "../styles/Layout.module.css"
import Nav from "./Nav"

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Hello, kids</h1>
                    {children}
                </main>

            </div>
        </>
    )
}


