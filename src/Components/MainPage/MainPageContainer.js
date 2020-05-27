import React from 'react';
import MainPage from './MainPage';
import { connect } from 'react-redux';
import { setUsers, setSearchKey } from '../../Redux/MainGridReducer';
import Axios from 'axios';


class MainPageAPI extends React.Component {

    searchUsers = (searchKey) => {
        
        
        debugger;
        let actionType = 'SEARCH';
        let object = { actionType, searchKey };
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

    setSearchKey = (searchKey) => {
        this.props.setSearchKey(searchKey);
    }

    
    render () {
        return (
            <MainPage choosenUser={this.props.choosenUser}
                    searchUsers={this.searchUsers} 
                    setSearchKey={this.setSearchKey} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.MainGrid.users,
        choosenUser: state.MainGrid.choosenUser,
        searchKey: state.MainGrid.searchKey,
    }
}

export default connect(mapStateToProps, { setUsers, setSearchKey })(MainPageAPI);