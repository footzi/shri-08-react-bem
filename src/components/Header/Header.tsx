import * as React from 'react';
import logo from './media/yandex-logo.svg';
import burgerIcon from './media/burger.svg';
import closeIcon from './media/close.svg';
import Nav from '../Nav/Nav';
import {cn} from '@bem-react/classname';

const cnPage = cn('Page')
export const cnHeader = cn('Header');

export class Header extends React.Component {
    desktop() {
        return true;
    }

    render() {
        return (
            <header className={cnPage('Header', [cnHeader()])}>
                <div className={cnHeader("Logo")}>
                    <img src={logo} alt="Яндекс дом" />
                </div>
                <div className={cnHeader("Navigation")}>
                    <Nav></Nav>
                </div>
                { this.desktop() &&
                    <div>
                        <div className={cnHeader("Burger")}>
                            <img src={burgerIcon} alt="Кнопка открытия меню" />
                        </div>
                        <div className={cnHeader("MobileMenu")}>
                        <div className={cnHeader("MobileMenuTop")}>
                            <div className={cnHeader("MobileMenuLogo")}>
                                <img src={logo} alt="Яндекс дом" />>
                            </div>
                            <div className={cnHeader("MobileMenuClose")}>
                                <img src={closeIcon} alt="Закрыть меню" />>
                            </div>
                        </div>
                        <div className={cnHeader("MobileMenuNavigation")}>
                            <Nav></Nav>
                        </div>
                    </div>    
                </div> 
                }
            </header>
        )
    }
}