import React from "react";
import PropTypes from 'prop-types';
import classname from 'classnames';

import './styles.scss';

const Button = ({
    className,
    children,
    onClick
}) => {

    const classNames = classname('a-button', className);

    return (
        <div className={classNames}>
            <button children={children} onClick={onClick}/>
        </div>
    );
};


Button.propsTypes = {
    className: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: '',
    children: '',
    onClick: () => {}
}

export default Button;
