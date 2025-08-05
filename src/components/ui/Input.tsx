import { forwardRef } from "react";
import styles from "./Input.module.scss";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lable: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ lable, error, ...props }, ref) => {
    return (
      <div className={styles.inputWrapper}>
        <label>{lable}</label>
        <input ref={ref} {...props} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
export default Input;
