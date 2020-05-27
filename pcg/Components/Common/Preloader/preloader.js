import preloader from './loading.gif';
import React from 'react';

let Preloader = (props) => {
     return props.isFetching ? <img src={preloader}/> : null 
}

export default Preloader;