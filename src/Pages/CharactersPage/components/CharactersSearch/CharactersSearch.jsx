import React from 'react';
import './CharactersSearch.scss'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';


export function CharactersSearch (props) {

    const [t, i18n] = useTranslation("global");

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        props.fnSubmit(data)
    };

    return (
        <div className="c-characters-search">
            <div className="row col-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">
                            <input type="text" className="text-characters-search" name="name" id="name" placeholder={t("Search.Search")}
                                ref={register}/>
                        </label>
                        
                            <input className="b-characters-search" type="submit" value=" "/>
                        
                        <hr></hr>
                </form>
            </div>
        </div>
    );
}