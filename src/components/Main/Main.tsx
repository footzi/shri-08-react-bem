import * as React from 'react';
import { Article } from '../Article/Article';
import {cn} from '@bem-react/classname';
import stats from './media/stats.svg';
import key from './media/key.svg';
import cleaner from './media/robot-cleaner.svg';
import router from './media/router.svg';
import richdata from './media/Richdata.png';
import thermal from './media/thermal.svg';
import ac from './media/ac-white.svg';
import music from './media/music.svg';
import fridge from './media/fridge.svg';
import battery from './media/battery.svg';
import './Main.css';

const cnPage = cn('Page');
const cnMain = cn('Main');

export default class Main extends React.Component {
    render() {
        return (
            <main className={cnPage('Main', [cnMain()])}>
                <h1 className={cnMain('Title')}>Лента событий</h1>
                <div className={cnMain('Grid')}>
                    <Article
                        icon={stats}
                        size='b'
                        title='Еженедельный отчет по расходам ресурсов'
                        about={
                            {
                                title: 'Сенсоры потребления',
                                time: '19:00, Сегодня'
                            }
                        }
                        info={
                            {
                                important: ' Так держать! За последнюю неделю вы потратилина 10% меньше ресурсов, чем неделей ранее.',
                                image: richdata
                            }
                        }
                    >
                    </Article>

                    <Article
                        icon={key}
                        size='s'
                        title='Дверь открыта'
                        about={
                            {
                                title: 'Дверь открыта',
                                time: '18:50, Сегодня'
                            }
                        }
                    >
                    </Article>

                    <Article
                        icon={cleaner}
                        size='s'
                        title='Уборка закончена'
                        about={
                            {
                                title: 'Уборка закончена',
                                time: '14:00, Сегодня'
                            }
                        }
                    >
                    </Article>

                    <Article
                        icon={router}
                        size='s'
                        title='Новый пользователь'
                        about={
                            {
                                title: 'Новый пользователь',
                                time: '18:00, Вчера'
                            }
                        }
                    >
                    </Article>

                    <Article
                        icon={thermal}
                        size='m'
                        title='Изменен климатический режим'
                        about={
                            {
                                title: 'Сенсор микроклимата',
                                time: '18:00, Cегодня'
                            }
                        }
                        info={
                            {
                                message: ' Установлен климатический режим «Фиджи»',
                                params: {
                                    temp: 'Температура: 24 С',
                                    wet: 'Влажность: 80%'
                                }
                            }
                        }
                    >
                    </Article>

                    <Article
                        icon={ac}
                        size='md'
                        title='Невозможно включить кондиционер'
                        about={
                            {
                                title: 'Кондиционер',
                                time: '18:21, Cегодня'
                            }
                        }
                        info={
                            {
                                message: 'В комнате открыто окно, закройте его и повторите попытку',
                            }
                        }
                    >
                    </Article>

                    <Article
                        icon={music}
                        size='m'
                        title='Музыка включена'
                        about={
                            {
                                title: 'Яндекс.Станция',
                                time: '18:16, Cегодня'
                            }
                        }
                        info={
                            {
                                message: 'Сейчас проигрывается',
                            }
                        }
                        music={true}
                    >
                    </Article>

                    <Article
                        icon={fridge}
                        size='m'
                        title='Заканчивается молоко'
                        about={
                            {
                                title: 'Холодильник',
                                time: '17:23, Cегодня'
                            }
                        }
                        info={
                            {
                                message: 'Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?',
                            }
                        }
                        button={true}
                    >
                    </Article>

                    <Article
                        icon={battery}
                        size='s'
                        title='Зарядка завершена'
                        about={
                            {
                                title: 'Оконный сенсор',
                                time: '6:22, Сегодня'
                            }
                        }
                        info={
                            {
                                message: 'Ура! Устройство «Оконный сенсор» снова в строю.',
                            }
                        }
                    >
                    </Article>
                </div>
            </main>
        )
    }
}