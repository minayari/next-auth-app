import { forwardRef } from "react";

interface inputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  lable: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ lable, error, ...props }, ref) => {
    return (
      <div>
        <label>{lable}</label>
        <input ref={ref} {...props} />
      </div>
    );
  }
);
export default Input;
