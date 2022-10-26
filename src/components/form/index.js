import React, {useState} from 'react';

import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');

  const handleSubmit = e => {
    e.preventDefault();
    let getUrl = e.target.url.value;
    props.handleApiCall(getUrl, method);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL:</span>
          <input name='url' type='text' />
          <button type="submit">Submit</button>
        </label>
        <label className="methods">
          <span id="get" onClick={() => setMethod('GET')} >GET</span>
          <span id="post" onClick={() => setMethod('POST')}>POST</span>
          <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
          <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
        </label>
      </form>
    </>
  )
}


export default Form;
