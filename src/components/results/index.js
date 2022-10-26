import './results.scss';

const Results = (props) => {

  return (
    <section>
      <pre data-testid="results-pre">{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
    </section>
  )
}

export default Results;
