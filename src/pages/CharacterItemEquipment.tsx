import { StarTwoTone } from "@ant-design/icons";
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

const CharacterItemEquipment = () => {
  const [equipment, setEquipment] = useState<
    CharacterItemEquipmentResponse | undefined
  >(undefined);

  const [searchParams] = useSearchParams();

  const ocid = searchParams.get("ocid");

  useEffect(() => {
    if (ocid !== null) {
      (async function () {
        const res = await characterApi.getItemEquipmentInfo(ocid);
        setEquipment(res);
      })();
    }
  }, [ocid]);
  return (
    <Column>
      <h3>캐릭터 장비 정보</h3>
      {equipment?.item_equipment.map((item) => (
        <Row>
          <img src={item.item_shape_icon} />
          <Row>
            {item.item_name}{" "}
            {item.starforce_scroll_flag !== "0" && (
              <Row>
                <StarTwoTone
                  twoToneColor={
                    item.starforce_scroll_flag === "미사용" ? "yellow" : "pink"
                  }
                />
                <div>{item.starforce}</div>
              </Row>
            )}
          </Row>
        </Row>
      ))}
    </Column>
  );
};

export default CharacterItemEquipment;
