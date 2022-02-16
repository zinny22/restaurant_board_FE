import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector} from "react-redux";
import { history } from "../redux/configureStore";

const settings = ['수정', '삭제'];

const ResponsiveAppBar = (props) => {
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="수정 및 삭제">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MoreIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}>
                
                <MenuItem key={settings[0]} onClick={()=>{history.push(`/editpost/${props.post_id}`)}}>
                  <Typography textAlign="center">수정</Typography>
                </MenuItem>
                <MenuItem key={settings[1]} onClick={()=>{dispatch(postActions.deletePostFB(props.post_id))}}>
                  <Typography textAlign="center">삭제</Typography>
                </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
     

  );
};
export default ResponsiveAppBar;