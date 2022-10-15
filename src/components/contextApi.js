import React, { useContext, useEffect, useState } from "react";

// api endpoint

//1. create context. watch out not usecontext  at the botton..

const AppContext = React.createContext();

// 2. create the provider.
//- always use the children in the middle.

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="hello">{children} </AppContext.Provider>;
};

// 3.- always and  not mandatory use a Global context so i can use in all  places.

// CREATE PERSONAL   HOOK.
//3.1 Here we can use the usecontext now... and grab the Appcontext into it.
export const GlobalContext = () => {
  return useContext(AppContext);
};

// 4. export the appcontext  and Appprovider

export { AppContext, AppProvider };
