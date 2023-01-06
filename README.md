# 🎠Disney-Plus (React)

#### [◼ react-disney-plus-app 폴더 생성 및 리액트 설치](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/Create%20React%20App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0.md)

```
npx create-react-app ./
```

![image](https://user-images.githubusercontent.com/99783474/209544894-7c3aa846-1d85-42f2-8d6a-3810b674a6a5.png)

> create-react-app을 사용하여 리액트를 설치해준다. 
>
> 이렇게 하면 Babel이나 Webpack 설정이 이미 다 되어 있는 상태이기에, 많은 시간을 소요하지 않고 리액트 앱을 시작할 수 있다. 


#### [◼ The Movie DB API Key 생성하기](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/The%20Movie%20DB%20API%20Key%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [◼ Axios 인스턴스 생성 및 요청 보내기](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/The%20Movie%20DB%20API%20%EC%9A%94%EC%B2%AD%EC%9D%84%20%EC%9C%84%ED%95%9C%20Axios%20%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%20%EC%83%9D%EC%84%B1%20%EB%B0%8F%20%EC%9A%94%EC%B2%AD%20%EB%B3%B4%EB%82%B4%EA%B8%B0.md)

#### ✔ Axios? 

* Axios : 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리 
* 벡앤드와 프론트엔드 통신을 쉽게 하기 위해 Ajax와 더불어 사용한다. 


![image](https://user-images.githubusercontent.com/99783474/209545321-f72ff320-0101-4569-90c8-e21c1cd6e97e.png)

#### ✔ Axios 설치 

```
npm install axios --save
```

#### ✔ Axios 인스턴스화 하는 이유 
##### : 중복된 부분을 계속 입력하지 않아도 되기 때문에 

#### ✔ Axios 인스턴스 만드는 순서 

![image](https://user-images.githubusercontent.com/99783474/209545444-a2646031-222b-4b80-834f-1b8af53581f6.png)


#### [◼ Disney Plus 애플리케이션 전체 구조 생성하기](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/Disney%20Plus%20%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%20%EC%A0%84%EC%B2%B4%20%EA%B5%AC%EC%A1%B0%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [◼ Styled Component에 대해 알아보기 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/Styled%20Component%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0.md)

![image](https://user-images.githubusercontent.com/99783474/209545667-654be665-1a8c-462b-9441-2f3b9865d8d9.png)


```bash
# with npm 
npm install --save styled-components

# with yarn
yarn add styled-components
```

```bash
npm install styled-components --save
```

---

#### [1. Nav 컴포넌트 생성 및 스타일링 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/1.%20%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EC%83%9D%EC%84%B1%20%EB%B0%8F%20%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81.md)

#### [2. 네비게이션 컴포넌트 스크롤 구현하기 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/2.%20%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EC%8A%A4%ED%81%AC%EB%A1%A4%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0.md)

#### [3. Styled Componenet를 이용한 비디오 배너 생성하기 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/3.%20Styled%20Component%EB%A5%BC%20%EC%9D%B4%EC%9A%A9%ED%95%9C%20%EB%B9%84%EB%94%94%EC%98%A4%20%EB%B0%B0%EB%84%88%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [4. 이미지 배너 생성하기 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/4.%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B0%B0%EB%84%88%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [5. 이미지 UI 생성하기 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/5.%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20UI%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [6. 비디오 배너 생성하기 ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/6.%20%EB%B9%84%EB%94%94%EC%98%A4%20%EB%B0%B0%EB%84%88%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

---





