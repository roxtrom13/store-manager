import SideBar from "../components/sidebar";
import { Routes, Route } from "solid-app-router";
import Home from "../pages/home";

export default function Default() {
  return (
    <div class="flex flex-row">
      <div>
        <SideBar></SideBar>
      </div>
      <div class="ml-60 w-full">
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </div>
    </div>
  )
}
