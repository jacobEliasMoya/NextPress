import LabelProps from "@/types/label";

export default function Label({ htmlFor, title }: LabelProps) {
  return (
    <label
      className="w-full font-merriweather font-black text-zinc-700 text-sm md:text-lg"
      htmlFor={htmlFor}
    >
      {title}
    </label>
  );
}
