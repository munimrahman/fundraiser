import React from 'react';
import './SelectedPerson.css'

const SelectedPerson = (props) => {
    const { img, name } = props.singlePerson;
    // console.log(props.id);
    return (
        <div className="row selected-person d-flex align-items-center m-1 border rounded">
            <div className="col-5 p-0">
                <img className="w-100" src={img} alt="abcd" />
            </div>
            <div className="col-7">
                <h5 className="text-center">{name}</h5>
            </div>
        </div>
    );
};

export default SelectedPerson;