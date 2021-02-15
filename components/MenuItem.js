import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

const MenuItem = ({ children, to = "/", ...rest }) => {
    return (
        <Link>
            <NextLink href={to}>
                <Text
                    fontWeight="semibold"
                    mb={
                        {
                            base: 8,
                            sm: 0
                        }
                    }
                    mr={
                        {
                            base: 0,
                            sm: 8
                        }
                    }
                    display="block"
                    {...rest}
                >
                    {children}
                </Text>
            </NextLink>
        </Link>
    );
};

export default MenuItem;