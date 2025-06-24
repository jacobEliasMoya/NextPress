import H1Element from "@/components/headings/H1Element";
import Form from "../components/form/layout/Form";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-8">
      <div className="w-full md:w-3/5 lg:w-1/3 rounded-xl bg-white min-h-40 p-8 py-12 flex flex-col gap-6 group">
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
