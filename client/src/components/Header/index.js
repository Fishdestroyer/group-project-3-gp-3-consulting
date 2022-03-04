import React from 'react';

const Header = () => {
    return (
        //<header className="bg-secondary mb-4 py-2 flex-row align-center">
        <header>
            <div className="container flex-row justify-space-between-lg justify-center align-center">
            <h1 ><strong><center>COW Money Making</center></strong></h1>
            
            <nav class="light-blue lighten-1 " role="navigation">
            <div class="nav-wrapper container flex-wrap"><a id="logo-container" href="#" class="brand-logo">COW</a>
      <ul class="right hide-on-med-and-down" >
        <li><a href="../../Signup">Sign Up Here</a></li>
        <li><a href="../../Login">Log in to your account</a></li>
        <li><a href="#">Customer Reviews</a></li>
        <li><a href="../../Aboutus">About Us</a></li>
  
      </ul>
      <ul id="nav-mobile" class="sidenav">
        <li><a href="#../../Signup">Schedule A Consulation</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Customer Reviews</a></li>
        <li><a href="#">About Us</a></li>   </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger drop-down"><i class="material-icons">menu</i></a>
    </div>
  </nav>
            </div>
            </header>
       // </header>
        
    );
};

export default Header;