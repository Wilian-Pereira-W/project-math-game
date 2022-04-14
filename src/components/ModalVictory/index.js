import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function ModalVictory({setIsModalVictory, setMainTime, setCounter,  mainTime }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);
  
  useEffect(() => {
    clearInterval(mainTime);
    setScore(mainTime);
  }, [mainTime])
  const handleClick = () => {
    setMainTime(30);
    setCounter(0);
    setIsModalVictory(false);
    navigate(location.pathname);
  }
  return (
    <div className={styles.container}>
      <h1>Após muito sacrifício, você conseguiu alcançar o seu objetivo. Parabéns pela conquista!</h1>
      <span>{`Restou: ${score}s`}</span>
      <div className={styles.containerBtn}>
        <button
          onClick={() => handleClick()}
        >
          Jogar Novamente
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

export default ModalVictory;
