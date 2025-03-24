import React, { useState, useContext } from 'react';
const ThemeContext = React.createContext();
export const ThemeToggle = ({children}) => {
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const Container = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div style={{ 
            backgroundColor: theme === 'light' ? 'white' : 'black', 
            color: theme === 'light' ? 'black' : 'white'
        }}>
            <p>The current theme is <strong>{theme}</strong></p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    );
};
