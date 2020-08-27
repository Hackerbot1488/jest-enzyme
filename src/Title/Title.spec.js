import React from 'react'
const { shallow } = require("enzyme");
const { default: Title } = require("./Title");

describe('Title component', () => {
  it('should render Title component with props', () => {
    const component = shallow(<Title title="lalalalla" />)
    expect(component).toMatchSnapshot()
  });
  it('should render Title component without props', () => {
    const component = shallow(<Title />)
    expect(component).toMatchSnapshot()
  });
});
