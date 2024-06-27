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

> useMemo()로 전달된 함수는 렌더링되는 동안 실행된다.   
> (렌더링 일어나는 동안 실행되면 안되는 내용 포함하면 안된다.)   
> 의존성 배열을 안 넣으면 의미가 없다.   
> 컴포넌트 마운트 시에만 함수가 실행된다.
> ```javascript
> const memoizedValue = useMemo(() => { //create 함수
>    // 여기에 비용이 많이 드는 계산 로직을 작성합니다.
>    return computeExpensiveValue(의존성 변수1, 의존성 변수2);
>  }, [의존성 변수1, 의존성 변수2]);
> ```

> ### 4. useCallback
> useMemo()와 비슷한 역할을 하지만, **값이 아닌 함수를 반환한다**는 점이 둘의 다르다.   
> useMemo()와 마찬가지로 함수와 의존성 배열을 파라미터로 받는다.   
> 파라미터로 받는 이 함수를 콜백이라 부르고,   
> ```javascript
> const memoizedCallback = useCallback(() => {
>     doSomething(의존성 변수1, 의존성 변수2);
> }, [의존성 변수1, 의존성 변수2]);
> ```

> ### Memoization    
> useMemo와 useCallback 훅에서 나오는 개념이다.   
> (비용이 높은) 함수의 호출 결과를 저장해 두었다가, 같은 입력값으로 함수를 호출하면   
> 새로 함수를 호출하지 않고 이전에 저장해놨던 호출 결과를 바로 반환하는 것이다.   
> Memoization의 결괏값이 Memoized value이다.   

> ### 5. useRef
> 레퍼런스(특정 컴포넌트에 접근할 수 있는 객체)를 사용하기 위한 Hook이다.
> 내부 데이터가 변경돼도 별도로 알리지 않는다.
> ```javascript
> const refContainer = useRef(초깃값);
> ```
> 레퍼런스 객체가 .current 속성이 변경되어도 안 알려준다.

> DOM node의 변화를 알리기 위해 **callback ref** 사용한다.
