import { Box, Typography, Sheet, Link } from "@mui/joy";
import ModeToggle from "./modeToggle";
import {
    navbarContainerStyles,
    brandBoxStyles,
    brandTextStyles,
    brandImageStyles,
} from "../styles/navbarStyles";
import { Link as RouterLink } from 'react-router';
import Logo from "../assets/broomstick.png";
import BackBtn from "./backbtn";

const Navbar = () => {
    return (
        <Sheet variant="solid" sx={navbarContainerStyles} >
            <BackBtn />
            <Box sx={brandBoxStyles}>
                <Link component={RouterLink} to="/" level="h1" sx={brandTextStyles}>
                    <img 
                        src={Logo} 
                        alt="logo" 
                        style={{
                            width: 'auto',
                            height: '2rem',
                            maxWidth: '100%',
                            objectFit: 'contain'
                        }} 
                    />
                    &nbsp;&nbsp;&nbsp;Magical Companion
                </Link>
            </Box>
            <ModeToggle />
        </Sheet>
    );
};

export default Navbar;
