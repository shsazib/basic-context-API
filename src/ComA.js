import React from "react";
import { MyAddress } from "./SiteProvider";

const ComA = () => {
const {address} = MyAddress()

  return (
    <div>
      <p>My Address: {address}</p>
    </div>
  );
};

export default ComA;
