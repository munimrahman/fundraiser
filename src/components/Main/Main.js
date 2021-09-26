import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Main.css'

const Main = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("./fakeData.JSON")
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])
    const addToFavClickHandler = person => {
        setCart([...cart, person])
    }
    return (
        <div className="m-5 d-flex row main">
            {/* main data shocase, where all donors are listed */}
            <div className="col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        persons.map(person => <Person
                            key={person.id}
                            person={person}
                            addToFavClickHandler={addToFavClickHandler}
                        ></Person>)
                    }
                </div>
            </div>
            {/* this is sidebar, where cart items are diplayed and total amount calculated */}
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Main;