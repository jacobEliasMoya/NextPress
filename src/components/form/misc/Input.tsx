import InputType from "@/types/input";

export default function Input({
  maxCharacters,
  type,
  id,
  name,
  value,
  placeholder,
  additionalClasses,
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
      className={`w-full border-1 border-zinc-600 rounded-md flex font-black p-4 placeholder:text-white/30 text-white focus:border-amber-300 placeholder:font-semibold ${additionalClasses ? additionalClasses : null} ${
        type.toLowerCase() == "submit"
          ? " cursor-pointer bg-blue-900 hover:bg-blue-800 active:scale-99 mt-4 border-none "
          : " bg-zinc-900 hover:bg-zinc-800"
      }`}
      onChange={onChange}
    ></input>
  );
}
