import { For, Show, createSignal }  from "solid-js";
import { Link } from "solid-app-router";
import { Icon } from "solid-heroicons";
import {
  chevronDown,
  chevronUp,
} from "solid-heroicons/solid";

import Store from "../store";

export default function Sidebar() {

  const [selected, setSelected] = createSignal("/");
  const [store, setStore ] = Store;

  function selectItem(item: any) {
    setSelected(item.route);
    setStore("menuItems", menuItem => menuItem.route == item.route, "open", open => !open);
  }

  return (
    <div class="w-60 h-full shadow-md absolute bg-gradient-to-b from-cyan-600 to-emerald-500 overflow-scroll">
      <div class="p-6 inline-flex relative w-full text-center border-2 border-transparent border-b-cyan-700">
        <div class="h-2 w-2 bg-black"></div>
        <p class="font-sans text-2xl font-semibold text-white pl-2">Musicman</p>
      </div>
      <div class="relative py-2 pr-1">
        {/*@ts-ignore*/}
        <For each={store.menuItems}>{
          (item: any) => (
            <>
              <div
                class="border rounded p-3 border-cyan-100 border-none m-1 text-white font-medium text-xl cursor-pointer hover:bg-cyan-600 active:bg-cyan-700 align-middle leading-4"
                classList={{"bg-cyan-700": selected() == item.route}}
                onClick={() => selectItem(item)}
              >
                <Show when={!item.children} fallback={
                  <div class="flex">
                    <Icon path={item.icon} height="18px" class="mr-2">
                    </Icon>
                    <span class="inline">
                      {item.name}
                    </span>
                    {/*@ts-ignore*/}
                    <Show when={!!item.children}>
                      <Icon class="mr-2 ml-auto" path={item.open ? chevronUp : chevronDown} height="18px" />
                    </Show>
                  </div>
                }>
                  <Link href={item.route} class="flex">
                    <Icon path={item.icon} height="18px" class="mr-2">
                    </Icon>
                    <span class="inline">
                      {item.name}
                    </span>
                    {/*@ts-ignore*/}
                    <Show when={!!item.children}>
                      <Icon class="mr-2 ml-auto" path={item.open ? chevronUp : chevronDown} height="18px" />
                    </Show>
                  </Link>
                </Show>
              </div>
              <ul
                class="ml-3 mr-1 block"
                classList={{'hidden': !item.open}}
              >
                {/*@ts-ignore*/}
                <For each={item.children}>{
                  (child: any) => (
                    <Link href={item.route + child.route}>
                      <li class="text-white mb-1 font-semibold py-2 px-3 rounded-md bg-teal-600 transition-all hover:bg-cyan-600 cursor-pointer">
                        {child.name}
                      </li>
                    </Link>
                  )
                }</For>
              </ul>
            </>
          )
        }</For>
      </div>
    </div>
  );
}
