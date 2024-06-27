> # Hook
> 리액트의 state와 생명주기 기능에 갈고리를 걸어 **원하는 시점에 정해진 함수를 실행되도록** 만들었다.   
> 또한 해당 함수를 Hook이라고 부른다.
***
> ### 1. useState
> 컴포넌트에는 클래스형과 함수형이 있다. 이 중에 **함수 컴포넌트에는 기본적으로 state가 존재하지 않는다.**   
> useState는 **state를 사용하기 위한 Hook이다.**   
> 변수 직접 수정이 안된다, set함수로 변경해야 한다.   

구조 분해 할당에 속함 
```javascript
//기본 형태
const [변수명, set함수명] = useState(초깃값);
```

> ### 2. useEffect
> **side effect를 수행하기 위한 Hook이다.**   
> 'side effect'에는 함수 컴포넌트의 입력(state, props)과 출력(UI 렌더링)을 제외한 모든 행위가 속한다.
> 클래스 컴포넌트에서 제공하는 생명주기 함수와 동일한 기능 제공해준다.
```javascript
useEffect(()=>{
  return() => {
    //컴포넌트가 마운트 해제되기 전에 실행됨
   //componentDidMount(), componenetDidUpdate(), componentWillUnmount() 와 같은 기능 제공
 }
},[의존성 배열]);
 
return() => {
 //컴포넌트가 마운트 된 이후에 실행됨
 //componentDidMount(), componenetDidUpdate() 와 같은 기능 제공
}
```
> **의존성 배열**에 있는 변수들 중 하나라도 **값이 변경되었을 때** 함수가 실행된다.   
> 의존성 배열에 **빈 배열[]** 을 넣으면 **마운트와 언마운트 시에 단 한 번씩만** 실행된다.   
> 의존성 배열 **생략 시**, **컴포넌트 업데이트 시** 마다 실행된다.   
***
> ### 3. useMemo
> Memoized Value를 리턴하기 위해 필요한 create 함수와 의존성 배열을 받는다.   
> 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create함수를 호출하여 결괏값을 반환하며,   
> 그렇지 않은 경우 기존 함수의 결괏값을 그대로 반환한다.
>   
> 컴포넌트가 다시 렌더링될 때마다 연산량이 높은 작업을 반복하는 것을 피할 수 있습니다.   
> ⇒ 빠른 렌더링 속도
> ```javascript
> useEffect(()=>{
>   console.log("렌더링이 완료되었습니다.");
>   console.log({name,nickname});
> },[name,nickname]);
> ```
> useMemo()로 전달된 함수는 렌더링되는 동안 실행된다.   
> (렌더링 일어나는 동안 실행되면 안되는 내용 포함하면 안된다.)   
> 의존성 배열을 안 넣으면 의미가 없다.   
> 컴포넌트 마운트 시에만 함수가 실행된다.   
### 4. useCallback
### 5. useRef
