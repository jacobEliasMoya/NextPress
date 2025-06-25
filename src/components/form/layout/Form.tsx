"use client";

import { FormEvent, JSX, useState } from "react";
import Input from "../misc/Input";
import FormField from "../fields/FormField";

interface FormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Form() {
  const maxusernameChars = 20;

  const [formState, setFormState] = useState<FormState>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const passwordConfirmation = (): JSX.Element => {
    const { password, confirmPassword } = formState;
    if (password === confirmPassword && password.length > 0) {
      return <p className="text-green-600 col-span-full">Passwords Match</p>;
    } else {
      return <p className="text-red-600 col-span-full">Please Enter Matching Passwords</p>;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="w-full md:grid-cols-2 grid gap-4 px-12 pb-12 pt-6 " onSubmit={handleSubmit}>
      <FormField
        maxCharacters={maxusernameChars}
        htmlFor={"username"}
        title="Enter Username"
        type={"text"}
        id={"username"}
        name={"username"}
        value={formState.username}
        placeholder={`Max ${maxusernameChars} Character(s)`}
        onChange={handleChange} additionalClasses={undefined}      />

      <FormField
        htmlFor={"email"}
        title={"Please Enter a Email"}
        type={"email"}
        id={"email"}
        name={"email"}
        value={formState.email}
        placeholder="Enter Email"
        onChange={handleChange}
        maxCharacters={undefined} additionalClasses={undefined}      />

      <FormField
        htmlFor={"password"}
        title={"Please Enter a password"}
        type={"password"}
        id={"password"}
        name={"password"}
        value={formState.password}
        placeholder="Enter password"
        onChange={handleChange}
        maxCharacters={undefined} additionalClasses={undefined}      />

      <FormField
        htmlFor={"confirmPassword"}
        title={"Confirm Your Password"}
        type={"password"}
        id={"confirmPassword"}
        name={"confirmPassword"}
        value={formState.confirmPassword}
        placeholder="Enter password"
        onChange={handleChange}
        maxCharacters={undefined} additionalClasses={undefined}      />

      {passwordConfirmation()}

      <Input
        maxCharacters={0}
        type={"submit"}
        id={""}
        name={""}
        value={"Submit"}
        onChange={undefined} additionalClasses={'col-span-full'}      />
    </form>
  );
}
