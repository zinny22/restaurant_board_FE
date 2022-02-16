import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";


const Header = () => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const is_local = localStorage.getItem("is_login") ? true : false;
  const user_nick = localStorage.getItem("user_nick")

  // console.log(user_nick) 
  React.useEffect(() => {
  
  }, [is_login]);
  //대괄호 변수가 바뀌면 함수를 실행해라!

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  if (is_local) {
    return (
      <AppBar style={{ background: "#f68843" }} position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography
              onClick={handleCloseNavMenu}
              variant="h5" //글자크기
              noWrap
              component="div"
              sx={{ flexGrow: 8, display: { xs: "none", md: "flex" },}}
            >
              🍰 맛있는거 4조 🍰
            </Typography>
          
           <Typography
              onClick={handleCloseNavMenu}
              variant="h6" //글자크기
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {user_nick}님 안녕하세요
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              🍰 맛있는거 4조 🍰
            </Typography>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              {/* md가 flex였다가 960 이하로 작아지면 none! xs 0px 이상부터는 flex가 적용! */}
              {/* flexGrow: 남은 여백을 비율만큼 채워준다 */}
              {/* 작아지면 나오는 메뉴 아이콘 */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    history.replace("/addpost");
                  }}
                >
                  <Typography textAlign="center">글쓰기</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleCloseNavMenu();
                    dispatch(userActions.logoutDB());
                    window.location.reload("/");
                  }}
                >
                  <Typography textAlign="center">로그아웃</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              <MyButton
                style={{ marginRight: "5px" }}
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/addpost");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                글쓰기
              </MyButton>

              <MyButton
                onClick={() => {
                  handleCloseNavMenu();
                  dispatch(userActions.logoutDB());
                  window.location.reload("/");
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                로그아웃
              </MyButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  //sx, 테마에 접근할 수 있는 커스텀 스타일을 정의
  //mr, marginRight
  //xs, extra-small: 0px or larger
  //sm, small: 600px or larger
  //md, medium: 960px or larger //960px 이하이면 없어짐
  //lg, large: 1280px or larger
  //xl, extra-large: 1920px or larger

  return (
    <AppBar style={{ background: "#f68843" }} position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            onClick={handleCloseNavMenu}
            variant="h5" //글자크기
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            🍰 맛있는거 4조 🍰
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            🍰 맛있는거 4조 🍰
          </Typography>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            {/* md가 flex였다가 960 이하로 작아지면 none! xs 0px 이상부터는 flex가 적용! */}
            {/* flexGrow: 남은 여백을 비율만큼 채워준다 */}
            {/* 작아지면 나오는 메뉴 아이콘 */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/login");
                }}
              >
                <Typography textAlign="center">로그인</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  history.push("/register");
                }}
              >
                <Typography textAlign="center">회원가입</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <MyButton
              style={{ marginRight: "5px" }}
              onClick={() => {
                handleCloseNavMenu();
                history.push("/login");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              로그인
            </MyButton>

            <MyButton
              onClick={() => {
                handleCloseNavMenu();
                history.push("/register");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              회원가입
            </MyButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const MyButton = styled(Button)`
  // background-color: white;
  // border: 0;
  // border-radius: 3px;
  // box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  // color: #f68843;
  // height: 45px;
`;

export default Header;
