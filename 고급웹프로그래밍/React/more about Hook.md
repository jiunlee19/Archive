### 훅의 규칙
* Hook은 무조건 컴포넌트의 최상위 레벨에서만 호출해야 한다.   
  * 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 된다.
* 함수 컴포넌트나 커스텀 훅에서만 훅을 호출해야 한다.
  
### 커스텀 훅
내부에서 다른 훅을 호출하는 단순한 자바스크립트 함수이다.   
여러 컴포넌트에서 반복적으로 사용되는 로직을 훅으로 만들어서 재사용하기 위해 사용한다.   
파라미터 값과 리터값을 개발자가 정할 수 있다.   
이름 앞에 use 꼭 써줘야 한다.
