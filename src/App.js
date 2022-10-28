import React, { useEffect, useReducer } from 'react';
import './app.scss';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {

  const initialState = {
    data: null,
    requestParams: {},
    headers: null,
    history: [],
  };

  const stateSetter = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'SET_REQUEST_PARAMS':
        return { ...state, requestParams: action.payload };
      case 'SET_HISTORY':
        return { ...state, history: [...state.history, action.payload] };
      case 'SET_HEADERS':
        return { ...state, headers: action.payload };
      default: return state;
    }
  }

  
  const setData = (response) => {
    let action = {
      type: 'SET_DATA',
      payload: response,
    }
    dispatch(action);
  }
  
  const setHeaders = (headers) => {
    let action = {
      type: 'SET_HEADERS',
      payload: headers,
    }
    dispatch(action);
  }
  
  const setHistory = (history) => {
    let action = {
      type: 'SET_HISTORY',
      payload: history,
    }
    dispatch(action);
  }
  
  const [state, dispatch] = useReducer(stateSetter, initialState);
// ______________________________________________________

  const triggerApi = (formData) => {
    setRequestParams(formData);
  }

  const setRequestParams = (formData) => {
    let action = {
      type: 'SET_REQUEST_PARAMS',
      payload: formData,
    }
    dispatch(action);
  }

  useEffect(() => {
    const callApi = async () => {
      const response = await axios(state.requestParams);

      setData(response.data);
      setHeaders(response.headers);
      setHistory(state.requestParams);
    }

    callApi();

  }, [state.requestParams])

// ___________________________________________________

  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form handleApiCall={triggerApi} />
      <Results history={state.history} data={state.data} headers={state.headers} />
      <Footer />
    </>
  );

}

export default App;
