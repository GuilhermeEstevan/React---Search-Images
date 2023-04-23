import { useEffect } from "react";
import { useState } from "react";
import { useContext, createContext } from "react";

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches;

    return prefersDarkMode
}

const AppContext = createContext()

export const AppProvider = ({ children }) => {

    // Dark Theme
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
    const toggleDarkTheme = () => {
        const newDarkTheme = setIsDarkTheme(!isDarkTheme)
        return newDarkTheme
    }

    useEffect(() => {
        const body = document.querySelector('body')
        body.classList.toggle('dark-theme', isDarkTheme)
    }, [isDarkTheme])


    // 

    const [searchData, setSearchData] = useState('Dog')


    return (
        <AppContext.Provider value={{
            isDarkTheme,
            toggleDarkTheme,
            searchData,
            setSearchData
        }}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => useContext(AppContext)