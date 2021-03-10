import React from 'react'

import backIcon from '../../assets/SVG/subdirectory_arrow_left.svg'
import arrowDownIcon from '../../assets/SVG/keyboard_arrow_down.svg'
import arrowUpIcon from '../../assets/SVG/keyboard_arrow_up.svg'
import heartEmptyIcon from '../../assets/SVG/heart-stroke.svg'
import heartFillIcon from '../../assets/SVG/heart-fill.svg'


import checkIcon from '../../assets/SVG/check.svg'


import './search.styles.scss'

class Search extends React.Component {
    state = {

    }

    render() {
        return <>
            <div className="container">
                <section className='section'>
                    <div className="breadcrumbs">
                        <div className="breadcrumbs__nav">
                            <ul className='breadcrumbs__list'>
                                <li className='breadcrumbs__item margin-right-medium'>
                                    <button>
                                        <span className='breadcrumbs__item-content'>
                                            <img src={backIcon} alt='back icon' className='breadcrumbs__back-icon margin-right-small' />
                                            back
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="main">
                        <div className='main__title'>
                            <h1 className='heading-primary'>
                                all products
                                &nbsp;
                            </h1>
                        </div>
                        <div className="main__count">
                            [4529]
                        </div>
                    </div>
                </section>

                <section>
                    <div className="category">
                        <div className="category-left">
                            <div className="category-left__item">
                                <input type="checkbox" id='checkbox-hack' className='checkbox-hack' />
                                <label htmlFor="checkbox-hack" className='checkbox-hack-eme'></label>
                                <div className="category-left__label">
                                    <div className="category-left__title">
                                        <span>Gender</span>
                                    </div>
                                    <div className="category-left__icon">
                                        <img src={arrowDownIcon} alt="select category" className='arrow-down' />
                                        <img src={arrowUpIcon} alt="select category" className='arrow-up' />
                                    </div>
                                </div>
                                <div className="category-left__options">
                                    <div>
                                        <ul className="category-left__options-list">
                                            <li>
                                                <a href="#" className="category-left__options-item">
                                                    <div className="category-left__options-form-item">
                                                        <input type="checkbox" />
                                                        <img src={checkIcon} alt="" />
                                                        <label htmlFor="">Men</label>
                                                        <span>(2379)</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="category-left__options-item">
                                                    <div className="category-left__options-form-item">
                                                        <input type="checkbox" />
                                                        <img src={checkIcon} alt="check icon" />
                                                        <label htmlFor="">Women</label>
                                                        <span>(2267)</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="category-left__options-item">
                                                    <div className="category-left__options-form-item">
                                                        <input type="checkbox" />
                                                        <img src={checkIcon} alt="" />
                                                        <label htmlFor="">Kids</label>
                                                        <span>(674)</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="category-right"></div>
                    </div>
                    <div className="product">
                        <div className="product__list">
                            <div className="product__item">
                                <div className="product__assets">
                                    <a href="#" className="product__assets-link">
                                        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/351cb20aa4d0487d946eabb2011f7805_9366/face-cvr-m-l.jpg" alt="face cvr m/l" className="product__assets-image" />
                                        <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/2dcd0a32c83c41b7b020abb2011fa63e_9366/face-cvr-m-l.jpg" alt="face cvr m/l" className="product__assets-image product__assets-on-toggle-image" />
                                    </a>
                                    <div className="product__assets-heart">
                                        <img src={heartEmptyIcon} alt="" className="product__assets-heart-empty" />
                                    </div>
                                    <div className='product__assets-badge'>exclusive</div>
                                </div>
                                <div className="product__carousel">
                                    <div className="product__carousel-item">
                                        <a href="#" className="product__carousel-link">
                                            <img src="https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy/4c39617b3c4a4ed69e2cac5500995208_9366/ultraboost-4.0-dna-shoes.jpg" alt="" className="product__carousel-image" />
                                        </a>
                                    </div>
                                    <div className="product__carousel-item">
                                        <a href="#" className="product__carousel-link">
                                            <img src="https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy/6001a1e99bcd4dbe92f7ac1e01198b6e_9366/ultraboost-4.0-dna-shoes.jpg" alt="" className="product__carousel-image" />
                                        </a>
                                    </div>
                                    <div className="product__carousel-item">
                                        <a href="#" className="product__carousel-link">
                                            <img src="https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy/169221712df142b68cdcac5500997c7a_9366/ultraboost-4.0-dna-shoes.jpg" alt="" className="product__carousel-image" />
                                        </a>
                                    </div>
                                    <div className="product__carousel-item">
                                        <a href="#" className="product__carousel-link">
                                            <img src="https://assets.adidas.com/images/w_85,h_85,f_auto,q_auto:sensitive,fl_lossy/327ad638560348599771ac67015f0ad8_9366/ultraboost-4.0-dna-shoes.jpg" alt="" className="product__carousel-image" />
                                        </a>
                                    </div>
                                </div>
                                <div className="product__details">
                                    <a href="#" className="product__details-link">
                                        <h4 className="product__details-top">Essentials</h4>
                                        <h3 className="product__details-main">
                                            <span className="product__details-main-title">face cvr m/l</span>
                                            <span className="product__details-main-price">$25</span>
                                        </h3>
                                        <h4 className="product__details-bottom">11 colours</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    }
}

export default Search

// data
const PRODUCTS = [
    {
        gender: 'men',
        category: 'accessories',
        sport: 'essentials',
        name: 'face cvr m/l',
        price: 25,
        heart: false,
        colours: 0,
        imageUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/351cb20aa4d0487d946eabb2011f7805_9366/face-cvr-m-l.jpg',
        imgUrlHover: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/2dcd0a32c83c41b7b020abb2011fa63e_9366/face-cvr-m-l.jpg'

    },
    {
        gender: 'men',
        category: 'shoes',
        sport: 'running',
        name: 'iltraboost 4.0 dna shoes',
        price: 250,
        heart: false,
        colours: 4,
        imageUrl: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy/4c39617b3c4a4ed69e2cac5500995208_9366/ultraboost-4.0-dna-shoes.jpg',
        imgUrlHover: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto:sensitive,fl_lossy/4df6a4c2c1a6459eb8a1ac5500915c8e_9366/ultraboost-4.0-dna-shoes.jpg'

    },
]