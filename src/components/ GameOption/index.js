import React from 'react';
import styles from './styles.module.scss';

function GameOption() {
  return (
    <div >
        <button>
          <i class="bi bi-patch-plus"></i>
          <span>Adição</span>
        </button>
        <button>
          <i class="bi bi-dash-circle-dotted"></i>
          <span>Subtração</span>
        </button>
        <button>
          <i class="bi bi-x-octagon"></i>
          <span>Multiplicação</span>
        </button>
        <button>
          <i class="bi bi-slash-square"></i>
          <span>Divisão</span>
        </button>
    </div>
  );
}

export default GameOption;