import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../../styles.css'

const cnPage = cn('Page');
const cnHeader = cn('Header');

export default class Page extends React.Component {
    render() {
        return (
            <div className={cnPage()}>
                <RegistryConsumer>
                    {registries => {
                        const registry = registries['platform'];
                        const Header = registry.get(cnHeader());

                        return <Header/>;
                    }}
                    
                </RegistryConsumer>
                <Main></Main>
                <Footer></Footer>
            </div>
        )
    }
}
