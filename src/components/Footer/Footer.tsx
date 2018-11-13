import * as React from 'react';
import {cn} from '@bem-react/classname';
import './Footer.css';

const cnPage = cn('Page')
const cnFooter = cn('Footer');

export default class Footer extends React.Component {
    render() {
        return (
            <footer className={cnPage('Footer', [cnFooter()])}>
                <nav className={cnFooter("Nav")}>
                    <ul className={cnFooter("List")}>
                        <li className={cnFooter("Item")}>
                            <a className={cnFooter("Link")} href="#">Помощь</a>
                        </li>
                        <li className={cnFooter("Item")}>
                            <a className={cnFooter("Link")} href="#">Обратная связь</a>
                        </li>
                        <li className={cnFooter("Item")}>
                            <a className={cnFooter("Link")} href="#">Разработчикам</a>
                        </li>
                        <li className={cnFooter("Item")}>
                            <a className={cnFooter("Link")} href="#">Условия использования</a>
                        </li>
                        <li className={cnFooter("Item")}>
                            <a className={cnFooter("Link")} href="https://docviewer.yandex.ru/view/1130000031416101/?*=UTbGnhLEpPE6lOlj2y1xK3DZ%2BBd7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMDEiLCJ5dSI6IjYzMTcyODQ2ODE1MzExMjcyNzQiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4ODI2MDkxNTgwfQ%3D%3D">Cсылка
                                на лицензию</a>
                        </li>
                    </ul>
                </nav>
                <div className={cnFooter("Copyright")}>© 2001–2017 ООО «Яндекс»</div>
            </footer>
        )
    }
}

