import React from 'react';

import { 
    Container,
    Box,
    Logotipo,
    BoxSearch,
    SearchInput,
    BoxUser,
    BoxProfilePicture,
    ProfilePicture
} from './styles';

export default function Navbar() {
    return (
        <Container>
            <Box>
                <Logotipo src="/images/logotipo.png" alt="" />
                <BoxSearch>
                    <SearchInput type="text" placeholder='Buscar' />
                </BoxSearch>
                <BoxUser>
                    <BoxProfilePicture>
                        <ProfilePicture src="/images/users/user_vinicius.png" alt="" />
                    </BoxProfilePicture>
                </BoxUser>
            </Box>
        </Container>
    );
}