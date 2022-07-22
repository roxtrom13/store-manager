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

  ]

  return (
    <div class="w-60 h-full shadow-md absolute bg-gradient-to-b from-cyan-600 to-emerald-500 overflow-scroll">
      <div class="p-6 inline-flex relative w-full text-center border-2 border-transparent border-b-cyan-700">
        <div class="h-2 w-2 bg-black"></div>
        <p class="font-sans text-2xl font-semibold text-white pl-2">Musicman</p>
      </div>
      <div class="relative py-2 pr-1">
      {/*SELECTED COLOR: CYAN-700*/}
        <For each={menuItems}>{
          (item) => (
            <>
              <div
                class="border rounded p-3 border-cyan-100 border-none m-1 text-white font-semibold text-xl cursor-pointer hover:bg-cyan-600 active:bg-cyan-700"
                classList={{"bg-cyan-700": selected() == item.route}}
                onClick={() => setSelected(item.route)}
              >
                {item.name}
              </div>
              <ul class="ml-3 mr-1">
                <For each={item.children}>{
                  (child) => (
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
