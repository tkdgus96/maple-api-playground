import Character from "@pages/Character";
import CharacterHyperStat from "@pages/CharacterHyperStat";
import CharacterItemEquipment from "@pages/CharacterItemEquipment";
import CharacterLinkSkill from "@pages/CharacterLinkSkill";
import CharacterStat from "@pages/CharacterStat";
import Search from "@pages/Search";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Search />} />
      <Route path="character">
        <Route index element={<Character />} />
        <Route path="equipment" element={<CharacterItemEquipment />} />
        <Route path="link" element={<CharacterLinkSkill />} />
        <Route path="stat" element={<CharacterStat />} />
        <Route path="hyperStat" element={<CharacterHyperStat />} />
      </Route>
    </Routes>
  );
};

export default Router;
