import styles from "@styles/TechList.module.css";

export default function TechList(props) {
  return (
    <ul
      className={styles["tech-list"]}
      style={{
        color: props.color,
        justifyContent: props.justify === "right" ? "flex-end" : "flex-start",
      }}
    >
      {props.tech_list_array.map((tech) => {
        return (
          <li
            key={tech}
            style={{
              margin:
                props.justify === "right"
                  ? "0px 0px 5px 20px"
                  : "0px 20px 5px 0px",
            }}
          >
            {tech}
          </li>
        );
      })}
      <style jsx>{`
        @media (max-width: 768px) {
          .${styles["tech-list"]} li {
            margin: ${props.justify === "right"
              ? "0px 0px 5px 10px"
              : "0px 10px 5px 0px"};
          }
        }
      `}</style>
    </ul>
  );
}
