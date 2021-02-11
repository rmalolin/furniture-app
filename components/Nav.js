import Link from "next/link"
import navStyles from "../styles/Nav.module.css"

export default function Nav() {
    return (
        <div className={navStyles.nav}>
            <ul className={navStyles.ul}>
                <li className={navStyles.li}>
                    <Link href="/"> Главная страница </Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/prices"> Цены</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/contacts"> Контакты</Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/questions"> Часто задаваемые вопросы </Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/feedbacks"> Отзывы </Link>
                </li>
                <li className={navStyles.li}>
                    <Link href="/about"> О нас </Link>
                </li>
            </ul>

        </div >
    )
}