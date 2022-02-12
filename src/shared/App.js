import React from 'react';
import { Route } from 'react-router-dom';
import PostList from '../pages/PostList'
import './App.css';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import PostDetail from "./pages/PostDetail";

import Header from '../components/Header';
// import PostWrite from './pages/postWrite';
// import {Grid, Button} from "./elements";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
// import {useDispatch} from "react-redux";
// import {actionCreators as userActions} from "./redux/modules/user";

function App() {
  // const dispatch = useDispatch();


  // React.useEffect(() => {
  
  //   if(is_session){
  //     dispatch(userActions.loginCheckFB());
  //   }
  // }, []);

  return (
    <React.Fragment>
       {/* <Grid> */}
      <Header></Header>
      <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          {/* <Route path="/login" exact component={Login} />
          <Route path="/Register" exact component={Register}/>
          <Route path="/addpost" exact component={PostWrite}/>
          <Route path="/getpost/:postid" exact component={PostDetail}/> */}
          {/* 수정을 할때는 write id값이 필요하다 */}
        </ConnectedRouter>
      {/* </Grid> */}
      {/* <Permit>
        <Button is_float text="+" _onClick={() => {history.push('/write');}}></Button>
      </Permit> */}
    </React.Fragment>
  );
}

export default App;
