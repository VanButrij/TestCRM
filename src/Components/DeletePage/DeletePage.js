import React from 'react';
import styles from './DeletePage.module.css';
import { NavLink } from 'react-router-dom';

const DeletePage = (props) => {

    let deleteUser = () => {
        props.deleteUser(props.choosenUser);
    }

    return (
        <div className={styles.rootDeleteWrapper}>
            <div className={styles.mainDeleteWrapper}>
                <div className={styles.headerDelete}>Подтверждение</div>
                <div className={styles.contentDelete}>
                    <div className={styles.attWrapper}>
                        <a className={styles.att}>Вы уверены в своём желании удалить работника из базы данных?</a>
                    </div>
                    <div className={styles.buttsWrapper}>
                        <div className={styles.delButtonWrapper}>
                            <button className={styles.delButton}>
                                <NavLink className={styles.link} to='/MainPage' onClick={deleteUser} >Удалить</NavLink> 
                                </button>
                        </div>
                        <div className={styles.undoButtonWrapper}>
                            <button className={styles.undoButton}>
                                <NavLink className={styles.link} to='/MainPage'>Отмена</NavLink>                           
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.headerDelete}></div>
            </div>
        </div>
    )
}

export default DeletePage;