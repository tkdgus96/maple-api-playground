import characterApi from "@apis/character";
import { CharacterLinkSkillResponse } from "@customTypes/character";
import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 0.5rem;
`;
const TableRow = styled.li`
  background: gray;
  width: 12rem;
  height: 2.125rem;
  padding: 0.5rem;
  align-content: center;
`;

const Table = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 24rem;
  gap: 0.5rem;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterLinkSkill: FC<Props> = () => {
  const [linkSkill, setLinkSkill] = useState<
    CharacterLinkSkillResponse | undefined
  >(undefined);

  const [searchParams] = useSearchParams();

  const ocid = searchParams.get("ocid");

  useEffect(() => {
    if (ocid !== null) {
      (async function () {
        const res = await characterApi.getLinkSkillInfo(ocid);
        setLinkSkill(res);
      })();
    }
  }, [ocid]);
  return (
    <div>
      <h3>적용중인 링크 스킬</h3>
      <Table>
        {linkSkill?.character_link_skill.map((d) => (
          <TableRow>
            <Row>
              <img src={d.skill_icon} />
              <Column>
                <div>{d.skill_name}</div>
                <div>Lv.{d.skill_level}</div>
              </Column>
            </Row>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};

export default CharacterLinkSkill;
