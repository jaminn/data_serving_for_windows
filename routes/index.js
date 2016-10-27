const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get('/', (req, res) => {
    res.status(200).send("nope");
});
router.get('/menu', (req, res, next) => {
    const example = {
        "name": "python 강좌"
        , "list": [{
                "name": "숫자와 문자"
                , "content": ["숫자", "문자", "여러줄의 표시", "문자연산"]
            }, {
                "name": "변수"
                , "content": ["변수의 선언", "변수가 없다면"]
            }, {
                "name": "주석"
                , "content": ["한 줄 주석", "여러 줄 주석"]
            }, {
                "name": "비교"
                , "content": ["연산자", "비교연산자"]
            }, {
                "name": "UI와 API 그리고 문서보는 법"
                , "content": ["API란?", "레퍼런스와 튜토리얼,자바스크립트의  API"]
            }
               , ]
    };
    res.status(200).send(example);
});
router.get('/tutorial', (req, res, next) => {
    const example = {
        "name": "python 강좌"
        , "list": [
            {
                "quiz": "출력 문제"
                , "content": "Print 함수를 통해서 '누구나 따라 하는 파이썬!'을 출력해보세요."
            }
            , {
                "quiz": "수식 계산 문제"
                , "content": "세가지 이상의 연산자를 복합적으로 사용하여 결과를 출력해보세요."
            }
            , {
                "quiz": "연산 순서 문제"
                , "content": "아래의 연산 결과를 예측해보세요. 3 * 2**6 + 12"
            }
            , {
                "quiz": "연산 순서 문제"
                , "content": "아래의 연산 결과를 예측해보세요. 3 * 2**6 + 12 \n32 + 50 * 10 // 3 \n6 / 3 + 15 * 4"
            }
            , {
                "quiz": "함수 적용 연습"
                , "content": "함수 적응 연습 파이썬에서는 다양한 내장 함수를제공하고 있습니다. 앞서 설명드린 print 함수이기에 우리가 직접 그 기능을 구현하지 않아도 사용할 수 있었던 것입니다."
            }
        ]
    }
    res.status(200).send(example);
});
module.exports = router;