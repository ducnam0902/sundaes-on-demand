import React from "react";
import Col from "react-bootstrap/Col";
const ToppingOption = ({ name, imagePath }) => {
  return (
    <Col xs={12} sm={6} md={3} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`httpL//localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
    </Col>
  );
};

export default ToppingOption;
