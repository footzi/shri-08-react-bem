import { Registry } from '@bem-react/di';

import {Header, cnHeader} from '../../Header/Header@mobile';

export const mobile = new Registry({ id: 'platform' });

mobile.set(cnHeader(), Header);