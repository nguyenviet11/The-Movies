import React, { createContext, useEffect, useState } from 'react'
import Button from '../../components/button/Button'
import Layout from '../../components/layout/Layout'
import CareerDescription from './components/Career/_index';
import DescriptionPerson from './components/DescriptionPerson';
import InfoPerson from './components/InfoPerson';
import ListFilmPerson from './components/ListFilmPerson';
import PosterPerson from './components/PosterPerson';
import SocialPerson from './components/SocialPerson';
import './Person.scss';
import { getPersonCredit, getPersonInformation } from './services/api';
import Example from './components/SelectMenu';

export const PersonContext = createContext()

const Person = () => {
    const [personInformation, setPersonInformation] = useState();
    const [personCredits, setPersonCredits] = useState();
    const [personError, setPersonError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPerson = async () => {
        try {
            setIsLoading(true)
            const responsePerson = await getPersonInformation(31);
            const responseCredits = await getPersonCredit(31);
            setPersonInformation(responsePerson.data);
            setPersonCredits(responseCredits.data);
        }
        catch (err) {
            setPersonError(err)
        }
    }

    useEffect(() => {
        getPerson();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                (personInformation && personCredits) && (
                    <PersonContext.Provider
                        value={
                            {
                                person: personInformation,
                                credit: personCredits
                            }
                        }
                    >
                        <Layout>
                            <div className="person__wrapper">
                                <div className="person__side-bar">
                                    <Example />
                                    <PosterPerson />
                                    {/* <SocialPerson /> */}
                                    <InfoPerson />
                                    <div className="person__button">
                                        <Button rounded blueLight>EDIT PAGE</Button>
                                    </div>
                                </div>
                                <div className="person__side-content">
                                    <DescriptionPerson />
                                    {/* <ListFilmPerson /> */}
                                    <CareerDescription />
                                </div>
                            </div>
                        </Layout>
                    </PersonContext.Provider>
                )
            }
        </>
    )
}

export default Person