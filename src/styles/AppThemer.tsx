/*
    src\AppThemer.tsx
        Themer file for App comp
    Author: AadilVarsh
    Github: https://github.com/AadilVarsh/website
    Twitter: https://twitter.com/aadilvarsh
    Date: 10 September 2021
*/

// PACKAGE IMPORTS
import { createTheme } from '@material-ui/core'
// LOCAL IMPORTS

// CONSTANTS

const colors = {
    primary: '#EFAAC4',
    secondary: '#6B717E'
}

// MAIN

const AppTheme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        }
    },
    typography: {
        fontFamily: "'Poppins', 'Open Sans'"
    }

})

export default AppTheme;
