### Shared State
하위 컴포넌트가 공통된 부모 컴포넌트의 state를 공유하여 사용하는 것
```javascript
function TemperatureInput(props){
  const handleChange=(event)=>{
    //setTemperature(event.target.value);
    props.onTemperatureChange(event.target.value);
  }
  return (
    <fieldset>
      <legend>온도 입력</legend>
      //<input value={temperature} onChange={handleChange} />
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}
```
### state 끌어올리기
하위 컴포넌트의 state를 공통된 부모 컴포넌트로 끌어올려 공유하는 방식
```javascript
//하위 컴포넌트
function BoilingVerdict(props){
  if(props.celsius >= 100) ...

//부모 컴포넌트
...
<BoilingVerdict celsius={parseInt(temperature)}/>
```
