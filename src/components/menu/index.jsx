import React from 'react';
// import { Link } from 'react-router-dom'
import './style.scss'
import { siteData } from 'site-flame'


const menuList = (() => {
    const typeMap = {
        'common': '通用'
    }
    const menuMap = {}
    const arr = []
    siteData.docs.forEach(item => {
        const type = item.type
        if (typeof menuMap[type] === 'undefined') {
            menuMap[type] = arr.length
            arr.push({
                type: type,
                typeText: typeMap[type],
                list: []
            })
        }
       arr[menuMap[type]].list.push(item)
    })
    return arr
})();



const Menu = () => {


    return (
        <ul className='n-menu'>
            {
                menuList.map(item => (
                    <li className='n-menu-item' key={item.type}>
                        <div className='n-menu-item-title'>{item.typeText}</div>
                        <ul className='n-menu__sub'>
                            {
                                item.list.map(subItem => (
                                    <li className='n-menu__sub-item' key={subItem.path}>{subItem.title}</li>
                                ))
                            }
                        </ul>
                    </li>
                ))
            }

        </ul>
    )
}


export default Menu;