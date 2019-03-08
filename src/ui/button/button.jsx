import React from 'react';
import './style.scss'
import cn from 'classnames'
import PropTypes from 'prop-types'
import Icon from '../icon'

function Button(props) {
    const {
        htmlType,
        children,
        className,
        type,
        size,
        ghost,
        shape,
        icon,
        ...rest
    } = props
    return (
        <button
            {...rest}
            type={htmlType || 'button'}
            className={cn('n-btn', className, type && `_type-${type}`, size && `_size-${size}`, ghost && `_ghost`, shape && `_shape-${shape}`)}
        >
            {icon && <Icon type={icon} />}
            {children}
        </button>
    );
}

Button.propTypes = {
    htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
    size: PropTypes.oneOf(['large', 'small', 'default']),
    shape: PropTypes.oneOf(['circle', 'square', 'default']),
    type: PropTypes.oneOf(['primary', 'dashed', 'default', 'danger']),
    icon: PropTypes.string,
    ghost: PropTypes.bool,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    type: 'default'
}

export default Button;