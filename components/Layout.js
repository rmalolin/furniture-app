import styles from "../styles/Layout.module.css"
import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={styles.container}>

                <main className={styles.main}>
                    <Header />
                    {children}

                    <Footer />
                </main>

            </div>
        </>
    )
}


