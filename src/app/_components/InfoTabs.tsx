"use client";

import * as Tabs from "@radix-ui/react-tabs";

export const InfoTabs = () => (
  <Tabs.Root defaultValue="coach">
    <Tabs.List aria-label="Choose your role:" className="flex flex-row gap-4">
      <Tabs.Trigger
        value="coach"
        className="text-[#5E666A] data-[state=active]:text-custom-black data-[state=active]:underline data-[state=active]:underline-offset-4"
      >
        Тренерам
      </Tabs.Trigger>
      <Tabs.Trigger
        value="user"
        className="text-[#5E666A] data-[state=active]:text-custom-black data-[state=active]:underline data-[state=active]:underline-offset-4"
      >
        Користувачам
      </Tabs.Trigger>
    </Tabs.List>

    <Tabs.Content value="coach">
      <p className="font-semibold mt-8">
        Відкрийте нові можливості для своєї практики
      </p>
      <p className="mt-4">
        З Hobby Place ваші тренерські перспективи злетять на нову висоту,
        завдяки легкості залучення клієнтів та ефективній організації роботи,
        розкриваючи безмежні можливості для професійного росту та розвитку.
      </p>
      <div className="mt-8 w-full bg-custom-black rounded text-white text-center p-2">
        <a className="uppercase">Долучитись</a>
      </div>
    </Tabs.Content>

    <Tabs.Content value="user">
      <p className="font-semibold mt-8">
        Зробіть зустрічний крок до ваших інтересів
      </p>
      <p className="mt-4">
        З Hobby Place ваші захоплення перетворяться на шлях самовдосконалення,
        надаючи доступ до широкого спектру хобі та професійних наставників, що
        відкриває нові горизонти для особистісного росту та творчого розвитку.
      </p>
      <div className="mt-8 w-full bg-custom-black rounded text-white text-center p-2">
        <a className="uppercase">перейти до застосунку</a>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);
