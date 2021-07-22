import {ADD_QUESTION_PAPER,REMOVE_QUESTION_PAPER} from './action.types'

export default (state,action) =>{
    switch(action.type){
        case ADD_QUESTION_PAPER:
            return[...state,action.payload]

        case REMOVE_QUESTION_PAPER:
            return state.filter(todo=>todo.id !== action.payload)
        
        default:
            return state;
    }
}