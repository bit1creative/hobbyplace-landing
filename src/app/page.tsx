import { Header } from "./_components/Header";
import { InfoTabs } from "./_components/InfoTabs";

export default function Home() {
  return (
    <>
      <main className="2xl:hidden min-h-screen flex justify-between items-center flex-col bg-home-page bg-cover bg-right md:px-14 2xl:bg-[-450%_100%] bg-no-repeat bg-[#002333]">
        <Header />

        <div className="mx-auto max-w-5xl 2xl:max-w-[1440px]">
          <div className="bg-white w-full py-8 px-6 text-custom-black md:py-10 md:px-8">
            <div className="uppercase font-unbounded font-semibold text-lg md:text-4xl">
              Платформа для пошуку, розвитку та вдосконалення своїх навичок
            </div>

            <hr className="w-full mx-auto my-8 border-custom-gray" />

            <InfoTabs />
          </div>
        </div>

        <div></div>
      </main>

      <main className="hidden min-h-screen 2xl:flex justify-between items-center flex-col bg-[#002333]">
        <div></div>
        <div className="mx-auto flex flex-row items-center justify-center pl-24 h-[800px]">
            <div className="w-1/2 flex flex-col justify-around h-full min-h-screen">

              <div >
                <Header />
              </div>

              <div>

              <div className="text-white uppercase font-unbounded font-semibold text-lg md:text-4xl">
                Платформа для пошуку, розвитку та вдосконалення своїх навичок
              </div>

              <div className="bg-white px-8 py-10 mt-10 2xl:w-[600px]">
                <InfoTabs />
              </div>

              </div>

              <div></div>
          </div>
          <div className="bg-home-page bg-cover w-full h-full min-h-screen"></div>
        </div>

        <div></div>
      </main>
    </>
  );
}
