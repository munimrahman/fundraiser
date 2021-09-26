import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import SelectedPerson from '../SelectedPerson/SelectedPerson';
const donationIcon = <FontAwesomeIcon icon={faDonate} />

const Cart = (props) => {
    const { cart } = props;
    // total donation amount calculation
    let total = 0;
    for (const person of cart) {
        total += person.amount;
    }

    return (
        <div className="border rounded shadow">
            {/* show total added person and total donation amount */}
            <div className="p-3">
                <h3 className="text-center">Donation Cart</h3>
                <h5>Total Added: {cart.length}</h5>
                <h5>Total Amount: ${total}</h5>
                <div className="text-center mt-3">
                    <button className="btn btn-primary shadow-none rounded-pill">{donationIcon} Ask to Donate</button>
                </div>
            </div>
            {/* show selected donar */}
            {
                cart.map((singlePerson, index) => <SelectedPerson
                    key={index}
                    singlePerson={singlePerson}
                ></SelectedPerson>)
            }
        </div>
    );
};

export default Cart;