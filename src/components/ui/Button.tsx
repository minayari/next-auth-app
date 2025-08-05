interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: buttonProps) => {
  <button {...props}>{children}</button>;
};

export default Button;
