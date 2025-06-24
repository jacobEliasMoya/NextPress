import Input from "../misc/Input";
import Label from "../misc/Label";
import FormFieldTypes from "@/types/formfield";

export default function FormField({
  htmlFor,
  title,
  type,
  id,
  name,
  value,
  placeholder,
  maxCharacters,
  onChange,
}: FormFieldTypes) {
  return (
    <div className="flex flex-col gap-4 w-full group">
      <Label htmlFor={htmlFor} title={title} />

      <Input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxCharacters={maxCharacters}
      />
    </div>
  );
}
