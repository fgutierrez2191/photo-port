// import React from 'react';

// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// //import the component we will be testing 
// import About from '..';

// //call the cleanup function using the aftereach global function 
// afterEach(cleanup);

// //use the describe function to declare the component we are testing 
// describe('About component', () => {
//     //first test
//     it('renders', () => {
//         render(<About />)
//     });

//     //second test 
//     it('matches snapshot Dom node structure', () => {
//         //render about
//     })
//     const { asFragment } = render(<About />);
//     expect(asFragment()).toMatchSnapshot();
// })

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });
  
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    
    expect(asFragment()).toMatchSnapshot();
  });
})