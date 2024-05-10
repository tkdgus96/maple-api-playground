import characterApi from "@apis/character";
import { CharacterHyperStatResponse } from "@customTypes/character";
import styled from "@emotion/styled";
import { Button } from "antd";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
const hyperStatPreset = ["1", "2", "3"] as ("1" | "2" | "3")[];

const CharacterHyperStat: FC<Props> = () => {
  const [searchParams] = useSearchParams();

  const [hyperStat, setHyperStat] = useState<
    CharacterHyperStatResponse | undefined
  >(undefined);
  const [presetNum, setPresetNum] = useState<"1" | "2" | "3" | undefined>(
    undefined
  );

  useEffect(() => {
    const ocid = searchParams.get("ocid");
    const date = searchParams.get("date");
    if (ocid !== null) {
      (async function () {
        const res = await characterApi.getHyperStatInfo(ocid, date);
        setHyperStat(res);
        setPresetNum(res.use_preset_no as "1" | "2" | "3");
      })();
    }
  }, [searchParams.get("ocid")]);

  return (
    <Column style={{ gap: "2rem", minWidth: "20rem" }}>
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <div>하이퍼스탯</div>
        <Row style={{ gap: "0.25rem" }}>
          {hyperStatPreset.map((v) => (
            <Button
              style={{ width: "1.5rem" }}
              value={v}
              shape="circle"
              type={v === presetNum ? "primary" : "default"}
              onClick={() => setPresetNum(v)}
            >
              {v}
            </Button>
          ))}
        </Row>
      </Row>
      <Column>
        <div style={{ marginBottom: ".5rem" }}>하이퍼 스탯 포인트</div>
        {hyperStat &&
          presetNum &&
          hyperStat[`hyper_stat_preset_${presetNum}`].map((v) => (
            <Row style={{ justifyContent: "space-between" }}>
              <div>{v.stat_type}</div>
              <div>{v.stat_level}</div>
            </Row>
          ))}
      </Column>
      <Column>
        <div style={{ marginBottom: ".5rem" }}>하이퍼 스탯 효과</div>
        {hyperStat &&
          presetNum &&
          hyperStat[`hyper_stat_preset_${presetNum}`].map((v) => (
            <div>{v.stat_increase}</div>
          ))}
      </Column>
    </Column>
  );
};

export default CharacterHyperStat;
