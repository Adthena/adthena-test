import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const DarkModeSwitch = () => {
    const { mode, toggleMode } = useContext(ThemeContext);
    return (<button
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
        Toggle Mode
        </button>
    )

}
export default DarkModeSwitch;