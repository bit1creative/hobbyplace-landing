import { InfoTabs } from "./_components/InfoTabs";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-home-page bg-cover bg-right">
      <div className="bg-white w-full py-8 px-6 text-custom-black">
        <div>Платформа для пошуку, розвитку та вдосконалення своїх навичок</div>

        <hr className="w-full mx-auto my-8 border-custom-gray" />

        <InfoTabs />
      </div>
    </main>
  );
}
