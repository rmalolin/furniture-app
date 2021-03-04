import React from "react";
import { Box, Flex, IconButton, Collapse, useDisclosure } from "@chakra-ui/react";
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
    const { isOpen, onClose, onToggle } = useDisclosure()

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
                display={{ base: "block", sm: "block", md: "none", lg: "none" }}
                onClick={onToggle}>
                {
                    isOpen
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
            <Box
                display={{ base: "block", sm: "block", md: "none" }}
                flexBasis={{ base: "100%", sm: "100%" }}
            >
                <Collapse in={isOpen} animateOpacity>
                    <Flex
                        align={{ base: "center", sm: "center" }}
                        justify={{ base: "center", sm: "center" }}
                        direction={{ base: "column", sm: "column" }}
                        pt={{ base: 4, sm: 4 }}
                    >
                        {routes.map((item) => <MenuItem key={item.path} to={item.path} fontSize="2xl" onClick={onClose}>{item.title}</MenuItem>)}
                    </Flex>
                </Collapse>
            </Box>
            <Box
                display={{ base: "none", sm: "none", md: "block", lg: "block" }}
                flexBasis={{ md: "auto", lg: "auto" }}
            >
                <Flex
                    align={{ md: "center", lg: "center" }}
                    justify={{ md: "flex-end", lg: "flex-end" }}
                    direction={{ md: "row", lg: "row" }}
                    pt={{ md: 0, lg: 0 }}
                >
                    {routes.map((item) => <MenuItem key={item.path} to={item.path} fontSize="2xl">{item.title}</MenuItem>)}
                </Flex>
            </Box>
        </Flex>
    );
};

export default Header;



