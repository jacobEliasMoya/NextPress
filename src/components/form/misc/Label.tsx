import LabelProps from "@/types/label";

export default function Label({ htmlFor, title }: LabelProps) {
  return (
    <label
      className="w-full font-merriweather font-black text-white text-sm md:text-md"
      htmlFor={htmlFor}
    >
      {title}
    </label>
  );
}
