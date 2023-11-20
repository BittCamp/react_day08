import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { tiger,dog,cat,chick } from '../store/modules/animal';    

const Animal = () => {
    const name = useSelector(state => state.animal.name) //상태변수 를 가져오겠다. index.js보시오
    const crying = useSelector(state => state.animal.crying)
    const dispatch = useDispatch() //액션을 발생시키는 함수를 가져오겠다.
    return (
        <div>
            <h1>동물의 울음소리</h1>
            <h1> {name} {crying} </h1>
            <p>
                <button onClick={()=> dispatch(tiger())}>호랑이</button>
                <button onClick={()=> dispatch(dog())}>강아지</button>
                <button onClick={()=> dispatch(cat())}>고양이</button>
                <button onClick={()=> dispatch(chick())}>병아리</button>
            </p>
        </div>
    );
};

export default Animal;