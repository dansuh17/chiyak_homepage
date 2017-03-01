import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import PurchaseLinks from './PurchaseLinks';
import stores from '../stores';  // eslint-disable-line
import './Purchase.css';

// naver map api client id - 따로 신청해야함
const CLIENT_ID = 'pOhVvAhVKvbXx_wi9MzL';

// 온라인 판매점 리스트
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

    this.onMapSetup = this.onMapSetup.bind(this);
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
      center: new naver.maps.LatLng(36.562954, 127.941679),
      zoom: 3,
      minZoom: 3,
      maxZoom: 13,
      zoomControl: true,
    });

    for (let i = 0; i < stores.length; i++) {
      // 지도에 마커 뿌리기
      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(stores[i].lat, stores[i].lng),
        map,
      });

      // 정보창에 넣어줄 정보
      const contentString = [
        '<div class="store-label">',
        `<h4>${stores[i].name}</h4>`,
        `<p>${stores[i].address}</p></br>`,
        `<p>전화: ${stores[i].tel}</p>`,
        '</div>',
      ].join('');

      // 정보창 스타일 수정
      const infoWindow = new naver.maps.InfoWindow({
        content: contentString,
        backgroundColor: '#f0ffff',
        anchorColor: '#f0ffff',
        anchorSkew: true,
        borderColor: '#808080',
        borderWidth: 1,
      });

      // 클릭시 정보창 띄우기
      naver.maps.Event.addListener(marker, "click", event => {
        if (infoWindow.getMap()) {
          infoWindow.close();
        } else {
          infoWindow.open(map, marker);
        }
      });
    }
    /* eslint-enable */

    this.onMapSetup(map);
  }

  onMapSetup(map) {
    // componentWillMount의 무한루프 방지
    this.setState({
      map,
    });
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
          <p className="info-text">* 지도를 움직여 집 근처 판매점을 찾아보세요!</p>
          <div id="naverMap" className="map" />
        </div>
      </div>
    );
  }
}

export default Purchase;

