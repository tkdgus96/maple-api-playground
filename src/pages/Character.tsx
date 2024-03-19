import characterApi from "@apis/character";
import {
  CharacterInfoResponse,
  CharacterPopularityResponse,
} from "@customTypes/character";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Character = () => {
  const [searchParams] = useSearchParams();
  const [characterInfo, setCharacterInfo] = useState<
    CharacterInfoResponse | undefined
  >(undefined);
  const [popularityInfo, setPopularityInfo] = useState<
    CharacterPopularityResponse | undefined
  >(undefined);

  useEffect(() => {
    const ocid = searchParams.get("ocid");
    const date = searchParams.get("date");
    if (ocid !== null && date !== null) {
      (async function () {
        const res = await characterApi.getBasicInfo(ocid, date);
        setCharacterInfo(res);
      })();
      (async function () {
        const res = await characterApi.getPopularityInfo(ocid, date);
        setPopularityInfo(res);
      })();
    }
  }, [searchParams.get("ocid")]);
  return (
    characterInfo && (
      <Column>
        {/* {JSON.stringify(a)} */}
        <h4> 캐릭터 정보</h4>
        <div>직업: {characterInfo.character_class}</div>
        <div>전직: {characterInfo.character_class_level}</div>
        <div>경험치: {characterInfo.character_exp}</div>
        <div>경험치%: {characterInfo.character_exp_rate}%</div>
        <div>성별: {characterInfo.character_gender}</div>
        <div>길드: {characterInfo.character_guild_name}</div>
        <div>레벨: {characterInfo.character_level}</div>
        <div>월드: {characterInfo.world_name}</div>
        <div>인기도: {popularityInfo?.popularity}</div>
        <img src={characterInfo.character_image} />
      </Column>
    )
  );
};

export default Character;
