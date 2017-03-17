import React, { Component } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import Products from './Products';
import Community from './Community';
import OurCompany from './OurCompany';
import Home from './Home';
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
            to="home"
            spy
            smooth
            duration={550}
            offset={this.state.offsetHeight}
          >
            HOME
          </Link>
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="products"
            spy
            smooth
            duration={500}
            offset={this.state.offsetHeight}
          >
            PRODUCT
          </Link>
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="community"
            spy
            smooth
            duration={500}
            offset={this.state.offsetHeight}
          >
            COMMUNITY
          </Link>
          <Link
            activeClass="active"
            className="scrollnav-item"
            to="ourcompany"
            spy
            smooth
            duration={500}
            offset={this.state.offsetHeight}
          >
            DR.CHOI
          </Link>
        </nav>

        <Element name="home" className="element">
          <Home />
        </Element>
        <Element name="products" className="element">
          <Products />
        </Element>
        <Element name="community" className="element">
          <Community />
        </Element>
        <Element name="ourcompany" className="element">
          <OurCompany />
        </Element>
      </div>
    );
  }
}

export default Scroller;
