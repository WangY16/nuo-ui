import React, { Component } from 'react';
import cn from 'classnames'
import PropTypes from 'prop-types'
import './style.scss'
import './iconfont.css'

class Icon extends Component {
    render() {
        const {
            type,
            className,
            ...rest
        } = this.props
        return (
            <i className={cn('n-icon', `icon${type}`, className)} {...rest}></i>
        );
    }
}

Icon.propTypes = {
    type: PropTypes.string.isRequired
}

export default Icon;