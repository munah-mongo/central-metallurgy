export function TypographyP({name, color}: any) {
    return (
      <p className={`leading-7 [&:not(:first-child)]:mt-1 ${color}`}>
        { name }
      </p>
    )
  }
  