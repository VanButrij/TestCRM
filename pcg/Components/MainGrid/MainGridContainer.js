import React from 'react';
import { connect } from 'react-redux';
import MainGrid from './MainGrid';
import { chooseUser, setUsers} from '../../Redux/MainGridReducer';
import Axios from '../../../../../Node/my-app/node_modules/axios';

class MainGridAPI extends React.Component {

    componentDidMount() {
        
        Axios.get('http://testcrm/')
        .then(res => {
            let users = res.data;
            let usersCopy = [];
            users.map(u => {
                u.id = parseInt(u.id);
                u.showUser = parseInt(u.showUser);
                u.remoteWorking = parseInt(u.remoteWorking);
                usersCopy.push(u);        
            }
            )

            
            this.props.setUsers(usersCopy);

        })
        
    }

    setUserRemoteWorking = () => {
        
        let choosenUser = this.props.choosenUser;
        // debugger;
        let actionType = 'SET_REMOTE_WORKING';
        let object = { choosenUser, actionType };
        Axios.post( 'http://testcrm/actions/index.php',object
        )
        .then(res => {
            // debugger;
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

    removeUserRemoteWorking = () => {
        let choosenUser = this.props.choosenUser;
        debugger;
        let actionType = 'REMOVE_REMOTE_WORKING';
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



    selectUser =(p) => {
        
        this.props.chooseUser(p);
    }

    render () {
        return (
            <div>
                <MainGrid users={this.props.users}
                          choosenUser={this.props.choosenUser}  
                          selectUser={this.selectUser} 
                          setRemoteWorking={this.setUserRemoteWorking}
                          removeRemoteWorking={this.removeUserRemoteWorking} 
                            />
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

export default connect (mapStateToProps, { chooseUser, setUsers })(MainGridAPI);
