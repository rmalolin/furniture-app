import React from "react";
import { Box, Flex, IconButton, Collapse } from "@chakra-ui/react";
import { VscChromeClose } from 'react-icons/vsc'
import { SiHackhands } from "react-icons/si";
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
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

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
            <Flex align="center">
                <Logo
                    w="100px"
                    color={["white", "white", "teal.800", "teal.800"]}
                />
            </Flex>
            <Box
                display={{ base: "block", sm: "block" }}
                onClick={toggleMenu}>
                {
                    showMenu
                        ?
                        <IconButton
                            icon={<VscChromeClose />}
                            colorScheme="teal"
                            bgColor="teal.700"
                            size="lg"
                            aria-label="Close menu"
                        />
                        :
                        <IconButton
                            icon={<SiHackhands />}
                            colorScheme="teal"
                            bgColor="teal.700"
                            size="lg"
                            aria-label="Menu"
                        />
                }
            </Box>
            <Collapse in={showMenu} animateOpacity >
                <Box
                    display={{ base: "block", sm: "block" }}
                    flexBasis={{ base: "100%", sm: "100%" }}
                >
                    <Flex
                        align={{ base: "center", sm: "center" }}
                        justify={{ base: "center", sm: "center" }}
                        direction={{ base: "column", sm: "column" }}
                        pt={{ base: 4, sm: 4 }}
                    >
                        {routes.map((item) => <MenuItem key={item.path} to={item.path} fontSize="2xl">{item.title}</MenuItem>)}
                    </Flex>
                </Box>
            </Collapse>
            {/* <Box
                display={{ base: showMenu ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >

                <Flex
                    align={["center", "flex-end", "center", "center"]}
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "column", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >

                    {routes.map((item) => <MenuItem key={item.path} to={item.path} fontSize="2xl">{item.title}</MenuItem>)}

                </Flex>

            </Box> */}

        </Flex>
    );
};

export default Header;



