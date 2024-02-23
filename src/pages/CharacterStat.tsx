import { toKoreanNumber } from "@/utils/utils";
import {
  ManOutlined,
  QuestionCircleOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import characterApi from "@apis/character";
import unionApi from "@apis/union";
import {
  CharacterDojangResponse,
  CharacterInfoResponse,
  CharacterPopularityResponse,
  CharacterStatResponse,
} from "@customTypes/character";
import { UnionInfoResponse } from "@customTypes/union";
import styled from "@emotion/styled";
import { Carousel, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const StatBox = styled.div`
  width: 48%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #d8dbe3;
`;
const CharacterInfoBox = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #d8dfe6;
  font-size: 0.875rem;
`;
const CharacterClassBox = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #acacb4;
  font-size: 0.875rem;
`;
const CharacterLevelBox = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 0px 0px 12px 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #acacb4;
  font-size: 0.875rem;
`;

const CharacterNameBox = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #3cc3d4;
  font-size: 0.875rem;
`;

const statValueRenderer = (statName: string, stat: CharacterStatResponse) => {
  if (statName === "최대 스탯공격력") {
    return toKoreanNumber(
      stat.final_stat.find((v) => v.stat_name === statName)?.stat_value ?? ""
    );
  }
  if (statName === "재사용 대기시간 감소") {
    return `${stat.final_stat.find((v) => v.stat_name === "재사용 대기시간 감소 (초)")?.stat_value}초  /  ${stat.final_stat.find((v) => v.stat_name === "재사용 대기시간 감소 (%)")?.stat_value}%`;
  }
  if (statName === "공격 속도") {
    return "8단계";
  }
  return `${stat.final_stat.find((v) => v.stat_name === statName)?.stat_value}${statName === "공격력" || statName === "마력" || statName === "스타포스" || statName === "아케인포스" || statName === "어센틱포스" || statName === "방어력" || statName === "상태이상 내성" ? "" : "%"}`;
};

const SubStatRenderer = (stat: CharacterStatResponse) => {
  const statOrder = [
    ["최대 스탯공격력", "데미지"],
    ["최종 데미지", "보스 몬스터 데미지"],
    ["방어율 무시", "일반 몬스터 데미지"],
    ["공격력", "크리티컬 확률"],
    ["마력", "크리티컬 데미지"],
    ["재사용 대기시간 감소", "버프 지속시간"],
    ["재사용 대기시간 미적용", "속성 내성 무시"],
    ["상태이상 추가 데미지", "소환수 지속시간 증가"],
  ];
  return (
    <Column
      style={{
        backgroundColor: "#86929e",
        padding: "0.5rem 0.5rem",
        borderRadius: "8px",
        gap: "0.5rem",
      }}
    >
      {statOrder.map((statPair) => (
        <Row style={{ gap: "0.5rem" }}>
          {statPair.map((statName) => (
            <StatBox style={{ fontSize: "0.75rem" }}>
              <div>
                {statName === "최대 스탯공격력" ? "스탯 공격력" : statName}
              </div>
              <div>{statValueRenderer(statName, stat)}</div>
            </StatBox>
          ))}
        </Row>
      ))}
    </Column>
  );
};

const SubSubStatRenderer = (stat: CharacterStatResponse) => {
  // toggle이 false인 경우 첫번째 상자 render
  const firstBoxOrder = [
    ["방어력", "상태이상 내성"],
    ["이동속도", "점프력"],
    ["스탠스", "공격 속도"],
  ];
  const secondBoxOrder = [
    ["메소 획득량", "스타포스"],
    ["아이템 드롭률", "아케인포스"],
    ["추가 경험치 획득", "어센틱포스"],
  ];
  return (
    <Carousel
      style={{
        backgroundColor: "#86929e",
        padding: "0.5rem 0.5rem 1.25rem 0.5rem",
        borderRadius: "8px",
        gap: "0.5rem",
        display: "flex",
        flexDirection: "column",
        width: "21rem",
      }}
    >
      <Column style={{ padding: "0.5rem 0.5rem" }}>
        {firstBoxOrder.map((statPair) => (
          <Row style={{ gap: "0.5rem" }}>
            {statPair.map((statName) => (
              <StatBox style={{ fontSize: "0.875rem" }}>
                <div>{statName}</div>
                <div>{statValueRenderer(statName, stat)}</div>
              </StatBox>
            ))}
          </Row>
        ))}
      </Column>
      <Column style={{ padding: "0.5rem 0.5rem" }}>
        {secondBoxOrder.map((statPair) => (
          <Row style={{ gap: "0.5rem" }}>
            {statPair.map((statName) => (
              <StatBox style={{ fontSize: "0.875rem" }}>
                <div>{statName}</div>
                <div>{statValueRenderer(statName, stat)}</div>
              </StatBox>
            ))}
          </Row>
        ))}
      </Column>
    </Carousel>
  );
};

const TooltipMessage = () => {
  return (
    <div>
      전투력은 다른 캐릭터와 성장 정도를 편리하게 비교할 수 있도록 보정된
      수치입니다.
    </div>
  );
};

const CharacterBox = ({
  characterInfo,
  unionInfo,
  dojangInfo,
  popularityInfo,
}: {
  characterInfo: CharacterInfoResponse;
  unionInfo: UnionInfoResponse;
  dojangInfo: CharacterDojangResponse;
  popularityInfo: CharacterPopularityResponse;
}) => {
  return (
    <Row style={{ justifyContent: "space-evenly" }}>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <CharacterClassBox>{characterInfo.character_class}</CharacterClassBox>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          <CharacterInfoBox>
            <div>유니온</div>
            <div>{unionInfo.union_level}</div>
          </CharacterInfoBox>
          <CharacterInfoBox>
            <div>무릉도장</div>
            <div>{dojangInfo.dojang_best_floor}층</div>
          </CharacterInfoBox>
          <CharacterInfoBox>
            <div>인기도</div>
            <div>{popularityInfo.popularity}</div>
          </CharacterInfoBox>
        </div>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CharacterLevelBox>
          Lv. {characterInfo.character_level}
        </CharacterLevelBox>
        <img src={characterInfo.character_image} />
        <CharacterNameBox>{characterInfo.character_name}</CharacterNameBox>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "end" }}>
          {characterInfo.character_gender === "남" ? (
            <ManOutlined />
          ) : (
            <WomanOutlined />
          )}
        </div>
        <div>
          <CharacterInfoBox>
            <div>길드</div>
            <div>{characterInfo.character_guild_name}</div>
          </CharacterInfoBox>
        </div>
      </div>
    </Row>
  );
};

