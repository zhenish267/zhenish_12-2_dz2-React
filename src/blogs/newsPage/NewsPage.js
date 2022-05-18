import React from 'react';
import sas from './News.module.css'
import {Title} from "../../components/ orthodox/Orthodox";
import {Header} from "../../components/header/Header";
import {News} from "../../components/news/News";

const NewsPage = () => {
    return (
        <>
            <Title title='News Page'/>
            <Header/>
            <div className={sas.news}>
                <News />
                <News />
                <News />
            </div>
        </>
    );
};

export default NewsPage;