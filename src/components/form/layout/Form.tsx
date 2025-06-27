"use client";

import { JSX, useState } from "react";
import Input from "../misc/Input";
import FormField from "../fields/FormField";

interface FormState {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Form() {
  const [formState, setFormState] = useState<FormState>({
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
      return (
        <p className="text-red-600 col-span-full">
          Please Enter Matching Passwords
        </p>
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();

    const { email, password } = formState;

    const res = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    console.log(data);

  };

  return (
    <form
      className="w-full md:grid-cols-2 grid gap-4 px-12 pb-12 pt-6 "
      onSubmit={handleSubmit}
    >
      <FormField
        htmlFor={"email"}
        title={"Please Enter a Email"}
        type={"email"}
        id={"email"}
        name={"email"}
        value={formState.email}
        placeholder="Enter Email"
        onChange={handleChange}
        maxCharacters={undefined}
        additionalClasses={"col-span-full"}
      />

      <FormField
        htmlFor={"password"}
        title={"Please Enter a password"}
        type={"password"}
        id={"password"}
        name={"password"}
        value={formState.password}
        placeholder="Enter password"
        onChange={handleChange}
        maxCharacters={undefined}
        additionalClasses={undefined}
      />

      <FormField
        htmlFor={"confirmPassword"}
        title={"Confirm Your Password"}
        type={"password"}
        id={"confirmPassword"}
        name={"confirmPassword"}
        value={formState.confirmPassword}
        placeholder="Enter password"
        onChange={handleChange}
        maxCharacters={undefined}
        additionalClasses={undefined}
      />

      {passwordConfirmation()}

      <Input
        maxCharacters={0}
        type={"submit"}
        id={""}
        name={""}
        value={"Submit"}
        onChange={undefined}
        additionalClasses={"col-span-full"}
      />
    </form>
  );
}
