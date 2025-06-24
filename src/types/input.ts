export default interface InputType {
  additionalClasses: string | undefined;
  maxCharacters: number | undefined;
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
