export default function Navbar() {
  return (
    <div class="w-60 h-full bg-white shadow-md absolute">
      <div class="p-6 bg-gray-100 inline-flex relative w-full">
        <div class="h-2 w-2 bg-black"></div>
        <span>Musicman</span>
      </div>
      <ul class="relative">
        <li class="relative">Inicio</li>
        <li class="relative">Inventario</li>
        <li class="relative">Ventas</li>
        <li class="relative">Devoluciones</li>
      </ul>
    </div>
  );
}
