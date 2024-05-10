import { Menu, MenuProps } from "antd";
import { NavLink, useSearchParams } from "react-router-dom";

const NavigationBar = () => {
  const [searchParams] = useSearchParams();
  const ocid = searchParams.get("ocid");
  const date = searchParams.get("date") ? searchParams.get("date") : undefined;

  const items: MenuProps["items"] = [
    {
      label: <NavLink to="">검색</NavLink>,
      key: "search",
    },
    {
      label: "캐릭터 정보",
      key: "character",
      children: [
        {
          label: (
            <NavLink
              to={`character?ocid=${ocid}${date ? `&date={${date}}` : ""}`}
            >
              기본 정보
            </NavLink>
          ),
          key: "basicInfo",
        },
        {
          label: (
            <NavLink
              to={`character/stat?ocid=${ocid}${date ? `&date={${date}}` : ""}`}
            >
              종합 능력치 정보
            </NavLink>
          ),
          key: "statInfo",
        },
        {
          label: (
            <NavLink
              to={`character/hyperStat?ocid=${ocid}${date ? `&date={${date}}` : ""}`}
            >
              하이퍼 스탯 정보
            </NavLink>
          ),
          key: "hyperStatInfo",
        },
        {
          label: (
            <NavLink
              to={`character/propensity?ocid=${ocid}${date ? `&date={${date}}` : ""}`}
            >
              성향 정보
            </NavLink>
          ),
          key: "propensityInfo",
        },
        {
          label: "어빌리티 정보",
          key: "abilityInfo",
          disabled: true,
        },
        {
          label: (
            <NavLink
              to={`character/equipment?ocid=${ocid}${date ? `&date={${date}}` : ""}`}
            >
              장착 장비 정보
            </NavLink>
          ),
          key: "itemEquipmentInfo",
        },
        {
          label: "장착 캐시 장비 정보",
          key: "cashItemEquipmentInfo",
          disabled: true,
        },
        {
          label: "장착 심볼 정보",
          key: "symbolInfo",
          disabled: true,
        },
        {
          label: "적용 세트 효과 정보",
          key: "setInfo",
          disabled: true,
        },
        {
          label: "장착 헤어, 성형, 피부 정보",
          key: "beautyInfo",
          disabled: true,
        },
        {
          label: "장착 안드로이드 정보",
          key: "androidInfo",
          disabled: true,
        },
        {
          label: "장착 펫 정보",
          key: "petInfo",
          disabled: true,
        },
        {
          label: "스킬 정보",
          key: "skillInfo",
          disabled: true,
        },
        {
          label: (
            <NavLink
              to={`character/link?ocid=${ocid}${date ? `&date={${date}}` : ""}`}
            >
              링크 스킬 정보
            </NavLink>
          ),
          key: "linkSkillInfo",
        },
        {
          label: "V매트릭스 정보",
          key: "vmatrixInfo",
          disabled: true,
        },
        {
          label: "HEXA 코어 정보",
          key: "hexaCoreInfo",
          disabled: true,
        },
        {
          label: "HEXA 스탯 정보",
          key: "hexaStatInfo",
          disabled: true,
        },
        {
          label: "무릉도장 정보",
          key: "dojangInfo",
          disabled: true,
        },
      ],
    },
    {
      label: "유니온",
      key: "union",
      disabled: true,
    },
    {
      label: "길드",
      key: "guild",
      disabled: true,
    },
    {
      label: "확률",
      key: "probability",
      disabled: true,
    },
    {
      label: "랭킹",
      key: "ranking",
      disabled: true,
    },
  ];
  return <Menu items={items} mode="horizontal" />;
};

export default NavigationBar;
