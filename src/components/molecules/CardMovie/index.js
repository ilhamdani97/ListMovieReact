import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import classname from 'classnames';

//component
import { Button } from "../../atoms";
import Skeleton from '@mui/material/Skeleton';

import './styles.scss';

const CardMovie = ({
    className,
    year,
    filmName,
    image,
    isLoading,
    onClick
}) => {
    const classNames = classname('m-card-movie', className);

    const renderSkeleton = () => {
        return (
            <div className={classNames}>
                <div className="content-info">
                    <Skeleton height={40}/>
                    <Skeleton height={34}/>

                    <Skeleton height={44} width={80}/>

                    <div className="image-cover skleton">
                        <Skeleton variant="rectangular" animation={false} width={146} height={220}/>
                    </div>
                </div>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className={classNames}>
                <div className="content-info">
                    <text>{year}</text>
                    <text className="title-film">{filmName}</text>
                    <Button 
                        className={'button-detail'} 
                        onClick={onClick}
                        children={'Detail'}
                    />
                </div>
            
                <div className="image-cover">
                    <img alt="poster" src={image}/>
                </div>
            </div>
        )
    }
    return (
        <Fragment>
            {isLoading ? renderSkeleton() : renderContent()}
        </Fragment>
       
    );
};

CardMovie.propsTypes = {
    className: PropTypes.string,
    listMovie: PropTypes.array,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func
};

CardMovie.defaultProps = {
    className: '',
    listMovie: [],
    isLoading: true,
    onClick: () => {}
};

export default CardMovie;
