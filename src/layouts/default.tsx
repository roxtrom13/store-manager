import { lazy } from "solid-js";
import SideBar from "../components/sidebar";
import Topbar from "../components/topbar";
import { Routes, Route } from "solid-app-router";

const Home = lazy(() => import("../pages/home"));
const Sales = lazy(() => import("../pages/sales"));

export default function Default() {
  return (
    <div class="relative min-h-screen w-full">
      <SideBar />
      <Topbar />
      <section class="p-2 relative min-h-screen left-24 md:left-60 w-[calc(100%-6rem)] md:w-[calc(100%-15rem)] z-10 bg-pink-400">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/sales" component={Sales} />
        </Routes>
      </section>
    </div>
  )
}
