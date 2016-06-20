import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import About from '../src/About';

describe('<About />', () => {
  let wrapper;
  const name = "wisesmile-components";
  const version = "1.0";

  beforeEach(() => {
    wrapper = shallow(<About name={name} version={version}/>)
  });

  it('wraps the component in an about class', () => {
    expect(wrapper.find('.about'))
      .to.have.length(1);
  });

  it('wraps the name prop in an H2', () => {
    expect(wrapper.find('h2').first().text())
      .to.equal(name)
  });

});
