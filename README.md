# unplash 클론

- 사용 프레임워크 : react, nextjs
- 사용 언어 : javascript, typescript
- 스타일 : scss, styled-component
- 서버,클라이언트 상태관리 : react-query, recoil
- 기타 라이브러리 : antd

# 목록 화면

- 첫 실행 시, 검색어가 없는 경우 : https://api.unsplash.com/photos
- 검색어로 검색 하는 경우 : https://api.unsplash.com/search/photos
- 두 api의 받는 데이터가 조금 달라서 api 함수를 두개 활용해서 적용.
- 무한 스크롤 적용

# 상세 화면

- 데스크탑에서 사진을 호버시 작가 프로필이 노출 됩니다.
- 모바일 경우, 클릭을 한번 해야 작가 프로필이 노출 됩니다.
- 모바일 경우, 작가 프로필이 노출 되면, x 버튼을 클릭하면 작가 프로필이 제거
- 두 기능은 다르게 동작이 되도록 작성하였습니다.
- 둘다 작가 프로필을 클릭 하면, 작가 https://unsplash.com/@작가로 새탭이 열려 이동.

# 상세 화면 모달

- 작가 프로필에서 설정 아이콘을 클릭 하면, 모달창이 노출
