import styles, { createGlobalStyle } from 'styled-components';
import BGImage from '../images/freepik.jpg';
//@ts-ignore

export const GlobalStyle = createGlobalStyle` 
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex; 
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', san-serif;
    }
`;

export const Wrapper = styles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        //background-image: linear-gradient(180deg, #fff, #87f1ff);
        background-size: 100%:
        background-clip: text;
        -webkit-backgrond-clip: text;
        -webkit-text-fill-color: white;
        -mox-background-clip: text;
        //-mox-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #0085a3);
        font-size: 90px;
        text-align: center;
        margin: 100px;

    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 2px solid #d38558;
        boarder-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px
    }

    .start {
        max-width: 30px;
    }
`;