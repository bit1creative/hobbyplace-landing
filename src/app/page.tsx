import { Header } from "./_components/Header";
import { InfoTabs } from "./_components/InfoTabs";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-between items-center flex-col bg-home-page bg-cover bg-right md:px-14 2xl:bg-[-75%_50%] bg-no-repeat 2xl:bg-[#002333]">
      <Header />

      <div className="mx-auto max-w-5xl 2xl:max-w-[1440px]">
        <div className="2xl:hidden bg-white w-full py-8 px-6 text-custom-black md:py-10 md:px-8">
          <div className="uppercase font-unbounded font-semibold text-lg md:text-4xl">
            Платформа для пошуку, розвитку та вдосконалення своїх навичок
          </div>

          <hr className="w-full mx-auto my-8 border-custom-gray" />

          <InfoTabs />
        </div>

        <div className="hidden 2xl:block w-1/2">
          <div className="uppercase font-unbounded font-semibold text-lg md:text-4xl">
            Платформа для пошуку, розвитку та вдосконалення своїх навичок
          </div>

          <div className="bg-white px-8 py-10 mt-10">
            <InfoTabs />
          </div>
        </div>
      </div>

      <div></div>
    </main>
  );
}
