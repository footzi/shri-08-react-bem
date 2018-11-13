import * as React from 'react';
import './Article.css';
import cross from './media/cross.svg';
import next from './media/next-white.svg'
import {cn} from '@bem-react/classname';
import album from './media/album-cover.png';
import prev from './media/Prev.svg';

const cnArticle = cn('Article');

interface ArticleProps {
    size: string,
    title: string,
    icon: any,
    about: About
    info?: Info
    music?: Boolean
    button?: Boolean
}

interface Info {
    important?: string,
    image?: string,
    message?: string,
    params?: any
}

interface About {
    title: string
    time: string
}

const sizeClassName = (size: string):any => {
    switch (size) {
        case 's':
            return cnArticle({size: 'small'});
            break
        case 'm':
            return cnArticle({size: 'medium'});
            break
        case 'b':
            return cnArticle({size: 'big'});
            break
        case 'md':
            return cnArticle({size: 'medium', state: 'danger'});
            break
        case 'bd':
            return cnArticle({size: 'big', state: 'danger'});
            break
        default:
        return cnArticle();
    }
}

export const Article: React.SFC<ArticleProps> = props => (
    <article className={sizeClassName(props.size)}>
        <header className={cnArticle('Header')}>
            <div className={cnArticle('HeaderWrap')}>
                <img src={props.icon} alt={props.title} />
                <h2 className={cnArticle('Title')}>{props.title}</h2>
            </div>
            <div className={cnArticle('About')}>
                <span>{props.about.title}</span>
                <span>{props.about.time}</span>
            </div>
        </header>
        <div className={cnArticle('Controls', {position: 'down'})}>
            <button className={cnArticle('Close')}>
                <img src={cross} alt="Закрыть карточку" />
            </button>
            <a href="/" className={cnArticle('Link')}>
                <img src={next} alt="Перейти"/>
            </a>
        </div>
        { props.info &&
            <div className={cnArticle('Info')}>

                { props.info.message &&
                    <div className={cnArticle('Message')}>
                        {props.info.message}
                    </div>
                }
               
               { props.info.params &&
                    <ul className={cnArticle('Params')}>
                        <li className={cnArticle('ParamsItem')}>
                            {props.info.params.temp}
                        </li>
                        <li className={cnArticle('ParamsItem')}>
                            {props.info.params.wet}
                        </li>
                    </ul>
               }

                { props.info.important &&
                    <div className={cnArticle('Important')}>
                        {props.info.important}
                    </div>
                }

                { props.info.image &&
                    <div className={cnArticle('Image')}>
                        <img src={props.info.image} alt="График расхода ресурсов" />
                    </div>
                }

                { props.music &&
                    <div className={cnArticle('Music')}>
                        <div className={cnArticle('TrackWrap')}>
                            <img src={album} className={cnArticle('Album')} alt="Florence & The Machine" />
                            <div className={cnArticle('Track')}>
                                <div className={cnArticle('TrackTitle')}>
                                    Florence & The Machine - Big God
                                </div>
                                <div className={cnArticle('TrackControl')}>
                                    <div className={cnArticle('TrackFill')}></div>
                                    <span>4:31</span>
                                </div>
                            </div>
                        </div>
                        <div className={cnArticle('TrackControl')}>
                            <img className={cnArticle('TrackDirection')} src={prev} alt="Предыдущий трэк" />
                            <img className={cnArticle('TrackDirectionNext')} src={prev} alt="Следующий трэк" />
                            <div className={cnArticle('TrackVolume')}>
                                <div className={cnArticle('TrackVolumeFill')}></div>
                                <span>80%</span>
                            </div>
                        </div>
                    </div> 
                }

                { props.button &&
                    <div className={cnArticle('ButtonGroup')}>
                        <button className={cnArticle('Button', {color: 'yellow'})}>
                            Да
                        </button>
                        <button className={cnArticle('Button')}>
                            Нет
                        </button>
                    </div>
                }
            </div>
        }
    </article>
);