import React from 'react'
import Button from './Button'

describe('Button component', () => {
  it('should render button component', () => {
    const component = shallow(<Button onClick={() => { }} />)
    expect(component).toMatchSnapshot()
  });

  it('should call onClick method', () => {
    const mockCallBAck = jest.fn()
    const component = shallow(<Button onClick={mockCallBAck} />)
    expect(mockCallBAck.mock.calls.length).toBe(0)
    component.find(".btn").simulate("click")
    expect(mockCallBAck.mock.calls.length).toEqual(1)
  });

});
