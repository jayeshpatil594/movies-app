import React from "react";
import Search from "../Search/Search";
import Cover from "../../assets/cover-image.jpg";
import { Container } from "react-bootstrap";

const Header = () => {
  const headerStyle = {
    backgroundImage: `url(${Cover})`,
    height: `250px`,
  };
  return (
    <Container style={headerStyle}>
      <div style={{ padding: "2rem" }}>
        <h4 style={{ color: "red" }}>
          <span style={{ fontWeight: "900" }}>netflix</span>roulette
        </h4>
        <Search />
      </div>
    </Container>
  );
};

export default Header;
