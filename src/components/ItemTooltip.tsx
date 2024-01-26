import { ItemEquipment } from "@customTypes/character";
import styled from "@emotion/styled";
import { Divider, Tooltip } from "antd";
import { FC, ReactNode } from "react";
import StarforceRender from "./StarforceRenderer";

interface Props {
  children: ReactNode;
  item: ItemEquipment;
}

const ItemWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  min-width: 16rem;
  flex-direction: column;
  background-color: black;
  gap: 0.5rem;
  .ant-divider {
    background-color: gray;
  }
`;

const ItemImgWrapper = styled.div`
  background-color: white;
  border: 2px yellow;
  padding: 1px;
  border-radius: 4px;
  align-items: center;
  display: inline-flex;
`;

const ItemTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0.125rem; */
  flex-direction: column;
`;

const ItemBox = ({ item }: { item: ItemEquipment }) => {
  return (
    <ItemWrapper>
      <ItemTitleWrapper style={{ flexDirection: "row" }}>
        <StarforceRender starforce={Number(item.starforce)} />
      </ItemTitleWrapper>
      <ItemTitleWrapper>
        {item?.item_name}{" "}
        {item.scroll_upgrade !== "0" && `(+${item.scroll_upgrade})`}
        {item.potential_option_grade && (
          <div>({item.potential_option_grade} 아이템)</div>
        )}
      </ItemTitleWrapper>
      <Divider
        type="horizontal"
        style={{ color: "white", margin: "16px 0px" }}
      />
      <div>
        <ItemImgWrapper>
          <img src={item.item_shape_icon} width={50} height={50} />
        </ItemImgWrapper>
      </div>
      <Divider
        type="horizontal"
        style={{ color: "white", margin: "16px 0px" }}
      />
      <div>
        <div>장비 분류: {item.item_equipment_slot}</div>
        {!!item.item_total_option.str && (
          <div>STR : +{item.item_total_option.str}</div>
        )}
        {!!item.item_total_option.dex && (
          <div>DEX : +{item.item_total_option.dex}</div>
        )}
        {!!item.item_total_option.int && (
          <div>INT : +{item.item_total_option.int}</div>
        )}
        {!!item.item_total_option.luk && (
          <div>LUK : +{item.item_total_option.luk}</div>
        )}
        {!!item.item_total_option.max_hp && (
          <div>최대 HP : +{item.item_total_option.max_hp}</div>
        )}
        {!!item.item_total_option.max_hp_rate && (
          <div>최대 HP : +{item.item_total_option.max_hp}</div>
        )}
        {!!item.item_total_option.max_mp && (
          <div>최대 MP : +{item.item_total_option.max_mp}</div>
        )}
        {!!item.item_total_option.max_hp_rate && (
          <div>최대 MP : +{item.item_total_option.max_mp}</div>
        )}
        {!!item.item_total_option.attack_power && (
          <div>공격력 : +{item.item_total_option.attack_power}</div>
        )}
        {!!item.item_total_option.boss_damage && (
          <div>
            보스 몬스터 공격 시 데미지 : +{item.item_total_option.boss_damage}%
          </div>
        )}
        {!!item.item_total_option.ignore_monster_armor && (
          <div>
            몬스터 방어율 무시 : +{item.item_total_option.ignore_monster_armor}%
          </div>
        )}
        {!!item.item_total_option.damage && (
          <div>데미지 : +{item.item_total_option.damage}</div>
        )}
        {!!item.item_total_option.all_stat && (
          <div>올스탯 : +{item.item_total_option.all_stat}%</div>
        )}
        {!!item.item_total_option.speed && (
          <div>이동속도 : +{item.item_total_option.speed}</div>
        )}
        {!!item.item_total_option.jump && (
          <div>점프력 : +{item.item_total_option.jump}</div>
        )}
        {!!item.item_total_option.equipment_level_decrease && (
          <div>
            착용 레벨 감소 : +{item.item_total_option.equipment_level_decrease}
          </div>
        )}
      </div>
      {item.potential_option_grade && (
        <Divider
          type="horizontal"
          style={{ color: "white", margin: "4px 0px" }}
        />
      )}
      {item.potential_option_grade && (
        <div>
          <div>{item.potential_option_grade} 잠재옵션</div>
          <div>{item.potential_option_1}</div>
          <div>{item.potential_option_2}</div>
          <div>{item.potential_option_3}</div>
        </div>
      )}
      {item.additional_potential_option_grade && (
        <Divider
          type="horizontal"
          style={{ color: "white", margin: "4px 0px" }}
        />
      )}
      {item.additional_potential_option_grade && (
        <div>
          <div>{item.additional_potential_option_grade} 에디셔널 잠재옵션</div>
          <div>{item.additional_potential_option_1}</div>
          <div>{item.additional_potential_option_2}</div>
          <div>{item.additional_potential_option_3}</div>
        </div>
      )}
    </ItemWrapper>
  );
};

const ItemTooltip: FC<Props> = ({ children, item }) => {
  return (
    <Tooltip
      title={<ItemBox item={item} />}
      arrow={false}
      overlayInnerStyle={{ width: "max-content" }}
    >
      {children}
    </Tooltip>
  );
};

export default ItemTooltip;
