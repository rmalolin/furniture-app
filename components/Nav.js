import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

export default function Nav() {
    return (
        <div className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/"> Главная страница </Link>
                </li>
                <li>
                    <Link href="/prices"> Цены</Link>
                </li>
                <li>
                    <Link href="/contacts"> Контакты</Link>
                </li>
                <li>
                    <Link href="/questions"> Часто задаваемые вопросы </Link>
                </li>
                <li>
                    <Link href="/feedbacks"> Отзывы </Link>
                </li>
                <li>
                    <Link href="/about"> О нас </Link>
                </li>
            </ul>

        </div >
    )
}