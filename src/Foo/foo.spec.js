import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from './Foo';

describe("<Foo />", function() {
  it("contains div named foo", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).to.equal(true);
  });

  it("succefully mounts the component", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });

});
