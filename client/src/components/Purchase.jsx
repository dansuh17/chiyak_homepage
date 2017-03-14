import React, { Component } from 'react';
import { Col, Dropdown, MenuItem, Row } from 'react-bootstrap';
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
    name: '에브리데이스마일',
    url: 'http://everydaysmile.co.kr',
  },
];

class Purchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      infoWindows: [],
      markers: [],
    };

    this.onMapSetup = this.onMapSetup.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
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

    const infoWindows = [];
    const markers = [];
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

      infoWindows.push(infoWindow);
      markers.push(marker);
    }
    /* eslint-enable */

    map.setOptions({
      scrollWheel: false,
    });

    this.onMapSetup(map, infoWindows, markers);
  }

  onMapSetup(map, infoWindows, markers) {
    // componentWillMount의 무한루프 방지
    this.setState({
      map,
      infoWindows,
      markers,
    });
  }

  /*
   * 드롭다운 메뉴 항목을 눌렀을 때 해당 상점의 정보창이 뜸
   */
  onMenuItemClick(eventKey) {
    // 지도의 중심을 옮긴다
    this.state.map.setCenter(
      new naver.maps.LatLng(stores[eventKey].lat, stores[eventKey].lng));  // eslint-disable-line
    this.state.map.setZoom(10, true);  // 지도 확대
    this.state.infoWindows[eventKey].open(
      this.state.map, this.state.markers[eventKey]);
  }

  render() {
    // 지역별 오프라인 판매점 드롭다운 버튼
    const StoreButtons = () => {
      const storeList = [];
      for (let i = 0; i < stores.length; i += 1) {
        storeList.push(
          <MenuItem eventKey={i}>
            {stores[i].name}
          </MenuItem>);
      }

      const areaMenu = {};
      let menuItem = null;
      let area = '';

      // create menuitems per registered store
      for (let i = 0; i < storeList.length; i += 1) {
        menuItem = <MenuItem eventKey={i} key={i}>{stores[i].name}</MenuItem>;
        area = stores[i].area;
        if (!Object.prototype.hasOwnProperty.call(areaMenu, area)) {
          areaMenu[area] = [];
        }

        areaMenu[area].push(menuItem);
      }

      // create separate dropdown buttons by area
      const menulist = [];
      for (area in areaMenu) {  // eslint-disable-line
        if (Object.prototype.hasOwnProperty.call(areaMenu, area)) {
          menulist.push(
            <Dropdown
              id={area}
              key={area}
              onSelect={this.onMenuItemClick}
              bsStyle="default"
            >
              <Dropdown.Toggle className="dropdown-buttons">
                {area}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {areaMenu[area]}
              </Dropdown.Menu>
            </Dropdown>);
        }
      }

      return <Col md={12} sm={12} xs={12} id="store-area-dropdown">{menulist}</Col>;
    };

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
          <StoreButtons />
          <p className="info-text">* 지도를 움직여 집 근처 판매점을 찾아보세요!</p>
          <div id="naverMap" className="map" />
        </div>
      </div>
    );
  }
}

export default Purchase;

