import {createContext, useContext} from "react";
import React from "react";

const supportedThemes = {
    light: 'light',
    dark: 'dark',
}
const defaultTheme = 'dark'
const themeStorageKey = 'color-theme';
const ThemeContext = createContext({});


function getLocalStorageTheme() {
    let theme = localStorage.getItem(themeStorageKey);

    if (!theme) {
        localStorage.setItem(themeStorageKey, defaultTheme);
        theme = defaultTheme;
    }

    return theme
}


function setLocalStorageTheme(theme) {
    localStorage.setItem(themeStorageKey, theme !== undefined ? theme : defaultTheme);
}


function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme');
}


function setCurrentTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}


function getTheme() {
    let theme = getCurrentTheme()

    if (!theme) {
        theme = getLocalStorageTheme()
    }

    return theme
}


function setTheme(theme) {
    setCurrentTheme(theme)
    setLocalStorageTheme(theme)
}


function getNextTheme(currentTheme) {
    const themeKeys = Object.keys(supportedThemes);

    const currentIndex = themeKeys.indexOf(currentTheme);
    const nextIndex = currentIndex === (themeKeys.length - 1) ? 0 : (currentIndex + 1);

    return themeKeys[nextIndex];
}


class ThemeContextProvider extends React.Component {
    setTheme(theme) {
        setTheme(theme);
        this.forceUpdate()
    }

    toggleTheme() {
        let newTheme = getNextTheme(getTheme())
        this.setTheme(newTheme);
    }

    getContextValue() {
        return {
            getTheme: getTheme,
            setTheme: (theme) => this.setTheme(theme),
            toggleTheme: () => this.toggleTheme(),
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={this.getContextValue()}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}


function WithThemeContextWrapper(ViewComponent) {
    function Wrapper(props) {
        let {getTheme, setTheme, toggleTheme} = useContext(ThemeContext);

        return <ViewComponent {...{...props, getTheme, setTheme, toggleTheme}}/>
    }

    return Wrapper
}


document.documentElement.setAttribute('data-theme', getTheme());


export {
    supportedThemes,
    defaultTheme,
    themeStorageKey,
    ThemeContext,
    getLocalStorageTheme,
    setLocalStorageTheme,
    getCurrentTheme,
    setCurrentTheme,
    getTheme,
    getNextTheme,
    WithThemeContextWrapper,
    ThemeContextProvider
}
