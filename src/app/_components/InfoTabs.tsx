"use client";

import * as Tabs from "@radix-ui/react-tabs";

export const InfoTabs = () => (
  <Tabs.Root defaultValue="coach">
    <Tabs.List aria-label="Choose your role:" className="flex flex-row gap-4 font-unbounded text-[#5E666A] text-base md:text-2xl md:gap-10">
      <Tabs.Trigger
        value="coach"
        className=" data-[state=active]:text-custom-black data-[state=active]:underline decoration-2 underline-offset-4 md:decoration-4 md:underline-offset-[6px]"
      >
        Тренерам
      </Tabs.Trigger>
      <Tabs.Trigger
        value="user"
        className=" data-[state=active]:text-custom-black data-[state=active]:underline decoration-2 underline-offset-4 md:decoration-4 md:underline-offset-[6px]"
      >
        Користувачам
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="coach" className="font-mulish mt-8 text-custom-black">
      <p className="font-semibold text-base md:text-xl">
        Відкрийте нові можливості для своєї практики
      </p>
      <p className="mt-4 text-sm md:text-xl">
        З Hobby Place ваші тренерські перспективи злетять на нову висоту,
        завдяки легкості залучення клієнтів та ефективній організації роботи,
        розкриваючи безмежні можливості для професійного росту та розвитку.
      </p>
      <div className="mt-8 w-full bg-custom-black rounded text-white text-center p-2 md:mt-14 py-4">
        <a className="uppercase font-unbounded text-base md:text-lg">Долучитись</a>
      </div>
    </Tabs.Content>

    <Tabs.Content value="user" className="font-mulish mt-8 text-custom-black">
      <p className="font-semibold text-base md:text-xl">
        Зробіть зустрічний крок до ваших інтересів
      </p>
      <p className="mt-4 text-sm md:text-xl">
        З Hobby Place ваші захоплення перетворяться на шлях самовдосконалення,
        надаючи доступ до широкого спектру хобі та професійних наставників, що
        відкриває нові горизонти для особистісного росту та творчого розвитку.
      </p>
      <div className="mt-8 w-full bg-custom-black rounded text-white text-center p-2 md:mt-14 py-4">
        <a className="uppercase font-unbounded text-base md:text-lg">перейти до застосунку</a>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);
