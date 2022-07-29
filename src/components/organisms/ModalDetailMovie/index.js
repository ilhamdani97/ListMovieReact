import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import classname from 'classnames';

import Skeleton from '@mui/material/Skeleton';

import { 
    CloseIcon,
    Calendar,
    Time

} from "../../../assets/images";

import './styles.scss';

const ModalDetailMovie = ({
    className,
    showModal,
    isLoading,
    posterImage,
    scoreRating,
    name,
    genre,
    time,
    release,
    desc,
    onClickClose
}) => {

    const classNames = classname('o-modal-detail-movie', className, showModal && 'show', 'skleton');

    const renderSkeleton = () => {

        return (
            <div className={classNames}>
                <div className="content-detail">
                    <div className="gradient-view skleton"/>
                    <div className="container skleton">
                        <div className="score-container skleton">
                            <Skeleton variant="circular" width={50} height={50} />
                        </div>
                        <div className="title-film">
                            <Skeleton height={28} width={200}/>
                        </div>
                        <div className="genre-container">
                            <Skeleton height={22} width={200}/>
                        </div>
                        <div className="time-release">
                            <div className="time-container">
                                <Skeleton height={28} width={100}/>
                            </div>
                            <div className="release-container">
                                <Skeleton height={28} width={100}/>
                            </div>
                        </div>

                        <div className="plot-container">
                            <Skeleton height={22}/>
                            <Skeleton height={22}/>
                            <Skeleton height={22}/>
                            <Skeleton height={22}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        
        return (
            <div className={classNames}>
                <img className="icon-close" src={CloseIcon} alt="close" onClick={onClickClose}/>
                <img className="header-poster" src={posterImage} alt="poster"/>
                <div className="content-detail">
                    <div className="gradient-view"/>
                    <div className="container">
                        <div className="score-container">
                            <text>{scoreRating}</text>
                        </div>
                        <div className="title-film">
                            <text>{name}</text>
                        </div>
                        <div className="genre-container">
                            <text>{genre}</text>
                        </div>
                        <div className="time-release">
                            <div className="time-container">
                                <img src={Time} alt="time"/>
                                <text>{time}</text>
                            </div>
                            <div className="release-container">
                                <img src={Calendar} alt="release"/>
                                <text>{release}</text>
                            </div>
                        
                        </div>
                        <div className="plot-container">
                            <text className="plot">{desc}</text>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
    return (
        <Fragment>
            <div className={`overlay-view ${showModal && 'show'}`}/>
            {isLoading ? renderSkeleton() : renderContent()}
            
        </Fragment>
        
    );
};

ModalDetailMovie.propsTypes = {
    className: PropTypes.string,
    showModal: PropTypes.bool,
    isLoading: PropTypes.bool,
    posterImage: PropTypes.string,
    scoreRating: PropTypes.string,
    name: PropTypes.string,
    genre: PropTypes.string,
    time: PropTypes.string,
    release: PropTypes.string,
    desc: PropTypes.string,
    onClickClose: PropTypes.func
};

ModalDetailMovie.defaultProps = {
    className: '',
    showModal: false,
    isLoading: false,
    posterImage: '',
    scoreRating: '',
    name: '',
    genre: '',
    time: '',
    release: '',
    desc: '',
    onClickClose: () => {}
};

export default ModalDetailMovie; 