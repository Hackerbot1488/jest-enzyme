import React from 'react'
import Input from '../Select/select';

describe('Input component', () => {
  it('should render input component', () => {
    const component = shallow(<Input />)
    expect(component).toMatchSnapshot()
  });
  /* it('should call onChange method', () => {
    const mockCallBAck = jest.fn()
    const component = shallow(<Input onChange={mockCallBAck} />)
    expect(mockCallBAck.mock.calls.length).toBe(0)
    component.find("input").simulate("change")
    expect(mockCallBAck.mock.calls.length).toEqual(1)
  }); */
  describe('defaultProps', () => {
    it('should use default onChange', () => {
      const result = Input.defaultProps.onChange;
      expect(result).toBe(undefined)
    });
    it('should use default onKeyPress', () => {
      const result = Input.defaultProps.onKeyPress;
      expect(result).toBe(undefined)
    });
  });
});
