import Header from "./Header"
import { Flex } from "@chakra-ui/react"



export default function Layout(props) {
    return (
        <>

            <Flex
                direction="column"
                align="center"
                maxW={[
                    "auto",    // 0-30em
                    "auto",    // 30em-48em
                    "auto",    // 48em-62em
                    "1200px",  // 62em+
                ]}
                m="0 auto"
                {...props}
            >
                <Header />
                {props.children}
            </Flex>
        </>
    )
}


