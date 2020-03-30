import React from 'react';
import Component from '../../../components/Header';

describe('Tag', () => {
  it('Should match snapshot', () => {
    const props = {
      handleSearch: jest.fn(),
    }
    const component = shallow(<Component {...props} />);
    expect(escapeSnapshot(component)).toMatchSnapshot();
  });

  it('Should set search terms and call handleSearch when the search icon is clicked', () => {
    const props = {
      handleSearch: jest.fn(),
    }
    const component = shallow(<Component {...props} />);
    const instance = component.instance();
    instance.searchInput = {
      value: '__TEST__',
    };
    const event = {
      type: 'click',
      persist: jest.fn(),
    }
    instance.setSearchTerms(event);
    expect(component.state().searchTerms).toEqual('__TEST__');
    expect(props.handleSearch).toHaveBeenCalled();
    expect(props.handleSearch).toHaveBeenCalledTimes(1);
    expect(props.handleSearch).toHaveBeenCalledWith('__TEST__');
  });

  it('Should set search terms and call handleSearch when enter key is pressed', () => {
    const props = {
      handleSearch: jest.fn(),
    }
    const component = shallow(<Component {...props} />);
    const instance = component.instance();
    instance.searchInput = {
      value: '__TEST__',
    };
    const event = {
      type: 'keydown',
      keyCode: 13,
      persist: jest.fn(),
    }
    instance.setSearchTerms(event);
    expect(component.state().searchTerms).toEqual('__TEST__');
    expect(props.handleSearch).toHaveBeenCalled();
    expect(props.handleSearch).toHaveBeenCalledTimes(1);
    expect(props.handleSearch).toHaveBeenCalledWith('__TEST__');
  });

  it('Should set search terms and not call handleSearch when enter any key (not enter) is pressed', () => {
    const props = {
      handleSearch: jest.fn(),
    }
    const component = shallow(<Component {...props} />);
    const instance = component.instance();
    instance.searchInput = {
      value: '__TEST__',
    };
    const event = {
      type: 'keydown',
      keyCode: 9,
      persist: jest.fn(),
    }
    instance.setSearchTerms(event);
    expect(component.state().searchTerms).toEqual('__TEST__');
    expect(props.handleSearch).not.toHaveBeenCalled();
    expect(props.handleSearch).toHaveBeenCalledTimes(0);
  });
});