const CharacterStat = () => {
  const [searchParams] = useSearchParams();
  const [characterInfo, setCharacterInfo] = useState<
    CharacterInfoResponse | undefined
  >(undefined);
  const [dojangInfo, setDojangInfo] = useState<
    CharacterDojangResponse | undefined
  >(undefined);
  const [unionInfo, setUnionInfo] = useState<UnionInfoResponse | undefined>(
    undefined
  );
  const [popularityInfo, setPopularityInfo] = useState<
    CharacterPopularityResponse | undefined
  >(undefined);
  const [stat, setStat] = useState<CharacterStatResponse | undefined>(
    undefined
  );

  const ocid = searchParams.get("ocid");

  useEffect(() => {
    if (ocid !== null) {
      (async function () {
        const res = await characterApi.getStatInfo(ocid);
        setStat(res);
      })();
      (async function () {
        const res = await characterApi.getBasicInfo(ocid);
        setCharacterInfo(res);
      })();
      (async function () {
        const res = await unionApi.getUnionInfo(ocid);
        setUnionInfo(res);
      })();
      (async function () {
        const res = await characterApi.getDojangInfo(ocid);
        setDojangInfo(res);
      })();
      (async function () {
        const res = await characterApi.getPopularityInfo(ocid);
        setPopularityInfo(res);
      })();
    }
  }, [ocid]);

  return (
    <Column style={{ gap: "0.1rem" }}>
      {characterInfo && unionInfo && dojangInfo && popularityInfo && (
        <CharacterBox
          characterInfo={characterInfo}
          unionInfo={unionInfo}
          dojangInfo={dojangInfo}
          popularityInfo={popularityInfo}
        />
      )}
      <Column
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          backgroundColor: "#3b6272",
          padding: "0.5rem 0.5rem",
          borderRadius: "8px",
          gap: "5rem",
          fontSize: "0.875rem",
        }}
      >
        <div style={{ color: "#c6dee6" }}>전투력</div>
        <div style={{ color: "#f5f4ce" }}>
          {toKoreanNumber(
            stat?.final_stat.find((v) => v.stat_name === "전투력")
              ?.stat_value ?? "0"
          )}
        </div>
        <Tooltip title={<TooltipMessage />}>
          <QuestionCircleOutlined style={{ color: "#c6dee6" }} />
        </Tooltip>
      </Column>
      <Column
        style={{
          backgroundColor: "#86929e",
          padding: "0.5rem 0.5rem",
          borderRadius: "8px",
          gap: "0.5rem",
        }}
      >
        <Row style={{ gap: "0.5rem" }}>
          <StatBox>
            <div>HP</div>
            <div>
              {stat?.final_stat.find((v) => v.stat_name === "HP")?.stat_value}
            </div>
          </StatBox>
          <StatBox>
            <div>MP</div>
            <div>
              {stat?.final_stat.find((v) => v.stat_name === "MP")?.stat_value}
            </div>
          </StatBox>
        </Row>
        <Row style={{ gap: "0.5rem" }}>
          <StatBox>
            <div>STR</div>
            <div>
              {stat?.final_stat.find((v) => v.stat_name === "STR")?.stat_value}
            </div>
          </StatBox>
          <StatBox>
            <div>DEX</div>
            <div>
              {stat?.final_stat.find((v) => v.stat_name === "DEX")?.stat_value}
            </div>
          </StatBox>
        </Row>
        <Row style={{ gap: "0.5rem" }}>
          <StatBox>
            <div>INT</div>
            <div>
              {stat?.final_stat.find((v) => v.stat_name === "INT")?.stat_value}
            </div>
          </StatBox>
          <StatBox>
            <div>LUK</div>
            <div>
              {stat?.final_stat.find((v) => v.stat_name === "LUK")?.stat_value}
            </div>
          </StatBox>
        </Row>
      </Column>
      {stat && SubStatRenderer(stat)}
      {stat && SubSubStatRenderer(stat)}
    </Column>
  );
};

export default CharacterStat;
