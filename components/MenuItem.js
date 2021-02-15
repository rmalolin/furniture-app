import { Link, Text } from "@chakra-ui/react"
import NextLink from 'next/link'

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Text
            fontWeight="semibold"
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
        >
            <Link>
                <NextLink href={to}>
                    {children}
                </NextLink>
            </Link>
        </Text>
    );
};

export default MenuItem;