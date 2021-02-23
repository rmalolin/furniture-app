import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons'
import { TiThMenu } from "react-icons/ti";
import Logo from "./Logo";
import MenuItem from "./MenuItem"


const routes = [
    {
        path: "/",
        title: "Главная страница"
    },
    {
        path: "/prices",
        title: "Цены"
    },
    {
        path: "/contacts",
        title: "Контакты"
    },
    {
        path: "/feedback",
        title: "Отзывы"
    },
    {
        path: "/faq",
        title: "FAQ"
    },
    {
        path: "/about",
        title: "О нас"
    }
]

const Header = (props) => {
    const [show, setShow] = React.useState(false);
    const toggleMenu = () => setShow(!show);

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["teal.700", "teal.700", "transparent", "transparent"]}
            color={["white", "white", "teal.700", "teal.700"]}
            {...props}
        >
            <Flex
                align="center"
            >
                <Logo
                    w="100px"
                    color={["white", "white", "teal.800", "teal.800"]}
                />
            </Flex>
            <Box
                display={{ base: "block", md: "none" }}
                onClick={toggleMenu}
            >
                {
                    show ?
                        <IconButton
                            icon={<CloseIcon />}
                            colorScheme="teal"
                            bgColor="teal.700"
                            size="lg"
                            aria-label="Close menu"
                        />
                        :
                        <IconButton
                            icon={<TiThMenu />}
                            colorScheme="teal"
                            bgColor="teal.700"
                            size="lg"
                            aria-label="Menu"
                        />
                }
            </Box>
            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    {routes.map((item) => <MenuItem key={item.path} to={item.path} fontSize="2xl">{item.title}</MenuItem>)}
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;



