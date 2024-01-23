import { useEffect, useState } from "react";
import characterApi from "./api/character";
import { CharacterInfoResponse } from "types/character";

// 두 단어로 떨어져있는 겨우

function App() {
  const [name, setName] = useState("");

  const [ocid, setOcid] = useState(null);

  const [characterInfo, setCharacterInfo] = useState<
    CharacterInfoResponse | undefined
  >(undefined);

  const handleChange = (input: string) => {
    setName(input);
  };

  const handleOk = async () => {
    const res = await characterApi.getOcid(name);
    setOcid(res.ocid);
  };

  useEffect(() => {
    console.log(ocid);
    if (ocid !== null)
      (async function () {
        const res = await characterApi.getBasicInfo(ocid);
        setCharacterInfo(res);
      })();
  }, [ocid]);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      {/* <div style={{ display: "flex", flexDirection: "column" }}>SideBar</div> */}
      <div>
        <h1>메이플스토리 Open API를 실험해볼 수 있는 공간입니다.</h1>
        <div>
          캐릭터명 입력:
          <input value={name} onChange={(e) => handleChange(e.target.value)} />
          <button type="button" onClick={() => handleOk()}>
            입력
          </button>
        </div>
        {characterInfo && (
          <>
            <h4> 캐릭터 정보</h4>
            <div>직업: {characterInfo.character_class}</div>
            <div>전직: {characterInfo.character_class_level}</div>
            <div>경험치: {characterInfo.character_exp}</div>
            <div>경험치%: {characterInfo.character_exp_rate}%</div>
            <div>성별: {characterInfo.character_gender}</div>
            <div>길드: {characterInfo.character_guild_name}</div>
            <div>레벨: {characterInfo.character_level}</div>
            <div>월드: {characterInfo.world_name}</div>
            <img src={characterInfo.character_image} />
          </>
        )}
        <h3>Data based on NEXON Open API</h3>
      </div>
    </div>
  );
}

export default App;

