import React,{useContext} from 'react';

const themes = {
    light: {
        foreground: "#992351",
        background: "#fff"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light ,themes.dark);

export default function Context() {
    
    
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button  style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}
