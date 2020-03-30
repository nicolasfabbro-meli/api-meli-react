import React from 'react';
import Component from '../../../components/Tag';

describe('Tag', () => {
  const props = {
    children: '__TEST__',
    handleClick: jest.fn(),
    handleClose: jest.fn(),
  }

  it('Should match snapshot', () => {
    const component = shallow(<Component {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('Should call handleClick method', () => {
    const component = shallow(<Component {...props} />);
    component.find('.tag span').simulate('click');
    expect(props.handleClick).toHaveBeenCalled();
  });

  it('Should call handleClose method', () => {
    const component = shallow(<Component {...props} />);
    component.find('[name="close-outline"]').simulate('click');
    expect(props.handleClose).toHaveBeenCalled();
  });
});
