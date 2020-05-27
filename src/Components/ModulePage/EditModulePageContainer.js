import React from 'react';
import { connect } from 'react-redux';
import { setUsers, setUsersClear, setSearchKey } from '../../Redux/MainGridReducer';
import EditModulePage from './EditModulePage';
import Axios from 'axios';


class EditModulePageAPI extends React.Component {

    editUser = (userId, userName, userSurname, userBirth, userPosition, newUserRemoteworking,
        userCity, userStreet, userHouse, userApartment, changeKey) => {
        debugger;
        let actionType = 'PUSH_EDITED_USER';
        let searchKey = this.props.searchKey;
        if (changeKey === 'userName') {
            searchKey = userName;
        } else if (changeKey === 'userSurname') {
            searchKey = userSurname;
        } else if (changeKey === 'userPosition') {
            searchKey = userPosition;
        } else if (changeKey === 'userCity') {
            searchKey = userCity;
        }
        setSearchKey (searchKey);
        let object = { actionType, userId, userName, userSurname, userBirth, userPosition, newUserRemoteworking,
            userCity, userStreet, userHouse, userApartment, searchKey };
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
            this.props.setUsersClear(usersCopy);
            }
          
        ); 
    }

    render () {

        return (
            <div>
                <EditModulePage users={this.props.users}
                            choosenUser={this.props.choosenUser}
                            editUser={this.props.editUser}
                            pushEditedUser={this.editUser}
                            searchKey={this.props.searchKey}
                            />
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.MainGrid.users,
        choosenUser: state.MainGrid.choosenUser,
        editUser: state.MainGrid.editUser,
        searchKey: state.MainGrid.searchKey,
    }
}

export default connect(mapStateToProps, { setUsers, setUsersClear, setSearchKey })(EditModulePageAPI);