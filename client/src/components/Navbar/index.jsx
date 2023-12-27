// Navbar.js
import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.header`
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

`;
const NavbarContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 80%;
`;

const NavbarLink = styled.button`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  display: inline-block;
  background: white;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0);
  &:hover {
    color: #007bff;
  }
`;

const Navbar = ({handleOpen, setOpenCart, openCart}) => {
  return (
    <StyledNavbar>
      <NavbarContainer>
        <div>Logo</div>
        <div>
          <NavbarLink onClick={handleOpen}>Add Product</NavbarLink>
          <NavbarLink onClick={()=>setOpenCart(!openCart)}>
            <i class="bi-cart-fill me-1"></i> Cart
          </NavbarLink>
        </div>
      </NavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
