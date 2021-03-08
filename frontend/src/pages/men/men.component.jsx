import React from 'react'

import arrowRight from '../../assets/SVG/arrow-long-right.svg'

import './men.styles.scss'

export const Men = () => <>
    <section className='section'>
        <a href='https://www.adidas.com/watchusmove'>
            <div className='main-1'>
                <div>
                    <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/originals-ss21-ivypark-launch-menLP-1-masthead-d_tcm226-633869.jpg' className='main-1__background-image' />
                </div>
                <div className='main-1__content'>
                    <div className='main-1__logo'>
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/Ivy_park_lockup_v2_tcm226-633138.png' />
                    </div>
                    <div className='main-1__title'>
                        <h1 className='heading-primary'>
                            icy park
                        </h1>
                    </div>
                    <div className='main-1__summary'>
                        your park is your imagination. make it a wonderland.
                    </div>
                    <div className='main-1__cta'>
                        <button className='btn btn--white'>
                            <span>shop now</span>
                            <img src={arrowRight} alt='arrow right' className='arrow-right-long margin-left-small' />
                        </button>
                    </div>
                </div>
            </div>
        </a>
    </section>
    <section className='section'>
        <div className='main-2'>
            <div className='main-2__title'>
                <h2 className='heading-secondary'>men</h2>
            </div>
            <ul className='main-2__sub-nav'>
                <li><a className='main-2__link'>shoes</a></li>
                <li><a className='main-2__link'>clothing</a></li>
                <li><a className='main-2__link'>accessories</a></li>
                <li><a className='main-2__link'>new arrivals</a></li>
                <li><a className='main-2__link'>view all men products</a></li>
            </ul>
        </div>
    </section>
    <section>
        <div className="main-3">
            <div className="main-3__tiles">
                <a href='#'>
                    <div className='main-3__tiles-wrapper'>
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/mglp-div-nav-ss20-may-shoes-d_tcm226-491357.png' className='main-3__background-image' />
                        <div className='main-3__content'>
                            <div className='main-3__cta'>
                                <button className=''>
                                    <span>shop shoes</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="main-3__tiles">
                <a href='#'>
                    <div className='main-3__tiles-wrapper'>
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/mglp-div-nav-ss20-may-tops-d_tcm226-491361.png' className='main-3__background-image' />
                        <div className='main-3__content'>
                            <div className='main-3__cta'>
                                <button className=''>
                                    <span>shop tops</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="main-3__tiles">
                <a href='#'>
                    <div className='main-3__tiles-wrapper'>
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/mglp-div-nav-ss20-may-bottoms-d_tcm226-491353.png' className='main-3__background-image' />
                        <div className='main-3__content'>
                            <div className='main-3__cta'>
                                <button className=''>
                                    <span>shop bottoms</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="main-3__tiles">
                <a href='#'>
                    <div className='main-3__tiles-wrapper'>
                        <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enAU/Images/mglp-div-nav-ss20-may-running-shoes-d_tcm226-491354.png' className='main-3__background-image' />
                        <div className='main-3__content'>
                            <div className='main-3__cta'>
                                <button className=''>
                                    <span>shop running shoes</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</>

