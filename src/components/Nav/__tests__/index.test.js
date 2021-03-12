import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';
const categories = [
  { name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

//cleanup statement 
afterEach(cleanup);


describe('Nav component', () => {
    //baseline test 
    it('renders', () => {
        render(<Nav
          categories={categories}
          setCurrentcategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
           />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
          categories={categories}
          setCurrentcategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
           />);
        //assert value comparison 
        expect(asFragment()).toMatchSnapshot();
    })
})

//test for emoji visibility 
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav 
      categories={categories}
      setCurrentcategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
  })  

  //test for links visibility 
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav 
        categories={categories}
        setCurrentcategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })
  