import React from 'react';
import styles from './ModulePage.module.css';
import avatar from '../MainGrid/img/userAva.png';
import {NavLink} from 'react-router-dom';

const ModulePage = (props) => {

    let newUserId = 2;

    let insertName = React.createRef();
    let insertSurname = React.createRef();
    let insertDateOfBirth = React.createRef();
    let insertPosition = React.createRef();
    let insertCity = React.createRef();
    let insertStreet = React.createRef();
    let insertHouse = React.createRef();
    let insertApartment = React.createRef();
    let checkboxRemoteWorking = React.createRef();
    let insertUserRemoteworking = 0;
    let setUserRemoteWorking = () => {
        insertUserRemoteworking = 1;
    }
    let deleteUserRemoteWorking = () => {
        insertUserRemoteworking = 0;
    }


    let onPushNewUser = () => {
        let newUserName = insertName.current.value;
        let newUserSurname = insertSurname.current.value;
        let newUserBirth = insertDateOfBirth.current.value;
        let newUserPosition = insertPosition.current.value;
        let newUserCity = insertCity.current.value;
        let newUserStreet = insertStreet.current.value;
        let newUserHouse = insertHouse.current.value;
        let newUserApartment = insertApartment.current.value;
        let newUserRemoteworking = insertUserRemoteworking;
        props.pushNewUser(newUserId, newUserName, newUserSurname, newUserBirth, newUserPosition, newUserRemoteworking,
                            newUserCity, newUserStreet, newUserHouse, newUserApartment);
    }

    return (
        <div className={styles.rootWrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.header}>Добавление</div>
                <div className={styles.moduleWrapper}>
                    <div className={styles.profileWrapper}>
                        <div className={styles.imageWrapper}>
                            <img src={avatar}/>
                        </div>
                        <div className={styles.infoWrapper}>
                            <div className={styles.mainInfoWrapper}>
                                <div className={styles.nameWrapper}>
                                    <input className={styles.name} ref={insertName} placeholder='Имя' required autoFocus/>
                                </div>
                                <div className={styles.surnameWrapper}>
                                    <input className={styles.surname} ref={insertSurname} placeholder='Фамилия' required/>
                                </div>
                                <div className={styles.birthdayWrapper}>
                                    <input className={styles.birthday} ref={insertDateOfBirth} 
                                           type='date' />
                                </div>
                                <div className={styles.positionWrapper}>
                                    <form>
                                    <select className={styles.position} ref={insertPosition}>
                                        <option>Разработчик</option>
                                        <option>Dev-Ops инженер</option>
                                        <option>Тестировщик</option>
                                        <option>Верстальщик</option>
                                        <option>Менеджер</option>
                                        <option>Тех. поддержка</option>
                                        <option>Стажёр</option>
                                    </select>
                                    </form>
                                    <div className={styles.checkboxRemote}>
                                        { (insertUserRemoteworking === 1 
                                            ? <div><input type='checkbox' onClick={deleteUserRemoteWorking} ref={checkboxRemoteWorking} checked/> <a>Удалёнка</a></div>
                                            : <div><input type='checkbox' onClick={setUserRemoteWorking} ref={checkboxRemoteWorking} /> <a>Удалёнка</a></div>)}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.adressInfoWrapper}>
                                <div className={styles.cityWrapper}>
                                    <input className={styles.city} ref={insertCity} placeholder='Город' required/>
                                </div>
                                <div className={styles.streetWrapper}>
                                    <input className={styles.street} ref={insertStreet} placeholder='Улица' required/>
                                </div>
                                <div className={styles.houseWrapper}>
                                    <input className={styles.house} ref={insertHouse} placeholder='Дом' required/>
                                </div>
                                <div className={styles.roomWrapper}>
                                    <input className={styles.room} ref={insertApartment} placeholder='Квартира' required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.restWrapper}>
                        <div className={styles.addButtonWrapper}>
                            <button >
                                <NavLink to='/MainPage' onClick={onPushNewUser} className={styles.addLink}>Добавить</NavLink> 
                            </button>
                        </div>
                        <div className={styles.undoButtonWrapper}>
                            <button>
                                <NavLink to='/MainPage' className={styles.addLink}>Назад</NavLink> 
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.header}></div>

            </div>
        </div>
        )
}

// pattern='\d[0-9]{2}(\.\d[0-9]{2}(\.\d[0-9]{4}))'

export default ModulePage;