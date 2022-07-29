import React from "react";
import PropTypes from 'prop-types';
import classname from 'classnames';

const Rating = ({
    className,
    valueRating,
    valueOf
}) => {
    
    const classNames = classname('a-rating', className);

    return (
        <div className={classNames} data-testid={className}>
            <text className="value">{valueRating}</text>
            <text>/</text>
            <text className="value">{valueOf}</text>
        </div>
    );
};

Rating.propTypes = {
    className: PropTypes.string,
    valueRating: PropTypes.string,
    valueOf: PropTypes.string
};

Rating.defaultProps = {
    className: '',
    valueRating: '',
    valueOf: ''
};

export default Rating;

