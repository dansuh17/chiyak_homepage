import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import './ChiyakIntro.css';
import capture from '../img/capture.png';

const vitaminVideoSrc = 'https://s3.ap-northeast-2.amazonaws.com/chiyak.homepage/vitamin_video.mp4';

/* eslint-disable */
class ChiyakIntro extends Component {
  render() {
    return (
      <div className="chiyakintro-container">
        <Row>
          <Col><h1>치약의 개념을 바로잡다!</h1></Col>
          <Col><h3>Choi’s가 개발하고, Choice한 좋은치약</h3></Col>
        </Row>
        <Row>
          <Col md={3} className="intro">
            <img className="capture" src={capture} alt="#" />
          </Col>
          <Col md={9} className="intro">
            {/* 비타민 출연 동영상 */}
            <h3>이 갈리는 칫솔질?</h3>
            <video 
              id="vitaminVideo" 
              src={vitaminVideoSrc} 
              onClick={(e) => {
                if (e.target.paused) {
                  e.target.play();
                } else {
                  e.target.pause();
                }
              }} 
            />
            <p>연세대학교 최종훈 교수 KBS '비타민' 출연영상</p>
          </Col>
        </Row>
        <Row id="letter-container">
          <Col md={5} className="drchoi-h">
            <p><span className="span">Dr. Choi to You</span></p>
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <Jumbotron className="jum1">
              <p>닥터초이스 좋은치약은</p>
              <h3>‘좋은 성분을 첨가하기 전에 나쁜 성분을 넣지 않아야 한다’</h3>
              <p>는 원칙으로 만들었습니다</p>
              <p>치과대학 의사로서 면역력이 떨어진 환자들이 입병으로 고생하고,</p>
              <p>특히 칫솔질시 강한 자극의 치약으로 인해 고통받고,</p>
              <p>악화되는 것이 안타까웠습니다</p>
              <p>이에 약 10년 전, 국내 최초로 합성세제 없는 치약 (위코니치약)을 개발하였고</p>
              <p>환자뿐만 아니라 누구나 만족할 수 있는 더 좋은치약을 완성했습니다</p>
              <p>일반 치약의 대부분은 거품을 많이 내기 위해서 미각을 마비시키고</p>
              <p>입병을 일으키는 합성계면활성제와 강하고 화한 맛을 억지로 느끼게 하는</p>
              <p>인공L-멘톨을 사용합니다</p>
              <p>그러나 좋은치약은 식물성 계면활성제로 부드러운 거품을 내고</p>
              <p>은은하면서 상쾌한 느낌을 주며,</p>
              <p>다양한 약성 성분의 천연 추출물 및 오일로</p>
              <p>입냄새 제거 및 구강건강에 도움을 줍니다</p>
              <h3>더 이상 거품효과에 속지 마세요!</h3>
              <p>닥터초이스 좋은치약은 저자극치약으로</p>
              <p>일반인은 물론 입안이 아파서 칫솔질을 할 수 없는</p>
              <p>환자도 사용할 수 있으며</p>
              <p>진료 후 편안함으로  치료의  완성도를  높여줍니다</p>
              <p>또한 입안이 연약한 어린이, 임산부,노인 등</p>
              <p>특별한 구강관리가 필요한 분도 효과적으로 사용하실 수 있습니다</p>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChiyakIntro;
