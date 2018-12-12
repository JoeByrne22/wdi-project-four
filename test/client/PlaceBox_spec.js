/* global describe,it */

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlacesBox from '../../src/components/places/PlacesBox';

const testData =
  {
    name: 'Battersea Library',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Battersea_Library_08.JPG/1200px-Battersea_Library_08.JPG',
    openingHour: 9.00,
    closingHour: 20.00,
    postcode: 'SW11 1JB',
    location: { lat: 51.46403, lng: -0.16408 },
    comments: []
  };

describe('PlacesBox', () => {
  it('should show the correct place', done => {
    const component = shallow(<PlacesBox place={testData}/>);
    expect(component.find('image').props().src).to.eq(testData.image);
    done();
  });
});
