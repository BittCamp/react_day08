import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import{ red , green , blue , magenta } from '../store/modules/color';

const Color = () => {
    //const[color, setColor] = useState('red'); 이렇게 하는게 아니라... store에서 관리하겠다.
    const color = useSelector(state => state.color.color)
    const dispatch = useDispatch()

    return (
        <div>
            <h1 style={ {color:color} }>컬러 : {color}</h1>
            <p>
                <button onClick={() => dispatch(red())}>RED</button>
                <button onClick={() => dispatch(green())}>GREEN</button>
                <button onClick={() => dispatch(blue())}>BLUE</button>
                <button onClick={() => dispatch(magenta())}>MAGENTA</button>
            </p>
        </div>
    );
};

export default Color;