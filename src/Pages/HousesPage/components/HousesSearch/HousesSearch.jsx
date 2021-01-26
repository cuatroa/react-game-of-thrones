import React from 'react';
import './HousesSearch.scss'
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';


export function HousesSearch (props) {

    const [t, i18n] = useTranslation("global");

    const { register, handleSubmit } = useForm();


    const onSubmit = (data) => {
        props.fnSubmit(data)
    };

    return (
        <div className="c-houses-search">
            <div className="row col-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">
                            <input type="text" className="text-houses-search" name="name" id="name" placeholder={t("Search.Search")}
                                ref={register}/>
                        </label>

                            <input className="b-houses-search" type="submit" value=" "/>
              
                        <hr></hr>
                </form>
            </div>
        </div>
    );
}