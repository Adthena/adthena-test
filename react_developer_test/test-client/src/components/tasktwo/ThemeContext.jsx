import { createContext } from 'React';
export const ThemeContext = createContext({
    mode: '',
    toggleMode: () => { },
});