import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { LightbulbOutlined as Lightbulb, ArchiveOutlined as Archive, DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        { id: 2, name: 'Archive', icon: <Archive />, route: '/archive' },
        { id: 3, name: 'Trash', icon: <Trash />, route: '/trash' }
    ]

    return (
        
        <List>
            {
                navList.map(list => (
                    <ListItemButton key={list.id} >
                        <NavLink to={list.route} style={{ textDecoration:'none', color:'inherit', display:'flex' }}>
                            <ListItemIcon style={{alignItems:'center'}}>{list.icon}</ListItemIcon>
                            <ListItemText style={{paddingTop:'3.5px', marginLeft:'-7px'}}>{list.name}</ListItemText>
                        </NavLink>
                    </ListItemButton>
                ))
            }
        </List>
    )
}

export default NavList;
