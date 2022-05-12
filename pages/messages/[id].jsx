import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { GET, DELETE } from "../../utils/api";
import styles from "./[id].module.scss";

const DynamicMessage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [messageData, setMessageData] = useState({});

  const onMessageDelete = (id) => {
    const deleteIt = confirm("Sei sicuro di volerlo cancellare?");

    deleteIt &&
      DELETE("messages", id).then(() => {
        router.push("/");
      });
  };

  useEffect(() => {
    id && localStorage.setItem("id", id);
    // GET(`messages/${id}`).then((data) => setMessageData(data));
    GET(`messages/${localStorage.getItem("id")}`).then((data) =>
      setMessageData(data)
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link href={"/"}>
        <a>🔙</a>
      </Link>
      <div className={styles.wraper__card}>
        <h3>{messageData.text}</h3>
        <p>{messageData.sender}</p>
        <p>{messageData.date}</p>
        <button onClick={() => onMessageDelete(messageData.id)}>x</button>
      </div>
    </div>
  );
};

export default DynamicMessage;
