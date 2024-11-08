// Button.js
import Link from "next/link";

const Button = ({
  text,
  href,
  target = "_self",
  variant = "main",
  extraParent = "",
  extraChild = "",
  ...props
}) => {
  // Button Styles for main and secondary variants
  const variants = {
    main: `bg-white text-[#fa7070] shadow-lg border-transparent hover:bg-[#fa7070] hover:text-white py-[10px] px-[40px] rounded-full`,
    secondary: `text-[#7052fb] bg-transparent border border-[#7052fb] hover:bg-[#7052fb] hover:text-white py-[12px] px-[30px] rounded-[30px]`,
    orange: `px-5 py-2 text-base rounded-lg bg-[#ffa500] text-black border-none cursor-pointer transition-colors duration-300 hover:bg-[#ffff00]`,
  };

  // Choose the appropriate variant's styles
  const selectedStyles = variants[variant];

  return (
    <div className={`${extraParent}`}>
      {props.type === "submit" ? (
        <button type="submit" {...props} className={`${selectedStyles}`}>
          {text}
        </button>
      ) : (
        <Link
          target={target}
          href={href}
          className={`${selectedStyles} ${extraChild} whitespace-nowrap font-semibold transition-all duration-300 ease-in-out`}
        >
          {text}
        </Link>
      )}
    </div>
  );
};

export default Button;
