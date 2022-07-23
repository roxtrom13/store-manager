import { For, Show, createSignal }  from "solid-js";
import { createStore }  from "solid-js/store";
import { Icon } from "solid-heroicons";
import {
  home,
  shoppingBag,
  collection,
  cog,
  bookOpen,
  chevronDown,
  chevronUp,
} from "solid-heroicons/solid";

export default function Sidebar() {

  const [selected, setSelected] = createSignal("/");

  function selectItem(item: any) {
    setSelected(item.route);
    setMenuItems((menuItem: any) => menuItem.route == item.route, "open", open => !open);
  }

  const [menuItems, setMenuItems] = createStore([
    {
      name: "Inicio",
      route: "/",
      open: false,
      icon: home,
      children: null,
    },
    {
      name: "Ventas",
      route: "/sales",
      open: false,
      icon: shoppingBag,
      children: [
        {
          name: "Crear",
          route: "/new",
        },
        {
          name: "Registro",
          route: "/",
        },
      ],
    },
    {
      name: "Inventario",
      route: "/inventory",
      open: false,
      icon: collection,
      children: [
        {
          name: "Categorías",
          route: "/categories",
        },
        {
          name: "Productos",
          route: "/products",
        },
      ],
    },
    {
      name: "Operaciones",
      route: "/operations",
      open: false,
      icon: cog,
      children: [
        {
          name: "Devoluciones y anulaciones",
          route: "/devolutions",
        },
      ],
    },
    {
      name: "Guías",
      route: "/guides",
      open: false,
      icon: bookOpen,
      children: [
        {
          name: "Guías de ingresos",
          route: "/income",
        },
        {
          name: "Guías de salidas",
          route: "/departure",
        },
      ],
    },

  ])

  return (
    <div class="w-60 h-full shadow-md absolute bg-gradient-to-b from-cyan-600 to-emerald-500 overflow-scroll">
      <div class="p-6 inline-flex relative w-full text-center border-2 border-transparent border-b-cyan-700">
        <div class="h-2 w-2 bg-black"></div>
        <p class="font-sans text-2xl font-semibold text-white pl-2">Musicman</p>
      </div>
      <div class="relative py-2 pr-1">
        {/*@ts-ignore*/}
        <For each={menuItems}>{
          (item: any) => (
            <>
              <div
                class="border rounded p-3 border-cyan-100 border-none m-1 text-white font-medium text-xl cursor-pointer hover:bg-cyan-600 active:bg-cyan-700 flex align-middle leading-4 transition-all ease-in-out duration-500"
                classList={{"bg-cyan-700": selected() == item.route}}
                onClick={() => selectItem(item)}
              >
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
              {/*TODO: It needs to do animations*/}
              <ul
                class="ml-3 mr-1 block"
                classList={{'hidden': !item.open}}
              >
                {/*@ts-ignore*/}
                <For each={item.children}>{
                  (child: any) => (
                    <li class="text-white mb-1 font-semibold py-2 px-3 rounded-md bg-teal-600 transition-all hover:bg-cyan-600 cursor-pointer">
                      {child.name}
                    </li>
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
