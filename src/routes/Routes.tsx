import Character from "@pages/Character";
import Search from "@pages/Search";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Search />} />
      <Route path="character" element={<Character />} />
    </Routes>
  );
};

export default Router;
