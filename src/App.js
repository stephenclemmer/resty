import React, {useState} from 'react';
import './app.scss';
import axios from 'axios';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});


  const callApi = async (url, method) => {

    const formData = await axios ({
      method: method || 'GET',
      url: url, 
    })

    setData(formData.data.results);
    setRequestParams({requestParams}); 
  }

    return (
      <>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </>
    );

}

export default App;
