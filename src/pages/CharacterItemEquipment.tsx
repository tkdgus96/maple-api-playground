import { StarTwoTone } from "@ant-design/icons";
import characterApi from "@apis/character";
import ItemTooltip from "@components/ItemTooltip";
import { CharacterItemEquipmentResponse } from "@customTypes/character";
import styled from "@emotion/styled";
import { Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background-color: #a9def9;
  border: 2px solid #e4c1f9;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const skeletonArray = new Array(24).fill(1);

const CharacterItemEquipment = () => {
  const [equipment, setEquipment] = useState<
    CharacterItemEquipmentResponse | undefined
  >(undefined);

  const [searchParams] = useSearchParams();

  const ocid = searchParams.get("ocid");
  const date = searchParams.get("date");

  useEffect(() => {
    if (ocid !== null && date !== null) {
      (async function () {
        const res = await characterApi.getItemEquipmentInfo(ocid, date);
        setEquipment(res);
      })();
    }
  }, [ocid]);
  return (
    <Column>
      <h3>캐릭터 장비 정보</h3>
      {equipment?.item_equipment.map((item) => (
        <ItemTooltip item={item}>
          <ItemWrapper>
            <img src={item.item_shape_icon} />
            <Row>
              {item.item_name}{" "}
              {!!Number(item.starforce) &&
                item.starforce_scroll_flag !== "0" && (
                  <Row>
                    <StarTwoTone
                      twoToneColor={
                        item.starforce_scroll_flag === "미사용"
                          ? "yellow"
                          : "pink"
                      }
                    />
                    <div>{item.starforce}</div>
                  </Row>
                )}
            </Row>
          </ItemWrapper>
        </ItemTooltip>
      )) ?? (
        <>
          {skeletonArray.map(() => (
            <ItemWrapper>
              <Skeleton.Avatar style={{ height: "24px", width: "24px" }} />
              <Skeleton.Input style={{ height: "24px" }} />
            </ItemWrapper>
          ))}
        </>
      )}
    </Column>
  );
};

export default CharacterItemEquipment;
