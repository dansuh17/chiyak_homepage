import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import stores from '../stores';  // eslint-disable-line
import './Purchase.css';

// naver map api client id - 따로 신청해야함
const CLIENT_ID = 'pOhVvAhVKvbXx_wi9MzL';

class Purchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
    };
  }

  componentWillMount() {
    // this is how you create asynchronous script tag loads
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?clientId=${CLIENT_ID}`;
    script.async = true;

    document.body.appendChild(script);
  }

  componentDidMount() {
    // 잠시 eslint 해제 - 'naver' 오브젝트가 스크립트로 로드됨
    /* eslint-disable */
    console.log(stores);
    const map = new naver.maps.Map('naverMap', {
      center: new naver.maps.LatLng(37.562954, 126.941679),
      zoom: 10,
    });

    for (let i = 0; i < stores.length; i++) {
      // 연대 치대 예제
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(stores[i].lat, stores[i].lng),
        map: map,
      });

      const contentString = [
        '<div>',
        `<h4>${stores[i].name}</h4>`,
        `<p>${stores[i].address}</p>`,
        `<p>tel: ${stores[i].tel}</p>`,
        '</div>',
      ].join('');

      const infoWindow = new naver.maps.InfoWindow({
        content: contentString,
      });

      naver.maps.Event.addListener(marker, "click", event => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });
    }
    /* eslint-enable */

    this.setState = {
      map,
    };
  }

  render() {
    return (
      <div>
        <h2>온라인 판매처</h2>
        <Row>
          <Col md={2} sm={12} xs={12}>
            <Button href="http://www.doctorjayce.com">
              닥터제이스
            </Button>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Button href="http://dang119.com">
              당119닷컴
            </Button>
          </Col>
          <Col md={2} sm={12} xs={12}>
            <Button href="http://everydaysmile.co.kr">
              에브리데이스마일
            </Button>
          </Col>
        </Row>
        <h2>오프라인 판매처</h2>
        <div id="naverMap" className="map" />
      </div>
    );
  }
}

export default Purchase;
