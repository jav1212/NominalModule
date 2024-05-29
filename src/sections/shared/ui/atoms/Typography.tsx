'use client'

interface ITypographyProps {
    className?: string;
    label: string;
}

const Typography = ({ className, label }: ITypographyProps) => {
    return (
      <p className={className}>
        {label}
      </p>
    )
}

export default Typography