import Nav from "./Nav"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div>
                <main>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}


