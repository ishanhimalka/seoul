import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LOGO from '../../img/logo.jpeg';
import {PrimaryButton, TextButton} from "../Components/Button/index";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [{name: 'Home', nav: '/'}, {name: 'About', nav: '/about'}, {
    name: 'Hotel',
    nav: '/hotel'
}, {name: 'Courses', nav: '/courses'}, {name: 'Contact', nav: '/contact'}]

const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>

            <Typography style={{backgroundColor: 'black'}} variant="h6" sx={{my: 2}}>
                <img src={LOGO} style={{width: '80px'}} alt={'logo'}/>
            </Typography>
            <Divider/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton sx={{textAlign: 'center'}}>
                            <ListItemText primary={item.name} onClick={() => {
                                navigate(item.nav)
                            }}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar component="nav" style={{backgroundColor: 'black'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img src={LOGO} style={{width: '80px'}} alt={'logo'}/>
                    <Typography  sx={{display: {xs: 'none', sm: 'block'}}}
                        variant="h4"
                        noWrap
                        component="a"
                        href="/"
                        style={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        SEOUL
                    </Typography>
                    <Typography
                        variant="h4"
                        noWrap
                        component="a"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                        href="/"
                        style={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'red',
                            textDecoration: 'none',
                        }}
                    >
                        HOTEL
                    </Typography>

                    <Typography
                        variant="h6"
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'block', sm: 'block'}}}
                    >
                    </Typography>
                    <Box sx={{display: {xs: 'none', sm: 'block'}}}>
                        {navItems.map((item) => (
                            <TextButton key={item.name} onClick={() => {
                                navigate(item.nav)
                            }} children={item.name}/>
                        ))}
                    </Box>
                    {location.pathname === '/courses' ? <PrimaryButton onPress={() => {
                        navigate('/enroll')
                    }} children={'Enroll now'}/> : <PrimaryButton onPress={() => {
                        navigate('/booking')
                    }} children={'Book now'}/>}
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
            </Box>
        </Box>)
}

export default Header;