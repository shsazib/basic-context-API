import React, { createContext, useContext } from "react";
import Api from './api'

const Data = createContext();

const SiteProvider = ({children}) => {
    const fullData = Api;
  return (
    <>
      <Data.Provider value={fullData}>
        {children}
      </Data.Provider>
    </>
  );
};



export const MyAddress = () =>{
    return useContext(Data)
} 


export default SiteProvider;
export {Data}
