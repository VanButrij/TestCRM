
export let initialState = {
    users: [

    ],
    choosenUser: 0,
    editUser: null,
    searchKey: '',
  };

const SET_USERS = 'SET_USERS';
const SET_USERS_CLEAR = 'SET_USERS_CLEAR';
const CHOOSE_USER = 'CHOOSE_USER';
const SET_SEARCH_KEY = 'SET_SEARCH_KEY';



const MainGridReducer = (state = initialState, action) => {

    // debugger;
    switch (action.type) {
        case SET_USERS: {
            // debugger;
            let stateCopy = {...state};
            stateCopy.users = action.data;
            return stateCopy;
        }
        case SET_SEARCH_KEY: {
            debugger;
            let stateCopy = {...state};
            stateCopy.searchKey = action.searchKey;
            return stateCopy;
        }
        case SET_USERS_CLEAR: {
            // debugger;
            let stateCopy = {...state};
            stateCopy.users = action.data;
            stateCopy.choosenUser = 0;
            stateCopy.editUser = {};
            return stateCopy;
        }
        case CHOOSE_USER: {
            let stateCopy = {...state};
            stateCopy.users = [...state.users];
            stateCopy.users.map( u => {
                if (u.id === action.choosenUser) {
                    stateCopy.editUser = {...u};
                }
            })
            
                stateCopy.choosenUser = action.choosenUser;

            return ( stateCopy );
                
           }

        default: 
            return state;
    }
}

export const setUsers = (data) => ({ type: SET_USERS, data});
export const setUsersClear = (data) => ({ type: SET_USERS_CLEAR, data});
export const chooseUser = (choosenUser) => ({ type: CHOOSE_USER, choosenUser});
export const setSearchKey = (searchKey) => ({ type: SET_SEARCH_KEY, searchKey})




export default MainGridReducer;