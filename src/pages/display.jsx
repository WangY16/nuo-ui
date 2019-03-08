// path: '/display'

import React, { Component } from 'react';
import {
    Button,
    Icon
} from '@/ui'
import './style.scss'

class Display extends Component {
    render() {
        return (
            <div 
            className='display'
            style={{
                padding: 50,
                // background: '#00BCD4'
            }}>
                <Button type='primary' icon={'loading'}>主按钮</Button>
                <Button shape='circle' ghost icon={'file'}></Button>
                <Button type='dashed' ><Icon type='file'/>虚框按钮</Button>
                <Button type='danger' ghost>危险按钮</Button>
                <Button type='danger' shape='square'>危险按钮</Button>

                <Button.Group>
                    <Button >杭州</Button>
                    <Button icon={'file'} >上海</Button>
                    <Button  >成都</Button>
                    <Button>武汉</Button>
                </Button.Group>
            </div> 
        );
    }
}

export default Display;