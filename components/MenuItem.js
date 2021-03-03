import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

const MenuItem = ({ children, to = "/", onClick, ...rest }) => {
    return (
        <Link onClick={onClick}>
            <NextLink href={to}>
                <Text
                    fontFamily="sans-serif"
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