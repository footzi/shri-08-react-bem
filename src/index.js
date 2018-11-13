import React from 'react';
import ReactDOM from 'react-dom';
import Page from './components/Page/Page';
import {mobile} from './components/Page/Page.registry/mobile';
import {desktop} from './components/Page/Page.registry/desktop';
import { withRegistry } from '@bem-react/di';

let Platform = '';

if (window.innerWidth < 1280) {
    Platform = withRegistry(desktop)(Page);
} else {
    Platform = withRegistry(mobile)(Page);
}

ReactDOM.render(<Platform />, document.getElementById('root'));