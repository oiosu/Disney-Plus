# ๐ Disney-Plus (React)

#### [โผ react-disney-plus-app ํด๋ ์์ฑ ๋ฐ ๋ฆฌ์กํธ ์ค์น](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/Create%20React%20App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0.md)

```
npx create-react-app ./
```

![image](https://user-images.githubusercontent.com/99783474/209544894-7c3aa846-1d85-42f2-8d6a-3810b674a6a5.png)

> create-react-app์ ์ฌ์ฉํ์ฌ ๋ฆฌ์กํธ๋ฅผ ์ค์นํด์ค๋ค. 
>
> ์ด๋ ๊ฒ ํ๋ฉด Babel์ด๋ Webpack ์ค์ ์ด ์ด๋ฏธ ๋ค ๋์ด ์๋ ์ํ์ด๊ธฐ์, ๋ง์ ์๊ฐ์ ์์ํ์ง ์๊ณ  ๋ฆฌ์กํธ ์ฑ์ ์์ํ  ์ ์๋ค. 


#### [โผ The Movie DB API Key ์์ฑํ๊ธฐ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/The%20Movie%20DB%20API%20Key%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [โผ Axios ์ธ์คํด์ค ์์ฑ ๋ฐ ์์ฒญ ๋ณด๋ด๊ธฐ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/The%20Movie%20DB%20API%20%EC%9A%94%EC%B2%AD%EC%9D%84%20%EC%9C%84%ED%95%9C%20Axios%20%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4%20%EC%83%9D%EC%84%B1%20%EB%B0%8F%20%EC%9A%94%EC%B2%AD%20%EB%B3%B4%EB%82%B4%EA%B8%B0.md)

#### โ Axios? 

* Axios : ๋ธ๋ผ์ฐ์ , Node.js๋ฅผ ์ํ Promise API๋ฅผ ํ์ฉํ๋ HTTP ๋น๋๊ธฐ ํต์  ๋ผ์ด๋ธ๋ฌ๋ฆฌ 
* ๋ฒก์ค๋์ ํ๋ก ํธ์๋ ํต์ ์ ์ฝ๊ฒ ํ๊ธฐ ์ํด Ajax์ ๋๋ถ์ด ์ฌ์ฉํ๋ค. 


![image](https://user-images.githubusercontent.com/99783474/209545321-f72ff320-0101-4569-90c8-e21c1cd6e97e.png)

#### โ Axios ์ค์น 

```
npm install axios --save
```

#### โ Axios ์ธ์คํด์คํ ํ๋ ์ด์  
##### : ์ค๋ณต๋ ๋ถ๋ถ์ ๊ณ์ ์๋ ฅํ์ง ์์๋ ๋๊ธฐ ๋๋ฌธ์ 

#### โ Axios ์ธ์คํด์ค ๋ง๋๋ ์์ 

![image](https://user-images.githubusercontent.com/99783474/209545444-a2646031-222b-4b80-834f-1b8af53581f6.png)


#### [โผ Disney Plus ์ ํ๋ฆฌ์ผ์ด์ ์ ์ฒด ๊ตฌ์กฐ ์์ฑํ๊ธฐ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/Disney%20Plus%20%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%20%EC%A0%84%EC%B2%B4%20%EA%B5%AC%EC%A1%B0%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [โผ Styled Component์ ๋ํด ์์๋ณด๊ธฐ ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/00_Create-React-App%EC%9C%BC%EB%A1%9C%20%EB%A6%AC%EC%95%A1%ED%8A%B8%20%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/Styled%20Component%EC%97%90%20%EB%8C%80%ED%95%B4%20%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0.md)

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

#### [1. Nav ์ปดํฌ๋ํธ ์์ฑ ๋ฐ ์คํ์ผ๋ง ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/1.%20%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EC%83%9D%EC%84%B1%20%EB%B0%8F%20%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81.md)

#### [2. ๋ค๋น๊ฒ์ด์ ์ปดํฌ๋ํธ ์คํฌ๋กค ๊ตฌํํ๊ธฐ ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/2.%20%EB%84%A4%EB%B9%84%EA%B2%8C%EC%9D%B4%EC%85%98%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EC%8A%A4%ED%81%AC%EB%A1%A4%20%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0.md)

#### [3. Styled Componenet๋ฅผ ์ด์ฉํ ๋น๋์ค ๋ฐฐ๋ ์์ฑํ๊ธฐ ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/3.%20Styled%20Component%EB%A5%BC%20%EC%9D%B4%EC%9A%A9%ED%95%9C%20%EB%B9%84%EB%94%94%EC%98%A4%20%EB%B0%B0%EB%84%88%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [4. ์ด๋ฏธ์ง ๋ฐฐ๋ ์์ฑํ๊ธฐ ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/4.%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%B0%B0%EB%84%88%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [5. ์ด๋ฏธ์ง UI ์์ฑํ๊ธฐ ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/5.%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20UI%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

#### [6. ๋น๋์ค ๋ฐฐ๋ ์์ฑํ๊ธฐ ](https://github.com/oiosu/Disney-Plus/blob/main/01.%20Disney%20Plus%20%EC%95%B1%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%EC%8B%9C%EC%9E%91/01_Disney%20Plus%20%EA%B5%AC%ED%98%84/6.%20%EB%B9%84%EB%94%94%EC%98%A4%20%EB%B0%B0%EB%84%88%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md)

---





