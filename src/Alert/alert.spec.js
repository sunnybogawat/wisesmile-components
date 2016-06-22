import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Alert from './Alert';

describe("<Alert />", function() {

  it("succefully mounts the component", function() {
    expect(mount(<Alert />).find('.alert').length).to.equal(1);
  });
});
