import H1Element from "@/components/headings/H1Element";
import Form from "../components/form/layout/Form";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-8">
      <div className="w-full md:w-1/3 rounded-xl bg-blue-100 min-h-40 flex flex-col gap-6 group overflow-hidden">
        <H1Element
          title={"Onboarding Form"}
          id={"new-user-heading"}
          ariaLabel={"new-user-heading"}
          additionalClasses={
            "w-full bg-blue-400 flex items-center justify-start p-6 px-12"
          }
        />
        <Form />
      </div>
    </section>
  );
}
