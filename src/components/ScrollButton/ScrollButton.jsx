import { GoMoveToTop } from "react-icons/go";
import styles from "./ScrollButton.module.css";

const ScrollButton = () => {
  const scrollToNavbar = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className={styles.scrollToNavbar} onClick={scrollToNavbar}>
      <GoMoveToTop size={24} /> 
    </button>
  );
};

export default ScrollButton;
