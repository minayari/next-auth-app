import styles from "./Button.module.scss";

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: buttonProps) => (
  <button className={styles.button} {...props}>
    {children}
  </button>
);

export default Button;
