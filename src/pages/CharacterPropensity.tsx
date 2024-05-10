import characterApi from "@apis/character";
import { CharacterPropensityResponse } from "@customTypes/character";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const toRadians = (angle: number) => {
  return angle * (Math.PI / 180);
};

type Propensity =
  | "sensibility_level"
  | "charisma_level"
  | "charm_level"
  | "handicraft_level"
  | "willingness_level"
  | "insight_level";

const propensityDiagram: {
  name: Propensity;
  displayName: string;
  degrees: number;
}[] = [
  {
    name: "sensibility_level",
    displayName: "감성",
    degrees: 30,
  },
  {
    name: "charisma_level",
    displayName: "카리스마",
    degrees: 90,
  },
  {
    name: "charm_level",
    displayName: "매력",
    degrees: 150,
  },
  {
    name: "handicraft_level",
    displayName: "손재주",
    degrees: 210,
  },
  {
    name: "willingness_level",
    displayName: "의지",
    degrees: 270,
  },
  {
    name: "insight_level",
    displayName: "통찰력",
    degrees: 330,
  },
];

const CharacterPropensity = () => {
  const [propensity, setPropensity] = useState<
    CharacterPropensityResponse | undefined
  >(undefined);

  const [searchParams] = useSearchParams();

  const BOX_SIZE = 500;
  const ocid = searchParams.get("ocid");
  const date = searchParams.get("date");

  useEffect(() => {
    if (ocid !== null) {
      (async function () {
        const res = await characterApi.getPropensityInfo(ocid, date);
        setPropensity(res);
      })();
    }
  }, [ocid]);

  // 각도 설정
  const radius = BOX_SIZE * 0.35;
  const textRadius = BOX_SIZE * 0.45;

  const propensityPath = propensityDiagram.reduce((acc, curr) => {
    acc += `${(Math.cos(toRadians(curr.degrees)) * radius * (propensity?.[curr.name] ?? 100)) / 100 + BOX_SIZE / 2},${(-1 * Math.sin(toRadians(curr.degrees)) * radius * (propensity?.[curr.name] ?? 100)) / 100 + BOX_SIZE * 0.5} `;
    return acc;
  }, "");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h4>성향 정보</h4>
      <svg width={BOX_SIZE} height={BOX_SIZE}>
        <polygon points={propensityPath} fill="none" stroke="#2596be" />
        {propensityDiagram.map((v) => (
          <circle
            cx={
              (Math.cos(toRadians(v.degrees)) *
                radius *
                (propensity?.[v.name] ?? 100)) /
                100 +
              BOX_SIZE / 2
            }
            cy={
              (-1 *
                Math.sin(toRadians(v.degrees)) *
                radius *
                (propensity?.[v.name] ?? 100)) /
                100 +
              BOX_SIZE * 0.5
            }
            r={5}
            stroke="#2596be"
            strokeWidth={2.5}
            fill="none"
          />
        ))}
        {propensityDiagram.map((v) => (
          <text
            x={Math.cos(toRadians(v.degrees)) * textRadius + BOX_SIZE * 0.5}
            y={
              -1 * Math.sin(toRadians(v.degrees)) * textRadius +
              BOX_SIZE * 0.512
            }
            textAnchor="middle"
          >
            {v.displayName} Lv {propensity?.[v.name]}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default CharacterPropensity;
