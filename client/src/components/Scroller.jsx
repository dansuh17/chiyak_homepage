import React, { Component } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import './Scroller.css';

// refer to documents of react-scroll github readme.
class Scroller extends Component {
  static componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  constructor(props) {
    super(props);

    // height offset - should be equal to height_header + height_scroll_header
    this.state = {
      offsetHeight: -100,
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (...args) => {
      console.log('begin', args);  // eslint-disable-line no-console
    });

    Events.scrollEvent.register('end', (...args) => {
      console.log('end', args);  // eslint-disable-line no-console
    });

    scrollSpy.update();
  }

  render() {
    return (
      <div>
        <nav className="scrollnav">
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="test1"
            spy
            smooth
            duration={550}
            offset={this.state.offsetHeight}
          >
            Test 1
          </Link>
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="test2"
            spy
            smooth
            duration={500}
            offset={this.state.offsetHeight}
          >
            Test 2
          </Link>
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="test3"
            spy
            smooth
            duration={500}
            offset={this.state.offsetHeight}
          >
            Test 3
          </Link>
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="test4"
            spy
            smooth
            duration={500}
            offset={this.state.offsetHeight}
          >
            Test 4
          </Link>
        </nav>

        <Element name="test1" className="element" >
          test 1
        </Element>
        <Element name="test2" className="element">
          test 2
        </Element>
        <Element name="test3" className="element">
          test 3
        </Element>
        <Element name="test4" className="element">
          test 4
        </Element>
      </div>
    );
  }
}

export default Scroller;

