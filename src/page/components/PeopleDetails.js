import React from "react";

const PeopleDetails = ({ details }) => {
  return <div>{`${details[0]} : ${details[1]}`}</div>;
};

export default PeopleDetails;
