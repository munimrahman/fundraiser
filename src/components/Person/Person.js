import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
const cartIcon = <FontAwesomeIcon icon={faHeart} />

const Person = (props) => {
    const { id, name, age, img, profession, amount, email } = props.person;
    return (
        <div className="col">
            <div className="card h-100 shadow">
                <img src={img} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title text-center">Name: {name}</h5>
                    <p className="card-text ps-3"><span className="fw-bold">ID:</span> {id}</p>
                    <p className="card-text ps-3"><span className="fw-bold">Age:</span> {age}</p>
                    <p className="card-text ps-3"><span className="fw-bold">Profession:</span> {profession}</p>
                    <p className="card-text ps-3"><span className="fw-bold">Interested to Donate:</span> ${amount}</p>
                    <p className="card-text ps-3"><span className="fw-bold">Email:</span> {email}</p>
                    <div className="text-center">
                        <button className="btn btn-primary rounded-pill shadow-none" onClick={() => props.clickHandler(props.person)}>{cartIcon} Add to Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;