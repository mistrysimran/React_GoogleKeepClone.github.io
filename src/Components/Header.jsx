import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const Head = styled(AppBar)`
    z-index: 1201;
    background: #fff;
    height: 70px;
    // width: 100%;
    box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left: 15px;
    margin-top: 4.5px
`

const Header = ({ open, handleDrawer }) => {
    
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png'
    
    return (
        <Head open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight: 1 }}
                >
                    <MenuIcon />
                </IconButton>

                <img src={logo} alt="logo" width={30} />

                <Heading>Keep</Heading>
            </Toolbar>
        </Head>
    )
}

export default Header;