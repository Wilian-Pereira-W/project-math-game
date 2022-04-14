import React from 'react';
import styles from './styles.module.scss';

function FeedBack() {

  return (
    <div className={styles.container}>
      <h1>FeedBack</h1>
      <form action="https://formspree.io/f/xyyonpvd" method="post" className={styles.form} >
        <label htmlFor="fname">Nome:</label>
        <input type="text" id="fname" name="fname" placeholder='Digite seu nome' required />
        <label htmlFor="lname">Sobrenome:</label>
        <input type="text" id="lname" name="lname"  placeholder='Digite seu sobrenome' required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"  placeholder='Digite seu email' required/>
        <label htmlFor="w3review">FeedBack:</label>
        <textarea id="w3review" name="w3review" rows="4" cols="50" required />
        <div className={styles.containerBtn}>
          <button type="submit">Enviar</button>
        </div>
      </form>
   
    </div>
  );
}

export default FeedBack;
