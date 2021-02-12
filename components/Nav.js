import { chakra } from "@chakra-ui/react"
import MenuItem from "./MenuItem"
import Stack from chakra

export default function Nav() {
    return (
        <Stack
            spacing={8}
            align="center"
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
        >
            <MenuItem to="/about"> About </MenuItem>
        </Stack>
    )
}


































        // <div >
        //     <Box color="white"
        //         bg="black"
        //         fontWeight="semibold"
        //         letterSpacing="wide"
        //         height="28px"
        //     >
        //         <Breadcrumb spacing="16px" separator=" | ">
        //             <BreadcrumbItem>
        //                 <BreadcrumbLink href="/">Главная страница</BreadcrumbLink>
        //             </BreadcrumbItem>

        //             <BreadcrumbItem>
        //                 <BreadcrumbLink href="/prices">Цены</BreadcrumbLink>
        //             </BreadcrumbItem>

        //             <BreadcrumbItem>
        //                 <BreadcrumbLink href="/contacts">Контакты</BreadcrumbLink>
        //             </BreadcrumbItem>

        //             <BreadcrumbItem>
        //                 <BreadcrumbLink href="/questions">Часто задаваемые вопросы</BreadcrumbLink>
        //             </BreadcrumbItem>

        //             <BreadcrumbItem>
        //                 <BreadcrumbLink href="/feedbacks">Отзывы</BreadcrumbLink>
        //             </BreadcrumbItem>

        //             <BreadcrumbItem>
        //                 <BreadcrumbLink href="/about">О нас</BreadcrumbLink>
        //             </BreadcrumbItem>
        //         </Breadcrumb>
        //     </Box>
        // </div >
