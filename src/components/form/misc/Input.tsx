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
      className={`w-full rounded-md flex font-black p-4 placeholder:text-zinc-400 text-zinc-500 focus:border-amber-300 hover:border-amber-300 active:border-amber-300 placeholder:font-black ${
        additionalClasses ? additionalClasses : null
      } ${
        type.toLowerCase() == "submit"
          ? " cursor-pointer bg-blue-400 hover:bg-blue-500 active:scale-99 mt-4 border-none !text-white"
          : " bg-white hover:bg-zinc-100"
      }`}
      onChange={onChange}
    ></input>
  );
}
