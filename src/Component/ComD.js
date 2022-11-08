import React from "react";
import { MyAddress } from "../SiteProvider";

const ComD = () => {
  const {fname, lname} = MyAddress();
  return (
    <>
      <h1>
        My Name is:
        {fname}
        {lname}
      </h1>
    </>
  );
};

export default ComD;
