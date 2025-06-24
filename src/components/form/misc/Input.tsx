import InputType from "@/types/input";

export default function Input({
  maxCharacters,
  type,
  id,
  name,
  value,
  placeholder,
  onChange,
}: InputType) {
  return (
    <input
      maxLength={maxCharacters}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={`w-full rounded-md flex font-black p-4 placeholder:text-white/30 text-white focus:border-amber-300 placeholder:font-semibold ${
        type.toLowerCase() == "submit"
          ? " cursor-pointer bg-blue-500 hover:bg-blue-600 active:scale-99 mt-4 "
          : " bg-zinc-900 hover:bg-zinc-800"
      }`}
      onChange={onChange}
    ></input>
  );
}
