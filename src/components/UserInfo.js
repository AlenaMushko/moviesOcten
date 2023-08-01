import { Box, Image, Text} from "@chakra-ui/react";

import userImg from '../img/user.jpeg';

export const UserInfo = () => {
    const userNick = 'Alona';
    return (
        <Box>
            <Image
                borderRadius='full'
                boxSize='50px'
                src={userImg}
                alt={userNick}
            />
            <Text>{userNick}</Text>
        </Box>
    );
};

