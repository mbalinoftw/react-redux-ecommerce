import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-center">
      <span className="">developed by <Link to="https://github.com/mbalinoftw" target="_blank">mbalinoftw</Link> 😎</span>
    </footer>
  );
};

export default Footer;
