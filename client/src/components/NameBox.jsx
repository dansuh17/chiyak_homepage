import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Name from './Name';
import './Name.css';

class NameBox extends Component {
  // 생성자
  constructor(props) {
    super(props);

    // 이 클래스의 상태를 초기화한다
    this.state = {
      cname: 'Name',
    };

    // 이건...일단은 몰라도 됨 ㅠㅠ
    this.handleChange = this.handleChange.bind(this);
  }

  // 버튼을 누르면 이 함수가 호출된다
  handleChange() {
    this.setState({
      cname: 'NameRed',
    });
  }

  render() {
    // 이 div 요소의 클래스 이름을 'Name'으로 초기에는 설정
    return (
      <div className={this.state.cname}>
        <Name myname="ohMyGodBlessYou" />
        <Button bsStyle="danger" onClick={this.handleChange}> Gong Yu의 wife </Button>
      </div>
    );
  }
}

export default NameBox;
