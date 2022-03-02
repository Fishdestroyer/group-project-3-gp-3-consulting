import React from 'react';

const Header = () => {
    return (
        <header className="bg-secondary mb-4 py-2 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
            <h1><strong>COW Money Making</strong></h1>
                <div class="tab-1">
                
                <button class="tablinks" onclick="">Contact Us</button>
                <button class="tablinks" onclick="">sign up</button>
                <button class="tablinks" onclick="">Customer reviews</button>
           
            <div class="tab-2">
                <button class="tablinks" onclick="">Why choose us</button>
                <button class="tablinks" onclick="">Meet the team</button>
                <button class="tablinks" onclick="">Boohoo</button>
            </div>
            </div>
            <h3><strong>Let us help your business grow!</strong></h3>
            </div>
        </header>
    );
};

export default Header;