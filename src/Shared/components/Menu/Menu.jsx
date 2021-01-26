import React from 'react';
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Menu () {

    const [t, i18n] = useTranslation("global");

    return (
        <footer>
            <div className="c-menu container-fluid">
                <nav className="nav w-100 justify-content-around">
                    <NavLink activeClassName='is-active' className="c-menu__link" to="/characters">{t("Menu.Characters")}</NavLink>
                    <NavLink activeClassName='is-active' className="c-menu__link" to="/houses">{t("Menu.Houses")}</NavLink>
                    <NavLink activeClassName='is-active' className="c-menu__link" to="/chronology">{t("Menu.Chronology")}</NavLink>
                </nav>
            </div>
        </footer>
    );
}