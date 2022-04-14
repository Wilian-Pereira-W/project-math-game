import React from 'react';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function ModalDefeat({setIsModalDefeat, setMainTime}) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = () => {
    setMainTime(30);
    setIsModalDefeat(false);
    navigate(location.pathname);
  }
  return (
    <div className={styles.container}>
      <h1>Não foi dessa vez!</h1>
      <div className={styles.containerBtn}>
        <button
          onClick={() => handleClick()}
        >
          Tentar outra vez
        </button>
        <button
          onClick={() => navigate('/')}
        >
          Voltar para o início 
        </button>
      </div>
    </div>
  );
}

export default ModalDefeat;