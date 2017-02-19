import React from 'react';
import ProductBox from './ProductBox';
import placeholderimg from '../img/products.jpeg';

const smileDetails = [
  '천연 페퍼민트의 상쾌함과 시나몬의 독특하면서도 단맛의 청량감',
  '피톤치드, 카렌듀라, 프로폴리스 등 식물성 오일이 입냄새 제거',
  '천연 단맛의 자일리톨을 첨가하여 충치예방 효과',
  '식약처 인증 성분으로 잇몸질환을 예방하는 아미카프론산과 알클록사',
];

const smileIngredients =
  '식물성계면활성제(코코일글루타민산나트륨), 코큐텐(유비데카레논), 카모마일, 세이지, ' +
  '유칼립투스, 알로에, 회향(펜넬)유, 계피(시나몬), 피톤치드, 카렌듀라, 로즈마리, 프로폴리스,' +
  '스피아민트, 페퍼민트, 자몽종자추출물, 녹차, 키토산, 포공영, 몰약, 피톤치드, 자일리톨, ' +
  '하이드록시아파타이트';

const careDetails = [
  '그리스 키오스 섬에서 자라는 유향나무의 천연수지 매스틱',
  '카모마일, 로즈마리, 프로폴리스 등 식물성 오일의 항염·항균작용',
  '천연 단맛의 자일리톨을 첨가하여 충치예방 효과',
  '잇몸의 붓기와 발적을 완화시켜 주는 비타민E',
];

const careIngredients =
  '식물성계면활성제(코코일글루타민산나트륨), 매스틱, 코큐텐(유비데카레논), 카모마일, 세이지, ' +
  '유칼립투스, 알로에, 회향(펜넬)유, 자몽종자추출물, 프로폴리스, 녹차, 키토산, 카렌듀라, 작약, ' +
  '로즈마리, 감초, 쑥, 고삼, 몰약, 피톤치드, 스피아민트, 자일리톨, 하이드록시아파타이트';

const ProductDetail = () => (
  <div>
    <ProductBox
      name="goodChiyak_smile"
      productTitle={'좋은치약 smile'}
      imgSrc={placeholderimg}
      subtitle={'페퍼민트오일의 부드러움'}
      headerTwo={'요리사, 소믈리에, 바리스타 등 미각을 보호해 주는 치약'}
      details={smileDetails}
      ingredients={smileIngredients}
      quote={'"칫솔질 후에도 과일 맛을 그대로 즐길 수 있다?"'}
    />
    <ProductBox
      name="goodChiyak_clear"
      productTitle={'좋은치약 care'}
      imgSrc={placeholderimg}
      subtitle={'매스틱오일의 부드러움'}
      headerTwo={'어린이, 임산부, 노인 등 연약한 입안을 보호해 주는 치약'}
      details={careDetails}
      ingredients={careIngredients}
      quote={'"입안이 아파서 칫솔질을 할 수가 없어요"'}
    />
  </div>
);

export default ProductDetail;
