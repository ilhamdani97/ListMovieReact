import React from "react";
import PropTypes from 'prop-types';
import classname from 'classnames';

const HeadingTitle = ({
    className,
    name,
    year
}) => {

    const classNames = classname('a-heading-title', className);

    return(
        <div className={classNames} data-testid={className}>
            <text>{`${name}(${year})`}</text>
        </div>
    )
};

HeadingTitle.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    year: PropTypes.string
};

HeadingTitle.defaultProps = {
    className: '',
    name: '',
    year: ''
};

export default HeadingTitle;