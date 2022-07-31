import { For, Show, createSignal }  from "solid-js";
import { Link } from "solid-app-router";
import { Icon } from "solid-heroicons";
import {
  chevronDown,
  chevronUp,
  musicNote,
} from "solid-heroicons/solid";

import Store from "../store";
import { MenuItem } from "../types";

export default function Sidebar() {

  const [selected, setSelected] = createSignal("/");
  const [store, setStore ] = Store;

  function selectItem(item: MenuItem) {
    setSelected(item.route);
    setStore("menuItems", menuItem => menuItem.route == item.route, "open", open => !open);
  }

  return (
    <div class="fixed left-0 top-0 bg-gradient-to-b from-cyan-600 to-emerald-500 h-full w-24 md:w-60 z-50 transition-all ease-linear">
      <div class="p-6 flex h-16 w-full items-center">
        <Icon class="text-white" path={musicNote} height="1.5rem"></Icon>
        <p class="hidden md:block font-sans text-2xl font-semibold text-white pl-2">Musicman</p>
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
                    <span class="hidden md:inline">
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
                    <span class="hidden md:inline">
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
                      {/* TODO: change to icons when sm and <md */}
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
