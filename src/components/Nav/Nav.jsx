import * as React from 'react';
import './Nav.css';
import {cn} from '@bem-react/classname';

export const cnNav = cn('Nav');

export default class Nav extends React.Component {
    render() {
        return (
            <nav className={cnNav()}>
                <ul className={cnNav('List')}>
                    <li className={cnNav('Item')}>
                        <a className={cnNav('Link', {active: true})} href="/">Главная</a>
                    </li>
                    <li className={cnNav('Item')}>
                        <a className={cnNav('Link')} href="/cameras">Камеры</a>
                    </li>
                    <li className={cnNav('Item')}>
                        <a className={cnNav('Link')} href="/summary">Cводка</a>
                    </li>
                    <li className={cnNav('Item')}>
                        <a className={cnNav('Link')} href="/devices">Устройства</a>
                    </li>
                    <li className={cnNav('Item')}>
                        <a className={cnNav('Link')} href="/scenario">Cценарии</a>
                    </li>
                </ul>
            </nav>
        )
    }
}