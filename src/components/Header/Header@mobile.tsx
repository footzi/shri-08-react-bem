import './Header@mobile';
import { Header as HeaderCommon } from './Header';

export class Header extends HeaderCommon {
    desktop() {
        return false;
    }
}

export {cnHeader} from './Header';
