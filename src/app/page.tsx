import H1Element from "@/components/headings/H1Element";
import Form from "../components/form/layout/Form";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-8">
      <div className="w-full md:w-8/12 rounded-xl bg-zinc-900 min-h-40 p-12 flex flex-col gap-6 group border-1 border-zinc-600">
        <H1Element
          title={"Create User"}
          id={"new-user-heading"}
          ariaLabel={"new-user-heading"}
          additionalClasses={undefined}
        />
        <Form />
      </div>
    </section>
  );
}
