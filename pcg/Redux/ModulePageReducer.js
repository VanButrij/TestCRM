import { initialState } from './initialState';


const PUSH_NEW_USER = 'PUSH_NEW_USER';

const ModulePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_NEW_USER:  {
            let stateCopy = {...state};
            stateCopy.users = [...state.users];
            stateCopy.users.push({
                
            });
            debugger;
            return (
                 stateCopy                     
            )
        }
        default: 
            return state;
    }
}

export const pushNewUser = (userId) => ({ type: PUSH_NEW_USER, userId,})

export default ModulePageReducer;