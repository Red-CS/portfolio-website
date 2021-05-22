import styles from "@styles/VentureListObject.module.css";

function VentureListObject(props) {
  return (
    <div className={styles["venture-object"]}>
      <h3 className={styles["venture-name"]}>{props.ventureName}</h3>
      <ul className={styles["venture-list"]}>
        <li className={styles["venture-list-li"]}>{props.listItem1}</li>
        <li className={styles["venture-list-li"]}>{props.listItem2}</li>
        <li className={styles["venture-list-li"]}>{props.listItem3}</li>
        <li className={styles["venture-list-li"]}>{props.listItem4}</li>
        <li className={styles["venture-list-li"]}>{props.listItem5}</li>
      </ul>
    </div>
  );
}

export default VentureListObject;
