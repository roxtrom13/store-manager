import { lazy } from "solid-js";
import SideBar from "../components/sidebar";
import { Routes, Route } from "solid-app-router";

const Home = lazy(() => import("../pages/home"));
const Sales = lazy(() => import("../pages/sales"));

export default function Default() {
  return (
    <div class="flex flex-row">
      <div>
        <SideBar></SideBar>
      </div>
      <div class="ml-60 w-full">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/sales" component={Sales} />
        </Routes>
      </div>
    </div>
  )
}
