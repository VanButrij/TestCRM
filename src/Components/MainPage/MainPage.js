import React from 'react';
import styles from './MainPage.module.css';
import MainGridContainer from '../MainGrid/MainGridContainer';
import {NavLink} from 'react-router-dom';

const MainPage = (props) => {

    let searchListener = React.createRef();
    

    let setSearchKey = () => {
        let searchKey = searchListener.current.value;
        props.setSearchKey(searchKey);
        props.searchUsers(searchKey);
    }

    let resetSearchKey = () => {
        let searchKey = '';
        props.setSearchKey(searchKey);
        props.searchUsers(searchKey);
    }

    return (
        <div className={styles.rootWrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.header}>Главная страница</div>
                <div className={styles.searchWrapper}>
                    <div className={styles.searchContainer}>
                        <form>
                            <input ref={searchListener} placeholder='Поиск' autoFocus></input>
                            <button type='reset' onClick={setSearchKey}>Найти</button>
                            <button type='reset' onClick={resetSearchKey}>Очистить</button>
                        </form>
                    </div>
                </div>
                <div className={styles.funcWrapper}>
                    <div className={styles.funcContainer}>
                    <div className={styles.addButtonWrapper}>
                        <button>
                            <NavLink to='/ModulePage' className={styles.addLink}>Добавить</NavLink> 
                        </button>
                    </div>
                    <div className={styles.editButtonWrapper}>
                        {props.choosenUser === 0 
                            ? <button disabled>Редактировать</button>
                            : <button><NavLink to='/EditModulePage' className={styles.addLink}>Редактировать</NavLink> </button>}
                    </div>
                    <div className={styles.removeButtonWrapper}>
                        {props.choosenUser === 0
                            ? <button disabled>Удалить</button>
                            : <button><NavLink to='/DeletePage' className={styles.addLink}>Удалить</NavLink></button>}
                    </div>
                    </div>
                </div>
                <div className={styles.gridWrapper}>
                    <MainGridContainer />
                </div>
                <div className={styles.header}></div>
            </div>
        </div>
    )
}

export default MainPage;