import { combineReducers } from "redux";

import color from './modules/color'; //.js는 생략가능
import count from './modules/count';
import animal from './modules/animal';

export default combineReducers({
    color, //color: color
    count,
    animal
})