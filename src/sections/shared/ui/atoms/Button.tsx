'use client';

const Button = ({ label, className, ...nativeProps }: IButtonProps) => {
  return (
    <button
      className={className}
      {...nativeProps}
    >
      {label}
    </button>
  )
}

export default Button

interface IButtonProps extends React.ComponentProps<'button'> {
  label: string;
  className?:string;
}