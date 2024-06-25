### 자바스크립트의 확장 문법
XML/HTML와 JS를 섞어 작성되지만, 브라우저에서 실행되기 전에 JS 코드로 변환되는 과정을 거친다.    
리액트는 JSX 코드를 createElement() 함수를 사용하는 코드로 변환

```javascript
//JSX 사용한 문법
const element = (
  <h1> className="greeting">
    Hello, world!
  </h1>
)
```
```javascript
//JS로 변환된 모습
const element = React.createElement(
  'h1', //type
  { className: 'greeting'}, //props
  'Hello, World!' //children
)
```
***
### 장점
* 간결한 코드 작성
* 가독성 향상
* Injection Attack으로부터 안전
```javascript
//악성코드 삽입이 되어도
const element = <h1>{title}</h1>
//괄호 안 title 렌더링 전에 임베딩된 값을 문자열로 변환하기 때문에 안전하다.
```
***
### 사용법
소플의 처음 만난 리액트 104pg
* XML과 HTML 섞어서 사용
* JS 문법 지원
* 중괄호{}에는 JS 코드 사용
