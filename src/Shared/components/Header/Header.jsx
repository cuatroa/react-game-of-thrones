import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Header.scss'

export function Header () {

    const [t, i18n] = useTranslation("global");

    return (
        <header>
            <div className="c-header">
                <div className="c-header__container">
                    <Link to="/">
                        <button className="c-header__home-button"></button>
                    </Link>
                </div>
                <div className="c-header__container">
                    <button className="c-header__language-button" onClick={() => i18n.changeLanguage("en")}>
                        <span>EN</span>
                    </button>
                </div>
                <div className="c-header__container">
                    <button className="c-header__language-button" onClick={() => i18n.changeLanguage("es")}>
                        <span>ES</span>
                    </button>
                </div>
            </div>
        </header>
    )
}