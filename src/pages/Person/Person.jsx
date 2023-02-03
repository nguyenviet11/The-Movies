import React from 'react'
import Button from '../../components/button/Button'
import Layout from '../../components/layout/Layout'
import CareerDescription from './components/CareerDescription';
import DescriptionPerson from './components/DescriptionPerson';
import InfoPerson from './components/InfoPerson';
import ListFilmPerson from './components/ListFilmPerson';
import PosterPerson from './components/PosterPerson';
import SocialPerson from './components/SocialPerson';
import './Person.scss';

const Person = () => {
    return (
        <>
            <Layout>
                <div className="person__wrapper">
                    <div className="person__side-bar">
                        <PosterPerson />
                        <SocialPerson />
                        <InfoPerson />
                        <div className="person__button">
                            <Button rounded blueLight>EDIT PAGE</Button>
                        </div>
                    </div>
                    <div className="person__side-content">
                        <DescriptionPerson />
                        <ListFilmPerson />
                        <CareerDescription />
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Person