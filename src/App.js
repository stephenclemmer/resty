import React, {useState, useEffect} from 'react';
import './app.scss';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    console.log('This is a hook called useEffect');
  })

  const callApi = async (url, method) => {

    const formData = await axios ({
      method: method,
      url: url, 
    })

    let params = {
      url,
      method,
    }

    setData(formData.data.results);
    setRequestParams(params);
    setHeaders(formData.headers); 
  }


    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} headers={headers} />
        <Footer />
      </>
    );

}

export default App;
