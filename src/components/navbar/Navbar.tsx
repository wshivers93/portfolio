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
  
    return (
        <AppBar position="static" className='bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-50'>
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
                        <MenuItem>
                            <Link href='/'>
                                <a onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Home</Typography>
                                </a>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link href='/aboutme'>
                                <a onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">About Me</Typography>
                                </a>
                            </Link>
                        </MenuItem>
                        
                        </Menu>
                        <Switch
                            onChange={() => theme === 'dark' ? dispatch(light()) : dispatch(dark())}
                            inputProps={{ 'aria-label': 'controlled' }}
                            defaultChecked 
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link href='/'>
                            <a onClick={handleCloseNavMenu} className='mx-5 my-auto'>Home</a>
                        </Link>
                        <Link href='/aboutme'>
                            <a onClick={handleCloseNavMenu} className='mx-5 my-auto'>About Me</a>
                        </Link>

                        <Tooltip 
                            title={theme === 'dark' ? 'Lumos' : 'Nox'} 
                            placement='bottom' 
                            followCursor>
                            <Switch
                                className='ml-auto'
                                sx={{
                                    '& .MuiSwitch-switchBase': {
                                        color: '#EC4899'
                                    },
                                    '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                                        backgroundColor: '#94A3B8'
                                    },
                                    '& .MuiSwitch-switchBase.Mui-checked': {
                                        color: '#22D3EE'
                                    },
                                    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                        backgroundColor: '#1976d2'
                                    }
                                }}
                                onChange={() => theme === 'dark' ? dispatch(light()) : dispatch(dark())}
                                inputProps={{ 'aria-label': 'controlled' }}
                                defaultChecked 
                            />
                        </Tooltip>

                        <a href='https://github.com' className='ml-5 my-auto text-2xl text-pink-500 dark:text-cyan-400'>
                         <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>

                        <a href='https://linkedin.com' className='ml-5 my-auto text-2xl text-pink-500 dark:text-cyan-400'>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        </a>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
    };

export default Navbar