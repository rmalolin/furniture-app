import Meta from "../components/Meta"
import {
    Table,
    Tr,
    Th,
    Td,
    TableCaption,
    Heading
} from "@chakra-ui/react"

export default function prices() {
    return (
        <>
            <Meta
                title="Цены, каталог"
                keywords="Сборка мебели, мебель, Верея, Обнинск, каталог, другие услуги, ценник, цены, недорого собрать мебель"
                desc="Список цен на наши услуги"
            />
            <Heading>Сборка / Установка / Демонтаж </Heading>
            <Table
                size='md'
                variant="simple"
            >
                <TableCaption>Каталог наших услуг</TableCaption>
                <Tr bgColor="teal.400">
                    <Th>Сборка корпусной и модульной мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Распашный шкаф с одной дверью</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Распашный шкаф 2-х дверный</Td>
                    <Td isNumeric>от 1050р</Td>
                </Tr>
                <Tr>
                    <Td>Распашный шкаф 3-х дверный</Td>
                    <Td isNumeric>от 1200р</Td>
                </Tr>
                <Tr>
                    <Td>Распашный шкаф 4-х дверный</Td>
                    <Td isNumeric>от 1550р</Td>
                </Tr>
                <Tr>
                    <Td>Угловой шкаф с 1-йодной дверью</Td>
                    <Td isNumeric>от 1300р</Td>
                </Tr>
                <Tr>
                    <Td>Угловой шкаф 2-х дверный</Td>
                    <Td isNumeric>от 1400р</Td>
                </Tr>
                <Tr>
                    <Td>Комнатный гарнитур типа "стенка"</Td>
                    <Td isNumeric>от 1750р</Td>
                </Tr>
                <Tr>
                    <Td>Сборка прихожей (шкаф, тумба, зеркало)</Td>
                    <Td isNumeric>от 2200р</Td>
                </Tr>
                <Tr>
                    <Td>Сервант для посуды</Td>
                    <Td isNumeric>от 1000р</Td>
                </Tr>
                <Tr>
                    <Td>Буфет</Td>
                    <Td isNumeric>от 1000р</Td>
                </Tr>
                <Tr>
                    <Td>Гардероб с одной дверью</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Гардероб 2-х дверный</Td>
                    <Td isNumeric>от 1050р</Td>
                </Tr>
                <Tr>
                    <Td>Гардероб 3-х дверный</Td>
                    <Td isNumeric>от 1200р</Td>
                </Tr>
                <Tr>
                    <Td>Гардероб 4-х дверный</Td>
                    <Td isNumeric>от 1550р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка кухонной мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Гарнитур</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Уголок</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Другая мебель</Td>
                    <Td isNumeric>от 2000р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка шкафов-купе</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Шкаф-купе</Td>
                    <Td isNumeric>от 1650р</Td>
                </Tr>
                <Tr>
                    <Td>Шкаф-купе 2-х дверный</Td>
                    <Td isNumeric>от 1800р</Td>
                </Tr>
                <Tr>
                    <Td>Шкаф-купе 3-х дверный</Td>
                    <Td isNumeric>от 2500р</Td>
                </Tr>
                <Tr>
                    <Td>Установка шкафа-купе</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка комодов</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Комод с 2 - 4 ящиками</Td>
                    <Td isNumeric>от 1300р</Td>
                </Tr>
                <Tr>
                    <Td>Комод с 5 и более ящиками</Td>
                    <Td isNumeric>от 1750р</Td>
                </Tr>
                <Tr>
                    <Td>Комод пеленальный</Td>
                    <Td isNumeric>от 1300р</Td>
                </Tr>
                <Tr>
                    <Td>Комод комбинированный</Td>
                    <Td isNumeric>от 1500р</Td>
                </Tr>
                <Tr>
                    <Td>Комод угловой</Td>
                    <Td isNumeric>от 1500р</Td>
                </Tr>
                <Tr>
                    <Td>Комод радиусный</Td>
                    <Td isNumeric>от 1700р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка офисной мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Шкаф</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Тумба</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Кресло</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Установка столешницы</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Другие виды мебели</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка кроватей</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Односпальная кровать</Td>
                    <Td isNumeric>от 1250р</Td>
                </Tr>
                <Tr>
                    <Td>Двухспальная кровать</Td>
                    <Td isNumeric>от 1450р</Td>
                </Tr>
                <Tr>
                    <Td>Кровать с подъемным механизмом</Td>
                    <Td isNumeric>от 2150р</Td>
                </Tr>
                <Tr>
                    <Td>Кровать со встроенными ящиками</Td>
                    <Td isNumeric>от 1450р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка детской мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Двухъярусная кровать</Td>
                    <Td isNumeric>от 1750р</Td>
                </Tr>
                <Tr>
                    <Td>Кровать-трансформер</Td>
                    <Td isNumeric>от 2150р</Td>
                </Tr>
                <Tr>
                    <Td>Кровать-чердак</Td>
                    <Td isNumeric>от 2150р</Td>
                </Tr>
                <Tr>
                    <Td>Кровать с маятниковым механизмом</Td>
                    <Td isNumeric>от 2150р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка тумб</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Тумба под телевизор</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Тумба прикроватная</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Стеллаж</Td>
                    <Td isNumeric>от 650р</Td>
                </Tr>
                <Tr>
                    <Td>Обувница</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Тумба под раковину</Td>
                    <Td isNumeric>от 1250р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка стульев</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Стул</Td>
                    <Td isNumeric>от 450р</Td>
                </Tr>
                <Tr>
                    <Td>Табурет</Td>
                    <Td isNumeric>от 200р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка столов</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Стол</Td>
                    <Td isNumeric>от 450р</Td>
                </Tr>
                <Tr>
                    <Td>Стол офисный</Td>
                    <Td isNumeric>от 900р</Td>
                </Tr>
                <Tr>
                    <Td>Стол письменный</Td>
                    <Td isNumeric>от 900р</Td>
                </Tr>
                <Tr>
                    <Td>Стол письменный с двумя тумбами</Td>
                    <Td isNumeric>от 1900р</Td>
                </Tr>
                <Tr>
                    <Td>Стол журнальный</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Стол-трансформер журнальный</Td>
                    <Td isNumeric>от 1300р</Td>
                </Tr>
                <Tr>
                    <Td>Стол кухонный раскладной</Td>
                    <Td isNumeric>от 1550р</Td>
                </Tr>
                <Tr>
                    <Td>Стол раздвижной</Td>
                    <Td isNumeric>от 1500р</Td>
                </Tr>
                <Tr>
                    <Td>Стол трюмо с зеркалом</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка ящиков</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Сборка мебельного ящика</Td>
                    <Td isNumeric>от 350р</Td>
                </Tr>
                <Tr>
                    <Td>Установка ящиков</Td>
                    <Td isNumeric>от 450р</Td>
                </Tr>
                <Tr>
                    <Td>Установка направляющих для выдвижных ящиков</Td>
                    <Td isNumeric>от 450р</Td>
                </Tr>
                <Tr>
                    <Td>Установка фасадов на выдвижные ящики</Td>
                    <Td isNumeric>от 450р</Td>
                </Tr>
                <Tr>
                    <Td>Установка умывальника с тумбой</Td>
                    <Td isNumeric>от 1900р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка мебели IKEA</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Сборка мебели IKEA</Td>
                    <Td isNumeric>от 2000р</Td>
                </Tr>
                <Tr>
                    <Td>Установка мебели IKEA</Td>
                    <Td isNumeric>от 2000р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка полок</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Полка простая</Td>
                    <Td isNumeric>от 350р</Td>
                </Tr>
                <Tr>
                    <Td>Полка с дверцами</Td>
                    <Td isNumeric>от 450р</Td>
                </Tr>
                <Tr>
                    <Td>Установка полок</Td>
                    <Td isNumeric>от 350р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка мягкой мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Диван</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Диван кожаный</Td>
                    <Td isNumeric>от 1900р</Td>
                </Tr>
                <Tr>
                    <Td>Диван кожаный угловой</Td>
                    <Td isNumeric>от 2200</Td>
                </Tr>
                <Tr>
                    <Td>Диван тканевый</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Диван тканевый угловой</Td>
                    <Td isNumeric>от 1900р</Td>
                </Tr>
                <Tr>
                    <Td>Диван "книжка"</Td>
                    <Td isNumeric>от 650р</Td>
                </Tr>
                <Tr>
                    <Td>Кресло мягкое</Td>
                    <Td isNumeric>от 950р</Td>
                </Tr>
                <Tr>
                    <Td>Тахта</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Пуфик</Td>
                    <Td isNumeric>от 750р</Td>
                </Tr>
                <Tr>
                    <Td>Банкетка</Td>
                    <Td isNumeric>от 500р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Сборка торговой мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Витрина</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Прилавок</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Стеллаж</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Стенд</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Стойка рецепшена</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr>
                    <Td>Другие виды торговой мебели</Td>
                    <Td isNumeric>от 1600р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Демонтаж мебели</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Демонтаж распашного шкафа с одной дверью</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж распашного шкафа 2-х дверного</Td>
                    <Td isNumeric>от 900р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж распашного шкафа 3-х дверного</Td>
                    <Td isNumeric>от 1000р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж распашного шкафа 4-х дверного</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж шкафа-купе 2-х дверного</Td>
                    <Td isNumeric>от 900р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж шкафа-купе 3-х дверного</Td>
                    <Td isNumeric>от 1000р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж шкафа-купе 4-х дверного</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж столов</Td>
                    <Td isNumeric>от 500р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж диванов</Td>
                    <Td isNumeric>от 800р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж кроватей</Td>
                    <Td isNumeric>от 900р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж комнатных гарнитуров типа "стенка"</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr>
                    <Td>Демонтаж кухонных гарнитуров</Td>
                    <Td isNumeric>от 1100р</Td>
                </Tr>
                <Tr bgColor="teal.400">
                    <Th>Другие услуги</Th>
                    <Th isNumeric>Цена</Th>
                </Tr>
                <Tr>
                    <Td>Установка мебельных ручек</Td>
                    <Td isNumeric>от 50р</Td>
                </Tr>
                <Tr>
                    <Td>Установка выдвижной корзины</Td>
                    <Td isNumeric>от 200р</Td>
                </Tr>
                <Tr>
                    <Td>Установка рейлинга</Td>
                    <Td isNumeric>от 150р</Td>
                </Tr>
                <Tr>
                    <Td>Монтаж барной стойки</Td>
                    <Td isNumeric>от 1800р</Td>
                </Tr>
                <Tr>
                    <Td>Вызов специалиста</Td>
                    <Td isNumeric>Бесплатно</Td>
                </Tr>
                <Tr>
                    <Td>Диагностика (при оказании услуг)</Td>
                    <Td isNumeric>Бесплатно</Td>
                </Tr>
                <Tr>
                    <Td>Диагностика (при отказе от услуг)</Td>
                    <Td isNumeric>600р</Td>
                </Tr>
            </Table>
        </>
    )
}