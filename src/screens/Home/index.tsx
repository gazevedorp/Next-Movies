import React from 'react';
import { useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';

import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/Actions/userActions';
import api from '../../services/api'

import {
    Container,
    ButtonExit,
    ButtonExitText
} from './styles';
import { useState } from 'react';

interface IMovie {
    id: Int32Array,
    title: string,
}

const Home = () => {
    const dispatch = useDispatch();
    const [onLoadingMovies, setLoadingMovies] = useState<boolean>(true)
    const [movieList, setMovieList] = useState<IMovie[]>([])

    const handleExit = () => {
        dispatch(clearUser());
    }
    const getMovies = async () => {
        try {
            const response = await api.get<IMovie[]>("/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1")
            if (response) {
                console.log(response.data.results)
                setMovieList(response.data.results)
                setLoadingMovies(false);
            }
        }
        catch (e) {
            console.log(e)
            setLoadingMovies(false);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <Container>
            {onLoadingMovies ?
                <ActivityIndicator color="#000" />
                :
                movieList.map(movie => (
                    <Text style={{ color: "#000" }} key={movie.id}>{movie.title}</Text>
                ))
            }
            <ButtonExit onPress={handleExit}>
                <ButtonExitText>Sair</ButtonExitText>
            </ButtonExit>
        </Container>
    );
};

export default Home;
