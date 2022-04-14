import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import Multiplication from '../../components/ Multiplication';
import Subtraction from '../../components/ Subtraction';
import Division from '../../components/Division';
import Sum from '../../components/Sum';

function Game() {
  const location = useLocation();
  // console.log(location.pathname)
  return (
    <div className={styles.container}>
      {location.pathname.substring(1) === 'sum' && <Sum />}
      {location.pathname.substring(1) === 'subtraction' && <Subtraction />}
      {location.pathname.substring(1) === 'multiplication' && <Multiplication />}
      {location.pathname.substring(1) === 'division' && <Division />}
    </div>
  );
}

export default Game;
