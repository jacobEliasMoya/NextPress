import Headings from "@/types/heading";

export default function H1Element({
  title,
  ariaLabel,
  id,
  additionalClasses,
}: Headings) {
  return (
    <h1
      className={`font-merriweather font-black text-white text-lg md:text-xl lg:text-xl ${additionalClasses}`}
      id={id}
      aria-label={ariaLabel}
    >
      {title}
    </h1>
  );
}
