import React, { useEffect } from "react";

const Car = ({ color }) => {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("Function based car has mounted");
    console.log("color", color);
  }, []);

  return (
    <div style={{ marginBottom: "1rem" }}>Hi, I am a {color} Car!</div>
  );
};

export default Car;
