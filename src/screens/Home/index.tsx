import React from 'react';
import { useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import api from '../../services/api'

import {
    Container,
    Title,
    LineHeader,
    Card,
    CardImage,
    CardTitle,

} from './styles';
import { useState } from 'react';

interface IMovie {
    id: Int32Array,
    title: string,
    poster_path: string
}

const Home = ({ navigation }) => {
    const [onLoadingMovies, setLoadingMovies] = useState<boolean>(true);
    const [movieList, setMovieList] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const baseUrlImg = "https://image.tmdb.org/t/p/w185";
    const imageDefault = "https://thumbs.dreamstime.com/b/nenhum-sinal-de-imagem-dispon%C3%ADvel-isolado-em-fundo-branco-na-ilustra%C3%A7%C3%A3o-do-vetor-219198729.jpg";

    const getMovies = async () => {
        try {
            const response = await api.get<IMovie[]>(`movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&region=BR&language=pt-BR&page=${page}`)
            if (response) {
                console.log(response.data.results.length);
                if (page === 1) {
                    setMovieList(response.data.results);
                    setTotalPages(response.data.total_pages)
                }
                else {
                    const temp = movieList.concat(response.data.results);
                    setMovieList(temp);
                }
                setLoadingMovies(false);
            }
        }
        catch (e) {
            console.log(e);
            setLoadingMovies(false);
        }
    }

    const renderItem = ({ item }) => {
        return (
            <Card
                key={item.id}
                onPress={() => navigation.navigate("MovieDetails", { movie: item })}
            >
                <CardImage
                    resizeMode="cover"
                    source={{
                        uri: item.poster_path ?
                            `${baseUrlImg}${item.poster_path}` :
                            imageDefault
                    }}
                />
                <CardTitle >
                    {item.title.toUpperCase()}
                </CardTitle>
            </Card>
        )
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <Container>
            {onLoadingMovies && page === 1 ?
                <ActivityIndicator color="#fff" />
                :
                <FlatList
                    contentContainerStyle={{ alignItems: "center" }}
                    numColumns={2}
                    data={movieList.filter(movie => !movie.adult)}
                    renderItem={renderItem}
                    keyExtractor={movie => movie.id}
                    ListHeaderComponent={
                        <>
                            <Title>Próximos lançamentos</Title>
                            <LineHeader />
                        </>
                    }
                    ListHeaderComponentStyle={{ width: "100%" }}
                    showsVerticalScrollIndicator={false}
                    onEndReachedThreshold={0.2}
                    onEndReached={() => {
                        console.log(page, totalPages)
                        if (totalPages >= page) {
                            setLoadingMovies(true);
                            setPage(page + 1);
                            getMovies();
                        }
                    }}
                />
            }
            {onLoadingMovies && page > 1 &&
                <ActivityIndicator color="#fff" />
            }
        </Container>
    );
};

export default Home;
