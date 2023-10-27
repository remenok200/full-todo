import React, {useState, useEffect} from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import TodoPage from './pages/TodoPage';
import history from './BrowserHistory';
import './App.css';
import { connect } from 'react-redux';
import { authUserRequest } from './actions/actionCreator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  useEffect(() => {
    if(!props.user) {
      props.authUserRequest();
    }
  }, []);

  useEffect(() => {
    //const {notification: {notification}} = props;
    if(props.notification) {
      toast.info(props.notification.notification, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        });
    }
  }, [props.notification]);

  return (
    <HistoryRouter history={history}>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks/' element={<TodoPage />} />
      </Routes>
    </HistoryRouter>
  );
}

const mapStateToProps = ({user, notification}) => ({user, notification});

const mapDispatchToProps = {
  authUserRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
