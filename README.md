# 📆 Calendar-React-Datejs

Developing calendar with Date.js
<br />
<br />

## 🔨 Stack
- CRA(Create React-App)
<br /><br />

## 📸 Screenshots

<div>
  <img width="800" height="400" src="https://user-images.githubusercontent.com/61813428/120801989-dc71e380-c57c-11eb-84e2-dcc90e84814c.png">
</div>
<div>
  <img width="800" height="400" src="https://user-images.githubusercontent.com/61813428/120801997-e09e0100-c57c-11eb-8058-540073e90c16.png">
</div>
<br /><br />

## 🌎 URL
<https://cdcoc0.github.io/calendar-react-datejs/> <br />
[CLICK HERE🙋‍♀️](https://cdcoc0.github.io/calendar-react-datejs/)
<br /><br />

## 🧾 Description
Date.js 객체로 달력 구현
- 이번 달 달력에 포함되는 지난 달의 마지막 주, 다음 달의 첫 주는 글자색을 연하게 설정
- 날짜를 클릭하면 해당 날짜로 포커스 이동
- 포커스 설정된 날짜를 더블클릭하면 일정을 등록하는 모달 창 팝업
- 모달은 라이브러리 없이 구현
<br /><br />

## 📂APIs・Libs
### -Date
- Date.js로 날짜 정보를 가져옴
- Day.js를 사용해 날짜 정보의 포맷 설정
<br />

### -Context API
- 모달에서 포커스된 날짜 정보를 구하기 위해 useContext로 현재 날짜 상태 관리
<br />

### -CSS
- SCSS 사용
<br /><br />

## 🎓 What I've learned
### -Rendering
Date 객체가 무한 렌더링을 야기해 이를 관리하는 과정에서 렌더링이라는 개념에 조금 더 가까워졌다. 라이프사이클 메서드나 복잡한 hook 들을 왜 사용하는 지 이해할 수 있었고,  렌더링 최적화의 중요성을 알 수 있었다.
<br />

### -Global State Management
거의 모든 컴포넌트에서 Date 객체를 필요로 했기 때문에 useContext를 사용해 전역적으로 사용되는 상태 관리 방법과 그 중요성을 배웠다.
<br />

### -Developing UI
내가 구상한 화면을 실제로 구현하는데 걸리는 시간이 점점 단축되고 있음을 느낀다. 
<br /> 

### -Modal
모달창은 처음 만들어보는 것이었기 때문에 라이브러리를 사용하지 않고 직접 구현해 보았다. 
<br /><br />

## 🔧 What needs to be improved
### -DB
DB 연동 없이 만들었기 때문에 데이터를 저장할 수가 없어 구현할 수 있는 기능이 한정적이었다. Momentum과 합치는 과정에서 Firebase를 사용해 날짜별로 일정을 저장해 보여주는 기능을 추가할 예정이다.
<br />

### -Date.js
Date 객체의 무한 렌더링 때문에 setInterval을 설정할 수밖에 없었는데, 굉장히 큰 자원 낭비라고 느꼈다. 후에 백엔드로 나눌 기회가 생기면 달력 API 혹은 날짜 라이브러리 등을 가져와 사용하는 게 훨씬 효율적일 것 같다.
<br />

### -Global State Management
아직 부분적으로만 Context API를 적용했는데 리팩토링을 통해 날짜 상태를 보다 통합적으로 관리하고, Redux 라이브러리도 사용해볼 계획이다. 
