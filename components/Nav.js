import Link from "next/link"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Box
} from "@chakra-ui/react"

export default function Nav() {
    return (
        <div >
            <Box color="gray.500"
                bg="black"
                fontWeight="semibold"
                letterSpacing="wide"
                height="28px"
            >
                <Breadcrumb spacing="8px" separator="<">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Главная страница</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/prices">Цены</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/contacts">Контакты</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/questions">Часто задаваемые вопросы</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/feedbacks">Отзывы</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about">О нас</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
        </div >
    )
}