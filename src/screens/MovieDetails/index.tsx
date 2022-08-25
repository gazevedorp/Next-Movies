import React, { useState, useEffect } from 'react';

import {
    Container,
    Image,
    Title,
    Description,
    ReleaseDate,
    LineHeader
} from './styles';

interface IMovie {
    id: Int32Array,
    title: string,
    overview: string,
    release_date: string,
    poster_path: string
}

const MovieDetails = ({ route }) => {

    const [movie, setMovie] = useState<IMovie>(route.params.movie)
    const baseUrlImg = "https://image.tmdb.org/t/p/w185";
    const imageDefault = "https://thumbs.dreamstime.com/b/nenhum-sinal-de-imagem-dispon%C3%ADvel-isolado-em-fundo-branco-na-ilustra%C3%A7%C3%A3o-do-vetor-219198729.jpg";

    const formatDate = v => {
        var splitString = v.split('-');
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join('/');
        return joinArray;
    };

    useEffect(() => {
        console.log(movie)
    })

    return (
        <Container>
            <Image
                resizeMode="contain"
                source={{
                    uri: movie.poster_path ?
                        `${baseUrlImg}${movie.poster_path}` :
                        imageDefault
                }}
            />
            <Title>{movie.title}</Title>
            <LineHeader />
            {movie.overview ?
                <>
                    <Description>{movie.overview}</Description>
                    <LineHeader />
                </> :
                <></>
            }
            <ReleaseDate>{formatDate(movie.release_date)}</ReleaseDate>
        </Container>
    );
};

export default MovieDetails;
