import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

export default function MainAppBar(props: {onLogout: () => void}){
    const onLogout = props.onLogout
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>App bar</Typography>
                <Button color="inherit" onClick={() => onLogout()}>Logout</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}