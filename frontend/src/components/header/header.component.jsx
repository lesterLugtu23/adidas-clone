import React from 'react'

import { Link } from 'react-router-dom'

import logoAdidas from '../../assets/adidas-logo.svg'
import logoReebok from '../../assets/reebok.png'
import searchIcon from '../../assets/SVG/search.svg'
import profileIcon from '../../assets/SVG/user.svg'
import cartIcon from '../../assets/SVG/bag.svg'

import './header.styles.scss'

export const Header = () => <>
    <div className="header">
        <div class="header-top">
            <a href="#" class="header-top__link">
                also visit
                <img src={logoReebok} alt="reebok logo" class="header-top__logo" />
            </a>
            <a href="#" class="header-top__link">blog</a>
            <a href="#" class="header-top__link">help</a>
            <a href="#" class="header-top__link">order tracker</a>
            <a href="#" class="header-top__link">newsletter signup</a>
            <a href="#" class="header-top__link">creators club</a>
            <a href="#" class="header-top__link">log in</a>
        </div>

        <div class="header-bottom">
            <img src={logoAdidas} alt="adidas logo" class="header-bottom__logo" />
            <div class="header-bottom__main-navigation">
                <Link to="/men" class="header-bottom__link">men</Link>
                <a href="" class="header-bottom__link">women</a>
                <a href="" class="header-bottom__link">kids</a>
                <a href="" class="header-bottom__link">sports</a>
                <a href="" class="header-bottom__link">brands</a>
                <a href="" class="header-bottom__link">release dates</a>
            </div>
            <div class="header-bottom__right-side-menu">
                <form action="#" class="header-bottom__search">
                    <input type="text" class="header-bottom__input" placeholder="search" />
                    <button class="header-bottom__button">
                        <img src={searchIcon} class="header-bottom__icon" />
                    </button>
                </form>
                <div class="header-bottom__profile-button">
                    <a href="" class="header-bottom__profile-link">
                        <img src={profileIcon} class="header-bottom__profile-icon" />
                    </a>
                </div>
                <div class="header-bottom__cart">
                    <a href="" class="header-bottom__cart-link">
                        <img src={cartIcon} alt="cart icon" class="header-bottom__cart-icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</>