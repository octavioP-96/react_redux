import { Box, Typography, TextField, Button, Link, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FormEventHandler } from 'react';

const styleBox = { backgroundColor: '#22897fc2', height: 200, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }
const styleTypo = { padding: 2, fontFamily: '"Lora", sans-serif' }
const sizeGrid = { xs: 12 , md: 6 }
const styleGrid = {boxShadow:'2px 4px 9px -5px'}
interface propsLogin {
    handleSubmit:FormEventHandler
}
export const LoginForm = (props:propsLogin) => {
    return (
        <Grid container sx={{ height: '100vh' }}>

            {/* Columna izquierda: Imágenes y texto */}
            <Grid size={{ xs: 12, md: 7 }} sx={{ backgroundColor: '#466079', padding: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container spacing={1} sx={{ backgroundColor: '#466079', paddingY: 5, borderRadius: '10px' }}>
                    <Grid size={sizeGrid} sx={styleGrid}>
                        <Box sx={{ overflow: "hidden", /* backgroundImage: `url("./images/care1.png")`, backgroundSize:'cover' */backgroundColor: "gray", height: 200, borderRadius: 2 }} >
                            <img src='./images/care1.png' style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid size={sizeGrid} sx={styleGrid}>
                        <Box sx={styleBox}>
                            <Typography variant="h5" color="white" sx={styleTypo}>
                                Sonríe con confianza
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={sizeGrid} sx={styleGrid}>
                        <Box sx={styleBox}>
                            <Typography variant="h5" color="white" sx={styleTypo}>
                                Salud bucal, salud total
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={sizeGrid} sx={styleGrid}>
                        <Box sx={{ overflow: "hidden", /* backgroundImage: `url("./images/care1.png")`, backgroundSize:'cover' */backgroundColor: "gray", height: 200, borderRadius: 2 }} >
                            <img src='./images/care2.png' style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid size={sizeGrid} sx={styleGrid}>
                        <Box sx={{ overflow: "hidden", /* backgroundImage: `url("./images/care1.png")`, backgroundSize:'cover' */backgroundColor: "gray", height: 200, borderRadius: 2 }} >
                            <img src='./images/care3.jpg' style={{ width: "100%" }} />
                        </Box>
                    </Grid>
                    <Grid size={sizeGrid} sx={styleGrid}>
                        <Box sx={{ backgroundColor: '#22897fc2', height: 200, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography variant="h5" color="white" sx={styleTypo}>
                            Cuidado dental, vida saludable
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            {/* Columna derecha: Formulario de login */}
            <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ width: '80%', maxWidth: 400, padding: 3 }}>
                    <form onSubmit={props.handleSubmit}>
                        <Typography variant="h5" sx={{ mb: 2 }}>
                            <strong>Bienvenido</strong> de nuevo!
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 4 }}>
                            Ingresa a tu plataforma para concer las nuevas actualizaciones del trabajo
                        </Typography>

                        <TextField
                            label="Email Address"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            type="password"
                        />
                        {/* <Link href="#" variant="body2" sx={{ display: 'block', textAlign: 'right', mt: 1 }}>
                            Forgot the password?
                        </Link> */}

                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                            type='submit'
                        >
                            Login
                        </Button>
                        <Divider>Bienvenido</Divider>
                    </form>

                </Box>
            </Grid>
        </Grid>
    )
}

