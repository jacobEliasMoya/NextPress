import LabelProps from "@/types/label";

export default function Label({ htmlFor, title }: LabelProps) {
  return (
    <label
      className="w-full font-merriweather font-black text-blue-600 text-sm md:text-md"
      htmlFor={htmlFor}
    >
      {title}
    </label>
  );
}
