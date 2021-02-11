import headerStyles from "../styles/Header.module.css"
import Nav from "./Nav"

export default function Header() {
    return (


        <div >
            <h1 className={headerStyles.title}><span>Furniture</span> News</h1>
            <p className={headerStyles.description}>Keep up to date with latest news</p>
        </div>

    )
}