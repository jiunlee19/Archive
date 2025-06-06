## ✅ click & copy CSS 개발 회고

### 1. 어떤 문제를 어떤 방식으로 해결했는가?

#### 목표

-   다양한 `box-shadow` 스타일을 시각적으로 보여주고, 클릭 시 해당 스타일을 클립보드에 복사하는 기능을 구현.

#### 주요 문제와 해결 방식

| 문제                                    | 해결 방법                                                                           |
| --------------------------------------- | ----------------------------------------------------------------------------------- |
| `hover` 시 텍스트(#번호) 나타나게 하기  | `:hover` 시 `opacity`로 `<p>#번호</p>` 표시                                         |
| 텍스트를 박스 중앙에 정렬               | `<p>`에 `display: flex`, `align-items`, `justify-content` 사용                      |
| `<p>`가 `pointer-events`를 방해         | `pointer-events: none`으로 클릭 이벤트 통과 처리                                    |
| 모바일 환경에선 `hover`가 적용되지 않음 | `:active` CSS와 `touchstart` JS 이벤트 추가                                         |
| 접근성 문제 (스크린리더, 키보드 사용)   | `role="button"`, `aria-label` 추가하여 의도 전달                                    |
| 클릭 시 box-shadow 복사 기능 구현       | `window.getComputedStyle`로 box-shadow 추출 후 `navigator.clipboard.writeText` 사용 |

---

### 2. 이 개발을 통해 느낀 점

-   CSS로 시각적 피드백(`hover`, `active`)을 주는 방식과 HTML 구조가 사용성에 큰 영향을 미친다는 것을 체감했다.
-   단순히 동작하는 것에 그치지 않고, 접근성(웹 표준) 과 모바일 사용자 경험까지 고려하는 것이 얼마나 중요한지 배웠다.
-   작은 요소 하나(예: `<span>` → `<p>`로 변경)도 전체 인터랙션에 영향을 줄 수 있다는 점에서 HTML 태그 선택의 중요성을 느꼈다.
-   `pointer-events`, `touchstart`, `aria-label` 등 다양한 브라우저/기기/사용자 환경을 대응하기 위한 세부적인 CSS와 JS 속성들을 학습하고 실제 적용해볼 수 있었다.

---

### 기술 스택

-   HTML, CSS, JavaScript (Vanilla)
-   브라우저 API: `navigator.clipboard`, `getComputedStyle`

### 향후 개선 아이디어

-   복사 성공 시 토스트 알림 도입 (예: `setTimeout`으로 alert 대체)
-   다양한 그림자 스타일 추가 및 디자인 미리보기 저장 기능
-   box-shadow 외에도 border-radius, filter 등 다른 CSS 속성 복사 기능 확장
-   키보드 접근성: `tabindex="0"` 추가 + `keydown`으로 Enter/Space 대응

### ✅ 결과물
![화면 기록 2025-06-06 오후 5 43 11](https://github.com/user-attachments/assets/6198648b-fd05-4e8e-9e19-a840b18c79e5)

