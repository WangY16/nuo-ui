import React, { Component } from 'react';
import {
    // siteData,
    Markdown
} from 'site-flame'
import * as UI from '../../ui'
import './style.scss'
import Header from '@comps/header'
import Menu from '@comps/menu'

class Content extends Component {

    render() {
        const data = this.props.data
        const modules = data.frontmatter.modules.map(item=>{
            switch(item) {
                case 'React':
                return React
                case 'Component':
                return Component
                default:
                return UI[item]
            }
        })
        return (
            <div className='page content-page'>
                <Header/>
                <div className='page-body'>
                    <div className='_page-side-bar'>
                        <Menu/>
                    </div>
                    <div className='_page-content'>
                        <Markdown md={data} modules={modules}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;