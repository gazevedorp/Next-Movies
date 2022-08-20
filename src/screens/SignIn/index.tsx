import React from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '../../store/Actions/userActions';

import {
    Container,
    Title,
    Description,
    Button,
    ButtonText
} from './styles';

const SignIn = () => {
    const dispatch = useDispatch();

    const handlePress = () => {
        dispatch(setUser({ Token: "isLogged" }));
    }

    return (
        <Container>
            <Title>NEXTMOVIES</Title>
            <Description>
                SEU APLICATIVO DE CONSULTA DE FILMES GRÁTIS!
            </Description>
            <Button onPress={handlePress}>
                <ButtonText>Entrar</ButtonText>
            </Button>
        </Container>
    );
};

export default SignIn;
