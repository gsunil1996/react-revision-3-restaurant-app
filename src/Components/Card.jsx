import React from 'react'
import styles from "./Card.module.css";


function Card({e}) {
    return (
      <div className={styles.parent}>
        <img src={e.image} />

        <div className={styles.fchild}>
          <div className={styles.name}>{e.name}</div>
          <div className={styles.special}>{e.specials}</div>
          <div className={styles.oneprice}>{e.oneprice}</div>
          <div className={styles.mprice}>
            {" "}
            Min ₹{e.mprice} . Upto {e.time}mins{" "}
          </div>
        </div>

        <div className={styles.schild}>
          <div className={styles.rating}>{e.rating}</div>
          <div className={styles.votes}>{e.votes} votes</div>
          <div className={styles.reviews}>{e.treviews} reviews</div>
        </div>
        <div className={styles.border1}>
          <button className={styles.bton}>Order Online {">"} </button>
        </div>
      </div>
    );
}

export default Card
