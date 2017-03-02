// 오프라인 판매점 정보
// JSON 포멧으로 되어 있어야 하며 이름, 주소, 위/경도, 전화번호 정보가 다 있어야함
const offlineStores = [
  {
    name: '연세대학교 치과대학 구강용품전시장',
    address: '서울특별시 서대문구 연세로 50 (신촌동, 치과대학병원 2층)',
    lat: 37.562954,
    lng: 126.941679,
    tel: '',
  },
  {
    name: '연세대학교 의료기매장',
    address: '서울특별시 서대문구 연세로 50 (신촌동, 연세의료원 본원 2층 의료기매장)',
    lat: 37.562321,
    lng: 126.940976,
    tel: '',
  },
  {
    name: '힐링앤뷰티',
    address: '서울특별시 서대문구 연세로 50-1, 4층 (신촌동, 신촌세브란스병원 암병원 4층)',
    lat: 37.561197,
    lng: 126.938684,
    tel: '02-2227-8270',
  },
  {
    name: '세연약국',
    address: '서울특별시 서대문구 연세로 50 (신촌동, 연세대학교 동문회관 1층)',
    lat: 37.562741,
    lng: 126.942443,
    tel: '02-364-6141',
  },
  {
    name: '서울대학교 치과대학 구강위생용품점',
    address: '서울특별시 종로구 연건동 275-1 (서울대학교 치과병원 3층)',
    lat: 37.577974,
    lng: 126.999574,
    tel: '02-3676-2080',
  },
  {
    name: '서울대학교병원 유민의료기 본원',
    address: '서울특별시 종로구 연건동 28 (서울대학교병원 지하1층 유민의료기)',
    lat: 37.577974,
    lng: 126.999574,
    tel: '02-747-9580',
  },
  {
    name: '서울대학교병원 유민의료기 암병동',
    address: '서울특별시 종로구 연건동 28-2 (서울대학교병원 암병동 유민의료기)',
    lat: 37.578721,
    lng: 126.997561,
    tel: '02-766-9580',
  },
  {
    name: '연세베스트덴치과',
    address: '서울특별시 동작구 보라매로5길 51 (신대방동 롯데관악타워 3층)',
    lat: 37.490764,
    lng: 126.923188,
    tel: '02-836-2223,4',
  },
  {
    name: '새연세부부치과',
    address: '서울특별시 동작구 사당로 224 (사당동 4층)',
    lat: 37.483649,
    lng: 126.972500,
    tel: '02-522-1865',
  },
  {
    name: '이사랑치과',
    address: '서울특별시 동작구 사당로 236 (제일약국 2층)',
    lat: 37.483102,
    lng: 126.973723,
    tel: '02-522-2875',
  },
  {
    name: '연세미치과의원',
    address: '서울특별시 은평구 서오릉로 201 (구산동 2층)',
    lat: 37.613681,
    lng: 126.911168,
    tel: '02-385-7912',
  },
  {
    name: '치아나라치과의원',
    address: '서울특별시 은평구 통일로83길 6-5 (길현동 삼양빌딩3층)',
    lat: 37.621202,
    lng: 126.918813,
    tel: '02-3157-2871',
  },
  {
    name: '홍순호치과의원',
    address: '서울시 강남구 강남대로 606 (논현동 삼주빌딩 7층)',
    lat: 37.516200,
    lng: 127.020601,
    tel: '02-3446-2828',
  },
  {
    name: '닥터프라임치과의원',
    address: '서울특별시 강남구 테헤란로 101 (이즈타워 13층)',
    lat: 37.498617,
    lng: 127.028028,
    tel: '02-563-5200',
  },
  {
    name: '화곡서울약국',
    address: '서울특별시 강서구 강서로 254 (우장산 아이파크 이편한세상)',
    lat: 37.548139,
    lng: 126.836633,
    tel: '02-2692-3800',
  },
  {
    name: '강서예치과의원',
    address: '서울특별시 강서구 강서로 348 (우장산힐스테이트상가 3층)',
    lat: 37.556070,
    lng: 126.840219,
    tel: '02-3661-7520',
  },
  {
    name: '임플란티아치과',
    address: '서울특별시 서초구 논현로 87, B-302 (양재동 삼호물산빌딩 B동 3층)',
    lat: 37.477565,
    lng: 127.044200,
    tel: '02-589-0222',
  },
  {
    name: '이완승치과의원',
    address: '서울특별시 서초구 바우뫼로 99',
    lat: 37.476921,
    lng: 127.029824,
    tel: '02-573-7510',
  },
  {
    name: '연세참소망치과',
    address: '서울특별시 관악구 봉천동 972-5 (보라매샤르망 3층)',
    lat: 37.489985,
    lng: 126.927099,
    tel: '02-888-2872',
  },
  {
    name: '연세건치과의원',
    address: '서울특별시 중구 한강대로 416 (남대문로5가 지하1층)',
    lat: 37.555669,
    lng: 126.973766,
    tel: '02-755-0882',
  },
  {
    name: '김성철치과의원',
    address: '서울특별시 중구 의주로1가 32-2 바비엥서울 2층',
    lat: 37.564296,
    lng: 126.968451,
    tel: '02-738-9897',
  },
  {
    name: '메이연세치과',
    address: '서울특별시 송파구 문정동 1 (삼성래미안 2층)',
    lat: 37.490575,
    lng: 127.130219,
    tel: '02-401-0275',
  },
  {
    name: '연세덴티프로치과의원',
    address: '경기도 고양시 일산서구 중앙로 1426 (주엽동 일송노블레스빌딩 3층)',
    lat: 37.670247,
    lng: 126.761954,
    tel: '031-922-8100',
  },
  {
    name: '연세물방울치과',
    address: '경기도 고양시 일산동구 풍동 1275 (힘찬프라자 3층)',
    lat: 37.667694,
    lng: 126.800367,
    tel: '031-907-0790',
  },
  {
    name: '세호의료기',
    address: '경기도 고양시 일산동구 일산로330번길 3 (마두동 101호)',
    lat: 37.664057,
    lng: 126.785520,
    tel: '031-904-3429',
  },
  {
    name: '연세강치과',
    address: '경기도 평택시 평남로 937 (비전동 폴리프라자 4층)',
    lat: 36.987281,
    lng: 127.102043,
    tel: '031-692-8828',
  },
  {
    name: '연세치과의원',
    address: '경기도 수원시팔달 팔달로2가 7-2 (삼광빌딩)',
    lat: 37.279484,
    lng: 127.016438,
    tel: '031-241-7393',
  },
  {
    name: '이화약국',
    address: '경기도 이천시 창천동 449-13',
    lat: 37.283638,
    lng: 127.447538,
    tel: '031-632-8998',
  },
  {
    name: '강충구치과의원',
    address: '인천광역시 남동구 장승남로 61 (인일프라자 4층)',
    lat: 37.443679,
    lng: 126.739029,
    tel: '032-463-7300',
  },
  {
    name: '크린팜대학약국',
    address: '인천광역시 서구 심곡로100번길 17-5 (심곡동 1층)',
    lat: 37.542451,
    lng: 126.683799,
    tel: '032-567-8874',
  },
  {
    name: '아름다운치과',
    address: '부산 사상 괘법 533-1 (고려빌딩 5층)',
    lat: 35.163479,
    lng: 128.981102,
    tel: '051-323-2875',
  },
  {
    name: '이현치과의원',
    address: '대구광역시 서구 평리동 573-5 (2층)',
    lat: 35.878417,
    lng: 128.550221,
    tel: '053-552-0247',
  },
  {
    name: '참열린약국',
    address: '대구광역시 남구 두류공원로17길 28 (대명동 1층)',
    lat: 35.843592,
    lng: 128.568018,
    tel: '053-628-7359',
  },
  {
    name: '만나약국',
    address: '대구광역시 중구 달구벌대로 2163 (삼덕동 2가)',
    lat: 35.864250,
    lng: 128.599966,
    tel: '053-425-5025',
  },
  {
    name: '선치과병원',
    address: '대전광역시 중구 대종로 645',
    lat: 36.337863,
    lng: 127.414038,
    tel: '042-251-5000',
  },
  {
    name: '더희망약국',
    address: '대전광역시 서구 둔산동 1268 (원광대학교 치과병원)',
    lat: 36.351505,
    lng: 127.382580,
    tel: '042-488-4050',
  },
  {
    name: '전남대학교 치과대학병원 구강용품점',
    address: '광주광역시 북구 용봉로 33 (용봉동, 전남대학교 치과대학병원 1층)',
    lat: 35.172335,
    lng: 126.900592,
    tel: '062-530-5500',
  },
  {
    name: '연세이로운치과',
    address: '경상북도 포항시 북구 법원로 157 (양덕동 3층)',
    lat: 36.089211,
    lng: 129.387271,
    tel: '054-251-7528',
  },
  {
    name: '리앤박치과',
    address: '경상북도 포항시 북구 양덕동 1752',
    lat: 36.091273,
    lng: 129.387967,
    tel: '054-243-2804',
  },
  {
    name: '익산약국',
    address: '전라북도 익산시 무왕로 905 (원광대학교 의과대학병원 앞)',
    lat: 35.963883,
    lng: 126.959063,
    tel: '063-841-8100',
  },
  {
    name: '꼬마이치과',
    address: '전남 여수시 안산동 724-1 (참조은소아과 2층)',
    lat: 34.754296,
    lng: 127.653855,
    tel: '061-685-2276',
  },
  {
    name: '연세김치과',
    address: '충청남도 홍성군 홍성읍 홍성천길 210 (2층)',
    lat: 36.600753,
    lng: 126.667097,
    tel: '041-631-2858',
  },
];

export default offlineStores;
