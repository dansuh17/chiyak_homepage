import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PurchaseLinks from './PurchaseLinks';
import stores from '../stores';  // eslint-disable-line
import './Purchase.css';

// naver map api client id - 따로 신청해야함
const CLIENT_ID = 'pOhVvAhVKvbXx_wi9MzL';

const onlineStores = [
  {
    name: '닥터제이스',
    url: 'http://www.doctorjayce.com',
  },
  {
    name: '당119닷컴',
    url: 'http://dang119.com',
  },
  {
    name: '에브리데이스마일',
    url: 'http://everydaysmile.co.kr',
  },
];

class Purchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
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

    console.log(this.state); // eslint-disable-line
  }

  onClickHandler() {
    /* eslint-disabled */
    console.log(this.state); // eslint-disable-line
    if (this.state.map.getOptions('draggable')) {
      this.state.map.setOptions({
        draggable: false,
        pinchZoom: false,
        scrollWheel: false,
        keyboardShortcuts: false,
        disableDoubleTapZoom: true,
        disableDoubleClickZoom: true,
        disableTwoFingerTapZoom: true,
      });
    } else {
      this.state.map.setOptions({ // 지도 인터랙션 켜기
        draggable: true,
        pinchZoom: true,
        scrollWheel: true,
        keyboardShortcuts: true,
        disableDoubleTapZoom: false,
        disableDoubleClickZoom: false,
        disableTwoFingerTapZoom: false,
      });
    }
    /* eslint-enabled */
  }

  render() {
    return (
      <div>
        <div className="purchase-box">
          <h2 className="purchase-title">온라인 판매처</h2>
          <Row>
            <PurchaseLinks stores={onlineStores} />
          </Row>
        </div>
        <div className="purchase-box">
          <h2 className="purchase-title">오프라인 판매처</h2>
          <button onClick={this.onClickHandler}>지도 인터랙션 끄기 / 키기</button>
          <p className="info-text">* 지도를 움직여 집 근처 판매점을 찾아보세요!</p>
          <div id="naverMap" className="map" />
        </div>
      </div>
    );
  }
}

export default Purchase;

