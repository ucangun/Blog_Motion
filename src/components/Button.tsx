import { Link } from "react-router-dom";

interface ButtonType {
  children: string;
  to?: string;
  type: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
}

const MyButton = ({ children, to, type, onClick }: ButtonType) => {
  const base =
    "rounded-[.5rem] bg-[#bbb2cd] px-[1.2rem] py-[.6rem] text-md font-[500]  text-[#111]shadow-sm dark:bg-[#bbb2cd] dark:text-[#111] ";

  const styles = {
    primary: base,
    secondary: "underline tracking-normal",
    tertiary:
      "bg-[#111] text-white text-sm inline-block py-[.5rem] px-2 rounded-[.5rem] ",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
};

export default MyButton;
