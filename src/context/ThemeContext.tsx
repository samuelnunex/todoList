import React, { createContext, useState, useContext } from "react";

// Define os valores do tema
const LightTheme = {
    name: "light",
    background: "#FFFFFF",
    text: "#000000",
    inputBackground: "#F1F1F1",
    buttonBackground: "#4CAF50",
};

const DarkTheme = {
    name: "dark",
    background: "#121212",
    text: "#FFFFFF",
    inputBackground: "#1E1E1E",
    buttonBackground: "#4CAF50",
};

// Tipo para o contexto
type ThemeContextType = {
    theme: typeof LightTheme; // Tema atual
    toggleTheme: () => void; // Função para alternar o tema
};

// Contexto do Tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider do Tema
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    // Alternar entre os temas
    const toggleTheme = () => {
        setIsDark((prevState) => !prevState);
    };

    // Seleciona o tema atual
    const theme = isDark ? DarkTheme : LightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook para usar o contexto
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme deve ser usado dentro do ThemeProvider");
    return context;
};