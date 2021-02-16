import Meta from "../components/Meta"
import Image from "next/image"
import { Flex, Heading, Text, Stack, Box, Wrap, WrapItem } from "@chakra-ui/react";

export default function about() {
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
        >
            <Meta
                title="О нас"
                keywords="Сборка мебели, мебель, Верея, Обнинск, О нас"
                desc="Собираем мебель быстро"
            />
            <Stack
                spacing={4}
                w={{ base: "80%", md: "40%" }}
                align={["center", "center", "flex-start", "flex-start"]}
            >
                <Heading
                    as="h1"
                    size="xl"
                    fontWeight="bold"
                    color="primary.800"
                    textAlign={["center", "center", "left", "left"]}
                >
                    Страничка о нашей компании
                    </Heading>

                <Text
                    fontSize="s"
                    mt={2}
                    textAlign="center"
                    color="primary.800"
                    opacity="0.6"
                >
                    Реально существующая фирма Сержа. Факт.
                    </Text>
            </Stack>
            <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
                <Wrap >
                    <WrapItem
                        boxShadow="base"
                        rounded="20px"
                        overflow="hidden"
                        bg="white"
                        lineHeight="0"
                        _hover={{ boxShadow: "dark-lg" }}
                    >
                        <Image
                            src="/images/1.jpeg"
                            alt="Picture of the Ivan the Mighty"
                            width={500}
                            height={500}
                        />
                    </WrapItem>
                </Wrap>
            </Box>
        </Flex>
    )
}