import { Box, Button, Paper, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";

export default function LoginPage(){
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [canLogin, setCanLogin] = useState<boolean>(!!email && !!password);
    useEffect(() => {setCanLogin(!!email && !!password)},[email, password])
    return (
        <Box sx={{
                display: "flex",
                height: "100vh",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Paper 
                    elevation={8}
                    sx={{
                        padding: "24px"
                    }}
                    >
                <Stack spacing={2}>
                    <p>Iniciar sesión</p>
                    <TextField variant="outlined" label="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                    <TextField variant="outlined" label="Password" type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
                    <Stack direction="row" spacing={4}>
                        <Button variant="contained" disabled={!canLogin}>Login</Button>
                        <Button variant="outlined">Create account</Button>
                    </Stack>
                </Stack>
                </Paper>
        </Box>
    )
}