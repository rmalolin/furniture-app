import Meta from "../components/Meta"
import { Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react"
export default function questions() {
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
                title="FAQ"
                keywords="Сборка мебели, мебель, Верея, Обнинск, вопросы клиентов, задать вопрос, ответы, почему"
                desc="Часто задаваемые вопросы"
            />
            <UnorderedList
                fontSize="2xl"
                color="primary.900"
                spacing={4}
            >
                <ListItem fontWeight="semibold">List Of Chakra Colors healing-crystals-for-you.com›chakra-meanings.html
                The chakra meanings for the chakras that are located below the feet and above the head,
                are not included in the chakras listed above, as they are not within the body.</ListItem>
                <Text>Потому что у нас работают мастера с большим стажем</Text>
                <ListItem fontWeight="semibold">Consectetur adipiscing elit.</ListItem>
                <Text>Потому что я еще не придумал лучшего решения для FAQ</Text>
                <ListItem fontWeight="semibold">Integer molestie lorem at massa.</ListItem>
                <Text>Глазированные сырки "Александров"</Text>
                <ListItem fontWeight="semibold">Facilisis in pretium nisl aliquet.</ListItem>
                <Text>42</Text>
            </UnorderedList>
        </Flex>
    )
}