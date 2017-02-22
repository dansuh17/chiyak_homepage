import React, { Component } from 'react';
import stores from '../stores';  // eslint-disable-line
import './Purchase.css';

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
    script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?clientId=pOhVvAhVKvbXx_wi9MzL';
    script.async = true;

    document.body.appendChild(script);
  }

  componentDidMount() {
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
        <div id="naverMap" className="map" />
      </div>
    );
  }
}

export default Purchase;
