import React from 'react'
import HeaderCartButton from '../layout/HeaderCartButton';
import MainHeader from '../layout/MainHeader'
import classes from './Store.module.css';

const Store = () => {
  return (
    <header className={classes.header} >
        <MainHeader/>
        <HeaderCartButton/>
    </header>
  )
}

export default Store
