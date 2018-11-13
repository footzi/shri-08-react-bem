import { Registry } from '@bem-react/di';

import {Header, cnHeader} from '../../Header/Header@desktop';

export const desktop = new Registry({ id: 'platform' });

desktop.set(cnHeader(), Header);