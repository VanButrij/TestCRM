import React from 'react';
import { connect } from 'react-redux';
import ModulePage from './ModulePage';
import { setUsers } from '../../Redux/MainGridReducer';
import Axios from 'axios';


class ModulePageAPI extends React.Component {

    pushNewUser = (userId, userName, userSurname, userBirth, userPosition, newUserRemoteworking,
        userCity, userStreet, userHouse, userApartment) => {
        debugger;
        let actionType = 'PUSH_NEW_USER';
        let object = { actionType, userId, userName, userSurname, userBirth, userPosition, newUserRemoteworking,
            userCity, userStreet, userHouse, userApartment };
        Axios.post( 'http://testcrm/actions/index.php',object
        )
        .then(res => {
            debugger;
            let users = res.data;
            let usersCopy = [];
            users.map(u => {
                u.id = parseInt(u.id);
                u.showUser = parseInt(u.showUser);
                u.remoteWorking = parseInt(u.remoteWorking);
                usersCopy.push(u);        
            })
            this.props.setUsers(usersCopy);
            }
          
        ); 
    }

    render () {
        return (
            <div>
                <ModulePage users={this.props.users}
                            pushNewUser={this.pushNewUser}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.MainGrid.users,
        choosenUser: state.MainGrid.choosenUser,
    }
}

export default connect(mapStateToProps, { setUsers })(ModulePageAPI);