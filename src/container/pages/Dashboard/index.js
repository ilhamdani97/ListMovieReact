import React, { useState, useEffect } from "react";
import classname from 'classnames';
import { CardMovie, ModalDetailMovie } from "../../../components";

import axios from 'axios';

import './styles.scss'

const Dashboard = () => {

    const classNames = classname('o-dashboard');

    const [isLoading, setIsloading] = useState(false);
    const [isLoadingDetail, setIsloadingDetail] = useState(false);
    const [listMovie, setListMovie] = useState([])
    const [detailMovie, setDetailMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        setIsloading(true);
        axios.get('https://omdbapi.com?apikey=faf7e5bb&s=Batman&page=2').then(res => {
            setListMovie(res.data.Search);
            setIsloading(false);
        })
    },[])

    const handleClickDetail = (id) => {
        setIsloadingDetail(true);

        setShowModal(true);

        axios.get(`https://omdbapi.com/?apikey=faf7e5bb&i=${id}&plot=full`).then(res => {
            setDetailMovie(res);
            setIsloadingDetail(false);
        })
    }

    return (
        <div className={classNames}>
            <div className="container-card-movie">
                {listMovie && 
                    listMovie.map((data, index) => (
                        <CardMovie 
                            key={index}
                            isLoading={isLoading}  
                            className={'card-movie'} 
                            year={data.Year} 
                            image={data.Poster}
                            filmName={data.Title}
                            onClick={() => handleClickDetail(data.imdbID)}
                        />
                    ))
                }
                
                <ModalDetailMovie 
                    showModal={showModal}
                    isLoading={isLoadingDetail}
                    posterImage={detailMovie && detailMovie.data.Poster}
                    scoreRating={detailMovie && detailMovie.data.imdbRating}
                    name={detailMovie && detailMovie.data.Title}
                    genre={detailMovie && detailMovie.data.Genre}
                    time={detailMovie && detailMovie.data.Runtime}
                    release={detailMovie && detailMovie.data.Released}
                    desc={detailMovie && detailMovie.data.Plot}
                    onClickClose={() => setShowModal(false)}
                />
            </div>
            
        </div> 
    );

};

export default Dashboard;