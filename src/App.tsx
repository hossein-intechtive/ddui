import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

let theme = createMuiTheme({
    palette: {
        type: "dark"
    }
});
theme = responsiveFontSizes(theme);

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography style={{ marginTop: 50 }}>Text should be white, background should be dark</Typography>
            <AppBar color="inherit">
                <Typography variant="h6">App bar background should be dark!</Typography>
            </AppBar>
        </ThemeProvider>
    );
};

export default App;
