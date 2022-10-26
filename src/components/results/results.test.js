import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Results from'./';

describe('Results Component', () => {
 it('can renders data props as expected', () => {

  let data = {
    banana: "banana"
  }
  render(<Results data={data} />);
  let pre = screen.getByTestId('results-pre');

  expect(pre).toHaveTextContent('banana');
 });

 it('renders no data as expected', () => {

  let data = {
    banana: "banana"
  }
  render(<Results />);
  let pre = screen.getByTestId('results-pre');

  expect(pre).toHaveTextContent('');
 });

});