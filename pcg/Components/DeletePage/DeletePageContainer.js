import React from 'react';
import DeletePage from './DeletePage';
import { connect } from 'react-redux';
import { setUsers } from '../../Redux/MainGridReducer';
import Axios from 'axios';


class DeletePageAPI extends React.Component {

    deleteUser = () => {
        let choosenUser = this.props.choosenUser;
        debugger;
        let actionType = 'DELETE_USER';
        let object = { choosenUser, actionType };
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
    
    render() {
        return (
            <DeletePage users={this.props.users}
                        choosenUser={this.props.choosenUser}
                        deleteUser={this.deleteUser}/>
        )
    }
}

let mapStateToPrors = (state) => {
    return {
        users: state.MainGrid.users,
        choosenUser: state.MainGrid.choosenUser,
    }
}

export default connect(mapStateToPrors, { setUsers })(DeletePageAPI);