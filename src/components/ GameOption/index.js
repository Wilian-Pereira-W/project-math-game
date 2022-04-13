import React from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';

function GameOption() {
  const navigation = useNavigate();
  return (
    <div className={styles.container}>
        <button
          value="Sum"
          onClick={({target}) => navigation(`/jogo/${target.value}`)}
        >
          <i class="bi bi-patch-plus"></i>
          <span>Adição</span>
        </button>
        <button
          value="Subtraction"
          onClick={({target}) => navigation(`/jogo/${target.value}`)}
        >
          <i class="bi bi-dash-circle-dotted"></i>
          <span>Subtração</span>
        </button>
        <button
          value="Multiplication"
          onClick={({target}) => navigation(`/jogo/${target.value}`)}
        >
          <i class="bi bi-x-octagon"></i>
          <span>Multiplicação</span>
        </button>
        <button
          value="Division"
          onClick={({target}) => navigation(`/jogo/${target.value}`)}
        >
          <i class="bi bi-slash-square"></i>
          <span>Divisão</span>
        </button>
    </div>
  );
}

export default GameOption;