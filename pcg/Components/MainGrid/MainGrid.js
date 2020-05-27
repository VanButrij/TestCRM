import React from 'react';
import styles from './MainGrid.module.css';
import avatar from './img/userAva.png';

let i = 2;

const MainGrid = (props) => {
    return (
        <div className={styles.gridWrapper}>
            <div className={styles.headWrapper}>
                <div className={styles.previewHead}>
                    <a>Превью</a>
                </div>
                <div className={styles.nameHead}>
                    <a>Имя</a>
                </div>
                <div className={styles.surnameHead}>
                    <a>Фамилия</a>
                </div>
                <div className={styles.birthdayHead}>
                    <a>Дата Рождения</a>
                </div>
                <div className={styles.ageHead}>
                    <a>Возраст</a>
                </div>
                <div className={styles.positionHead}>
                    <a>Должность</a>
                </div>
                <div className={styles.remoteHead}>
                    <a>Удалённая работа</a>
                </div>
                <div className={styles.adressHead}>
                    <a>Адрес</a>
                </div>
            </div>
            <div className={styles.infoWrapper}>
                <div className={styles.flexWrapper}>
                {props.users.map(u => {
                    // debugger;
                    if (u.showUser === 1) {
                        return (
                            <div className={styles.userWrapper} id={props.choosenUser === u.id && styles.inner}
                            onClick={(e) => { props.selectUser(u.id) }}   >
                            <div className={styles.preview}>
                                <img src={avatar} />
                            </div>
                            <div className={styles.name}>
                                <a>{u.firstName}</a>
                            </div>
                            <div className={styles.surname}>
                                <a>{u.lastName}</a>
                            </div>
                            <div className={styles.birthday}>
                                <a>{u.dateOfBirth}</a>
                            </div>
                            <div className={styles.age}>
                                <a>{u.age}</a>
                            </div>
                            <div className={styles.position}>
                                <a>{u.position}</a>
                            </div>
                            <div className={styles.remoteWrapper}>
                            <div className={styles.remote}>
                                {props.choosenUser === u.id 
                                    ? ((u.remoteWorking === 0
                                        ? <input className={styles.remoteWorking} value={u.remoteWorking} 
                                            onClick={(e) => { props.setRemoteWorking(u.id) }} />
                                        : <input className={styles.remoteWorking} value={u.remoteWorking}
                                            onClick={(e) => { props.removeRemoteWorking(u.id) }} />))
                                    : ((u.remoteWorking === 0
                                        ? <input className={styles.remoteWorking}  value={u.remoteWorking} disabled
                                            onClick={(e) => { props.setRemoteWorking(u.id) }} />
                                        : <input className={styles.remoteWorking} value={u.remoteWorking} disabled
                                            onClick={(e) => { props.removeRemoteWorking(u.id) }} />))}
                            </div>
                            </div>
                            <div className={styles.adress}>
                                <a>{'г. ' + u.city + ', ул. ' + u.street + ', дом ' + u.house + ', кв. ' + u.apartment}</a>
                            </div>
                        </div>
                        )
                    }
                }
                    
)}
                </div>
            </div>
        </div>
    )
}

export default MainGrid;