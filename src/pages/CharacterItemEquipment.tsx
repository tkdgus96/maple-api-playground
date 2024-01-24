import characterApi from "@apis/character";
import { CharacterItemEquipmentResponse } from "@customTypes/character";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CharacterItemEquipment = (props) => {
  const [a, setA] = useState<CharacterItemEquipmentResponse | undefined>(
    undefined
  );

  const [searchParams] = useSearchParams();

  const ocid = searchParams.get("ocid");

  useEffect(() => {
    if (ocid !== null) {
      (async function () {
        const res = await characterApi.getItemEquipmentInfo(ocid);
        setA(res);
      })();
    }
  }, [ocid]);
  return (
    <Column>
      캐릭터 장비 정보
      {a?.item_equipment.map((item, i) => (
        <Row>
          <img src={item.item_shape_icon} />
          <div>{item.item_name}</div>
        </Row>
      ))}
    </Column>
  );
};

export default CharacterItemEquipment;
