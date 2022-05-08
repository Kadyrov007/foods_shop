import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieCards from "../utils/MovieCards";

const Popular = () => {
    const [popularFilms, setPopularFilms] = useState([])

    useEffect(() => {
        axios("https://api.themoviedb.org/3/movie/popular?api_key=f42c53f4f985e0480ab807c5d464b681&language=en-US&page=1")
            .then(({data})=> setPopularFilms(data.results))
    },[])
    console.log(popularFilms)

    return (
        <div className="container">
            <h1 className="my-4">
                Popular Films
            </h1>
            <div className="row">
                {
                    popularFilms.map(el=>(

                     <MovieCards el={el}/>
                        )
                    )
                }
            </div>

        </div>
    );
};

export default Popular;
