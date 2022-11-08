import React from "react";
import SiteProvider from "./SiteProvider";
import ComD from './Component/ComD';
import ComA from './ComA';


function App() {
  return (
        <SiteProvider>
          <ComD />
          <ComA />
        </SiteProvider>
  );
}
export default App;
