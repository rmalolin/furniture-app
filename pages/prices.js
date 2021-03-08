import Meta from "../components/Meta"
import {
    Table,
    Tr,
    Th,
    Td,
    TableCaption,
    Heading,
    useAccordionItemState
} from "@chakra-ui/react"
import path from "path"
import fs from "fs"

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "./storage/prices.json")
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { prices } = JSON.parse(fileContent)

    return {
        props: {
            prices,
        }
    }
}

export default function prices({ prices }) {
    return (
        <>
            <Meta
                title="Цены, каталог"
                keywords="Сборка мебели, мебель, Верея, Обнинск, каталог, другие услуги, ценник, цены, недорого собрать мебель"
                desc="Список цен на наши услуги"
            />

            <Table
                size='md'
                variant="simple"
            >
                <TableCaption>Каталог наших услуг</TableCaption>
                {prices.map((price, index) =>
                    <>
                        <Tr key={index} bgColor="teal.300">
                            <Th>{price.serviceName}</Th>
                            <Th isNumeric>Цена</Th>
                        </Tr>
                        {price.items.map((item, index) =>
                            <Tr key={index}>
                                <Td>{item.name}</Td>
                                <Td isNumeric>от {item.price}р</Td>
                            </Tr>
                        )}
                    </>
                )}
            </Table>
        </>
    )
}