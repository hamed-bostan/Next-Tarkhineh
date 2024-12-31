import { Button } from "../ui/button";

export default function MyButton({
  imageSrc,
  iconStyle,
  variant,
  buttonStyle,
  alt,
  label,
}) {
  return (
    <>
      <Button variant={variant} className={buttonStyle}>
        <img src={imageSrc} className={iconStyle} alt={alt} />
        {label}
      </Button>
    </>
  );
}
