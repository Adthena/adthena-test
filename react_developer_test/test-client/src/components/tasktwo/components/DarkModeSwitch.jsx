import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const DarkModeSwitch = () => {
    const { mode, toggleMode } = useContext(ThemeContext);
    return (<button className="toggle-mode"
        onClick={e => {
            debugger;
            toggleMode(
                mode === 'dark'
                    ? 'light'
                    : 'dark'
            )
        }
        }
    >
        Toggle Dark Mode
        </button>
    )

}
export default DarkModeSwitch;