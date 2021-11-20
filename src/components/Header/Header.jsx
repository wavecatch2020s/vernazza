import React from "react";
import CartButton from "./CartButton";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <h1 onClick={scrollToTop}>Vernazza</h1>
      <CartButton />
    </header>
  );
};

export default Header;
