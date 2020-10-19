import React from 'react';
import Client from '../Client/Client';
import MainHeader from '../MainHeader/MainHeader';

const Header = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <Client></Client>
        </div>
    );
};

export default Header;