import React, { Component } from 'react';
import { Link, Element, Events, scrollSpy } from 'react-scroll';
import './Scroller.css';

// refer to documents of react-scroll github readme.
class Scroller extends Component {
  static componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy
                    smooth
                    duration={500}
                  >
                    Test 1
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" className="test2" to="test2" spy smooth duration={500}>
                    Test 2
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" className="test3" to="test3" spy smooth duration={500}>
                    Test 3
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" className="test4" to="test4" spy smooth duration={500}>
                    Test 4
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test5"
                    to="test5"
                    spy
                    smooth
                    duration={500}
                    delay={1000}
                  >
                    Test 5 ( delay )
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test6"
                    to="anchor"
                    spy
                    smooth
                    duration={500}
                  >
                    Test 6 (anchor)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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

        <Element name="test5" className="element">
          test 5
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>
      </div>
    );
  }
}

export default Scroller;

