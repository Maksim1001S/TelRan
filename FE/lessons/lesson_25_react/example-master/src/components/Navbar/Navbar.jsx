import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Contact',
      link: '/contact'
    },
    {
      title: 'Search',
      link: '/search'
    },
    {
      title: 'Cart',
      link: '/cart'
    }
  ]
  return (
    <div className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <div className="mainNavigation">
       {
        links.map(el => <Link to={el.title}>{el.title}</Link>)
       }
      </div>
    </div>
  );
};

export default Navbar;
