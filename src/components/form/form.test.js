import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from'./';

describe('Form Component', () => {
  it('calls the handleApi function', () => {
 
   let handleApiCall = jest.fn();
   render(<Form handleApiCall={handleApiCall} />)
   let button = screen.getByText('Submit');
   fireEvent.click(button);
    expect(handleApiCall).toHaveBeenCalled();
  });
 
 });