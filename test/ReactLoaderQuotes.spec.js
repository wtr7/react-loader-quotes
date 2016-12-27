import React from 'react';
import ReactLoaderQuotes from '../src/index';

import { mount } from 'enzyme';
import sinon from 'sinon';


describe('<ReactLoaderQuotes />', () => {

  let mountComponent;

  beforeAll(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning) });
  });

  afterAll(() => {
    jest.clearAllTimers();
    console.error.restore();
  });

  beforeEach(() => {
    mountComponent = mount(
      <ReactLoaderQuotes
        quotes={['How boring is waiting?', 'Luckily we\'re almost there', 'Or are we?', 'Finished', 'Almost', 'Now???']}
        loading={true}
      />
    );
  });

  it('quotes property should be required', (done) => {
    try {
      <ReactLoaderQuotes
        loading={true}
      />

      done(new Error('expected exception'));
    } catch (err) {
      expect(err);
      done();
    }
  });

  it('loading property should be required', (done) => {
    try {
      <ReactLoaderQuotes
        quotes={['How boring is waiting?', 'Luckily we\'re almost there', 'Or are we?', 'Finished', 'Almost', 'Now???']}
      />

      done(new Error('expected exception'));
    } catch (err) {
      expect(err);
      done();
    }
  });

  it('default random property should have correct value', () => {
    expect(mountComponent.props().random).toBe(false);
  });

  it('default speed property should have correct value', () => {
    expect(mountComponent.props().speed).toBe(1.5);
  });

  it('default backgroundColorLoader property should have correct value', () => {
    expect(mountComponent.props().backgroundColorLoader).toBe('yellow');
  });

  it('default backgroundColorQuotes property should have correct value', () => {
    expect(mountComponent.props().backgroundColorQuotes).toBe('black');
  });

  it('default backgroundColorBackground property should have correct value', () => {
    expect(mountComponent.props().backgroundColorBackground).toBe('black');
  });

  it('default opacityBackground property should have correct value', () => {
    expect(mountComponent.props().opacityBackground).toBe(0.5);
  });

  it('default fontSizeTitle property should have correct value', () => {
    expect(mountComponent.props().fontSizeTitle).toBe('18px');
  });

  it('default colorTitle property should have correct value', () => {
    expect(mountComponent.props().colorTitle).toBe('white');
  });

  it('default fontFamilyTitle property should have correct value', () => {
    expect(mountComponent.props().fontFamilyTitle).toBe('Arial');
  });

  it('random property should have correct value', () => {
    mountComponent.setProps({random: true});
    expect(mountComponent.props().random).toBe(true);
  });

  it('speed property should have correct value', () => {
    mountComponent.setProps({speed: 2});
    expect(mountComponent.props().speed).toBe(2);
  });

  it('backgroundColorLoader property should have correct value', () => {
    mountComponent.setProps({backgroundColorLoader: 'pink'});
    expect(mountComponent.props().backgroundColorLoader).toBe('pink');
  });

  it('backgroundColorQuotes property should have correct value', () => {
    mountComponent.setProps({backgroundColorQuotes: 'pink'});
    expect(mountComponent.props().backgroundColorQuotes).toBe('pink');
  });

  it('backgroundColorBackground property should have correct value', () => {
    mountComponent.setProps({backgroundColorBackground: 'pink'});
    expect(mountComponent.props().backgroundColorBackground).toBe('pink');
  });

  it('opacityBackground property should have correct value', () => {
    mountComponent.setProps({opacityBackground: 1});
    expect(mountComponent.props().opacityBackground).toBe(1);
  });

  it('fontSizeTitle property should have correct value', () => {
    mountComponent.setProps({fontSizeTitle: '10px'});
    expect(mountComponent.props().fontSizeTitle).toBe('10px');
  });

  it('colorTitle property should have correct value', () => {
    mountComponent.setProps({colorTitle: 'pink'});
    expect(mountComponent.props().colorTitle).toBe('pink');
  });

  it('fontFamilyTitle property should have correct value', () => {
    mountComponent.setProps({fontFamilyTitle: 'Comic Sans MS'});
    expect(mountComponent.props().fontFamilyTitle).toBe('Comic Sans MS');
  });

  it('should have correct amount of divs', () => {
    expect(mountComponent.find('div').length).toBe(4);
  });

  it('currentQuotesIndex should be 0', () => {
    expect(mountComponent.state().currentQuotesIndex).toBe(0);
  });

  it('should call setInterval with correct value in milliseconds', () => {
    jest.useFakeTimers();

    const component = mount(
      <ReactLoaderQuotes
        quotes={['How boring is waiting?', 'Luckily we\'re almost there', 'Or are we?', 'Finished', 'Almost', 'Now???']}
        loading={true}
      />
    );

    expect(setInterval.mock.calls.length).toBe(1);
    expect(setInterval.mock.calls[0][1]).toBe(1500);
  });

  it('should call setInterval with correct value in milliseconds when speed is edited', () => {
    jest.useFakeTimers();

    const component = mount(
      <ReactLoaderQuotes
        quotes={['How boring is waiting?', 'Luckily we\'re almost there', 'Or are we?', 'Finished', 'Almost', 'Now???']}
        loading={true}
        speed={2}
      />
    );

    expect(setInterval.mock.calls[setInterval.mock.calls.length - 1][1]).toBe(2000);
  });

  it('should start currentQuotesIndex at 0 and go to next quote after setInterval', () => {
    const component = mount(
      <ReactLoaderQuotes
        quotes={['How boring is waiting?', 'Luckily we\'re almost there', 'Or are we?', 'Finished', 'Almost', 'Now???']}
        loading={true}
      />
    );

    expect(component.state().currentQuotesIndex).toBe(0);
    jest.runOnlyPendingTimers();
    expect(component.state().currentQuotesIndex).toBe(1);
  });

  it('should start currentQuotesIndex at 0 and stay at 0 if only one quote', () => {
    const component = mount(
      <ReactLoaderQuotes
        quotes={['How boring is waiting?']}
        loading={true}
      />
    );

    expect(component.state().currentQuotesIndex).toBe(0);
    jest.runOnlyPendingTimers();
    expect(component.state().currentQuotesIndex).toBe(0);
  });

  it('should call Math.floor when random option is set to true', () => {
    Math.floor = jest.fn();
    Math.random = jest.fn();

    const component = mount(
      <ReactLoaderQuotes
        quotes={['How boring is waiting?', 'Luckily we\'re almost there', 'Or are we?', 'Finished', 'Almost', 'Now???']}
        loading={true}
        random={true}
      />
    );

    jest.runOnlyPendingTimers();
    expect(Math.random).toBeCalled();
    expect(Math.floor).toBeCalled();
  });

});
