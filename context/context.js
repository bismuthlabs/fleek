'use client'
import React from "react";
import { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [sidemenu, setSidemenu] = useState(false)
    const showSidemenu = () => {
        setSidemenu(true)
    }
    const hideSidemenu = () => {
        setSidemenu(false)
    }
    return <AppContext.Provider value={{sidemenu, showSidemenu, hideSidemenu}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}