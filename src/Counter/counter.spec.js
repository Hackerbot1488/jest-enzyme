import React from 'react'
import CounterButton from './Counter'
const setUp = () => shallow(<CounterButton />)

describe('Counter component', () => {
  let component
  let instance
  beforeEach(() => {
    component = setUp()
    instance = component.instance()
  })
  it('should render Counter component', () => {
    expect(component).toMatchSnapshot()
  });
  describe('Counter handlers', () => {
    it('should change count value to plus one', () => {
      const btn = component.find('.plusOneBtn')
      btn.simulate('click')
      // expect(component).toMatchSnapshot()
      expect(component.state().count).toBe(1)
    });
    it('should change count value to 10', () => {
      const btn = component.find('.resetBtn')
      btn.simulate('click')
      // expect(component).toMatchSnapshot()
      expect(component.state().count).toBe(10)
    });
    it('should change count value to pointed one', () => {
      instance.handleReset(20)
      // expect(component).toMatchSnapshot()
      expect(component.state().count).toBe(20)
    });
  });
});
