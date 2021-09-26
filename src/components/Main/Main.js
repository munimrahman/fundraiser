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
    const clickHandler = person => {
        setCart([...cart, person])
    }
    return (
        <div className="m-5 d-flex row main">
            <div className="col-9">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        persons.map(person => <Person
                            key={person.id}
                            person={person}
                            clickHandler={clickHandler}
                        ></Person>)
                    }
                </div>
            </div>
            <div className="col-3">
                <Cart cart={cart}></Cart>
            </div>
        </div >
    );
};

export default Main;