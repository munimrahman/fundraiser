import React from 'react';
import './Header.css'

// Site Header Component

const Header = () => {
    return (
        <div>
            <header className="text-center text-white p-2">
                <h2>Fundraising For The People. Get Involved!</h2>
                <h6 className="w-75 mx-auto">Do something incredible today! This is the best place for fundraising for the helpless people and charities you love. Here people are waiting for donating to you. You can also help by donating other peoples.</h6>
                <h2>Total Fund Raised: 175 Million</h2>
            </header>
        </div>
    );
};

export default Header;