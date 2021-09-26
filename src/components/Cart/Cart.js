import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
const cartIcon = <FontAwesomeIcon icon={faDonate} />

const Cart = (props) => {
    console.log(props.cart);
    // total calc
    let total = 0;
    for (const single of props.cart) {
        total += single.amount;
    }
    return (
        <div className="border rounded shadow">
            <div className="p-3">
                <h3 className="text-center">Calculate Donation</h3>
                <h5>Total Added: {props.cart.length}</h5>
                <h5>Total Amount: ${total}</h5>
                <div className="text-center mt-3">
                    <button className="btn btn-primary shadow-none rounded-pill">{cartIcon} Ask to Donate</button>
                </div>
            </div>
            {
                props.cart.map(singlePerson => {
                    return (
                        <div className="row bg-info d-flex align-items-center m-1 border rounded">
                            <div className="col-5 p-0">
                                <img className="w-100" src={singlePerson.img} alt="abcd" />
                            </div>
                            <div className="col-7">
                                <h5 className="text-center">{singlePerson.name}</h5>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
};

export default Cart;