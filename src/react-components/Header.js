import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import '../style/header.sass'

const HeaderButton = styled(Button)({
    border: '2px double white',
    borderRadius: '5px',
    color: 'white',
    height: '40px',
    width: '218px',
    padding: '0 30px',
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    fontWeight: 500,
    transition: 'all 0.2s ease-out'
});

class Header extends Component {
    render() {
        return (
            <header>
                <div className='header-left'>
                    <div className='header-left__logo'>
                        <img src="../image/logo.svg" alt="" />
                    </div>
                    <div className='header-bar header-left__bar'>
                        <a id="main" href="/">Главная</a>
                        <a href="/">Блог</a>
                        <a href="/">Рейтинг</a>
                    </div>
                </div>
                <div className='header-right'>
                    <div className='header-bar header-right__bar'>
                        <a href="/">PRO</a>
                        <a href="/">ENG</a>
                        <a href="/">Войти</a>
                    </div>
                    <HeaderButton className='button'>Зарегистрироваться</HeaderButton>
                </div>
            </header >
        );
    }
}

export default Header;