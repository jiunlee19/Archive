### URL 이해
http://naver.com/main?id=jiunlee&page=12
http : 프로토콜
naver.com : 도메인 네임
main : 다른 페이지 호출 (요청의 종류)
? : 이후에 나오는 것은 query string
& : query string 여러 개의 조건을 이어서 받을 수 있음

```javascript
var http = require('http');
var fs = require('fs');
var app = http.crateServer(function(req,res){
  var _url = req.url;
  if(req.url == '/'){
    _url = '/index.html'; }
  if(req.url == 'favicon.ico'){
    return res.writeHead(404); }

  res.wrtieHead(200);
  res.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);
```
fs 모듈 : 파일 읽고 쓰고 삭제하는 등의 기능
요기서 if(req.url == '/')와 if(req.url == '/main')은 ***URL 분류기***

favicon.ico는 favorite icon의 약자
browser가 서버에게 자동으로 요청하는 URL

***Http 응답 5가지***
100번대(100~103) : 정보 제공
200번대(200~208) : 성공적 응답
300번대(300~308) : 리다이렉트
400번대(400~416) : 클라이언트 에러
500번대(500~508) : 서버 에러

URL 요청(브라우저 -> 서버)
URL 분류기(서버)
비즈니스 로직(서버) 찾아서
해당 html 파일 뿌려주기(서버 -> 브라우저)

tmeplate = ejs 파일
