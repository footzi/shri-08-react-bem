import './Header@desktop.css';
import { Header as HeaderCommon } from './Header';

export class Header extends HeaderCommon {
    desktop() {
        return true;
    }
}

export {cnHeader} from './Header';
