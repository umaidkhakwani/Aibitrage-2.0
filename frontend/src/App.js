import {
  Route,
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { useContext } from "react";
import Homepage from "./pages/homepage";
import Docs_page from "./pages/docs_page";
import Blog_page from "./pages/blog_page";
import Header_Function from "./header";
import Terms from "./pages/Terms";
import Cookie_policy from "./pages/cookie_policy";
import Privacy_policy from "./pages/privacy_policy";
import Not_found from "./pages/not_found";
import Report_bug from "./pages/report_bug";
import Main from "./pages/InApp/Main";
// import { XRPLClient } from "@nice-xrpl/react-xrpl";
// import { Web3ReactProvider } from "@web3-react/core";
// import { providers } from 'ethers';

const App = () => {
  // const getLibrary = (provider) => {
  //   const library = new providers.JsonRpcProvider(provider); // Updated for v5
  //   library.pollingInterval = 8000;
  //   return library;
  // };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {/* <Route index element = {<Homepage />}/> */}
        <Route index element={<Header_Function />} />
        <Route path="/docs" element={<Docs_page />} />
        <Route path="/blog" element={<Blog_page />} />
        <Route path="/terms-of-use" element={<Terms />} />
        <Route path="/cookie-policy" element={<Cookie_policy />} />
        <Route path="/privacy-policy" element={<Privacy_policy />} />
        <Route path="/Not_found" element={<Not_found />} />
        <Route path="/Report_bug" element={<Report_bug />} />
        <Route path="/app" element={<Main />} />
      </Route>
    )
  );

  return (
    <div>
      {/* <XRPLClient> */}
      {/* <Web3ReactProvider getLibrary={getLibrary}> */}
        <RouterProvider router={router} />
      {/* </Web3ReactProvider> */}
      {/* </XRPLClient> */}
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
