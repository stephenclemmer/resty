import './results.scss';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css'

const Results = (props) => {

  return (
    <section data-testid="headers">
      {props.headers ? 
      (
        <>
          <span className="headers"> Headers:
            <JSONPretty data={props.headers}/>
            <JSONPretty data={props.data}/>
          </span>
        </>
      ) : 
      (<span>
        Thinking.......
      </span>)
    }
      {/* <pre data-testid2="results-pre">{props.headers ? JSON.stringify(props.headers, undefined, 2) : null}</pre>
      <pre data-testid="results-pre">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
    </section>
  )
}

export default Results;
