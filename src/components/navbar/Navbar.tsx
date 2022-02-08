import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Switch from '@mui/material/Switch'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import {
    light,
    dark,
    selectTheme
} from './navThemeSlice'

function Navbar() {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // TODO: use MUI AppBar component?
    
    // return (
    //     <header className={styles['site-header']}>
    //         <MenuRoundedIcon fontSize='large' />

    //         <nav className={styles.navbar}>
    //             <ul>
    //                 <li>
    //                     <Link href='/'>
    //                         Home
    //                     </Link>
    //                 </li>
    //                 <li>
    //                     <Link href='/aboutme'>
    //                         About Me
    //                     </Link>
    //                 </li>
    //             </ul>
    //         </nav>

    //         <div className={styles['theme-toggle']} onClick={() => theme === 'dark' ? dispatch(light()) : dispatch(dark())}>
    //             Toggle Theme
    //         </div>

    //         <div className={styles['social-links']}>
    //             <a href='https://github.com'>
    //                 <FontAwesomeIcon icon={['fab', 'github']} />
    //             </a>

    //             <a href='https://linkedin.com'>
    //                 <FontAwesomeIcon icon={['fab', 'linkedin']} />
    //             </a>
    //         </div>
    //     </header>
    // )
  
    return (
        <AppBar position="static" sx={{bgcolor: "inherit"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent: 'space-between', alignItems: 'center' }}>
                        <IconButton
                        size="large"
                        aria-label="Mobile Menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color={theme === 'dark' ? "inherit" : "default"}
                        >
                        { anchorElNav ? <CloseIcon fontSize='large' /> : <MenuRoundedIcon fontSize='large' /> }
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        <Link href='/'>
                            <a onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Home</Typography>
                            </a>
                        </Link>
                        <Link href='/aboutme'>
                            <a onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">About Me</Typography>
                            </a>
                        </Link>
                        
                        </Menu>
                        <Switch
                            onChange={() => theme === 'dark' ? dispatch(light()) : dispatch(dark())}
                            inputProps={{ 'aria-label': 'controlled' }}
                            defaultChecked 
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link href='/'>
                            <a onClick={handleCloseNavMenu}>Home</a>
                        </Link>
                        <Link href='/aboutme'>
                            <a onClick={handleCloseNavMenu}>About Me</a>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
    };

export default Navbar