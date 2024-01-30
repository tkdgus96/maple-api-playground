export interface CharacterInfoResponse {
  character_info: string;
  character_class: string;
  character_class_level: string;
  character_exp: number;
  character_exp_rate: string;
  character_gender: string;
  character_guild_name: string;
  character_image: string; // url
  character_level: number;
  date: string;
  world_name: string;
}

export interface CharacterPopularityResponse {
  date: string;
  popularity: number;
}

export interface CharacterStatResponse {
  date: string;
  character_class: string;
  final_stat: {
    stat_name: string;
    stat_value: string;
  }[];
  remain_ap: number;
}

export interface CharacterHyperStatResponse {
  date: string;
  character_class: string;
  use_preset_no: string;
  use_available_hyper_stat: number;
  hyper_stat_preset_1: string;
  hyper_stat_preset_1_remain_point: number;
  hyper_stat_preset_2: string;
  hyper_stat_preset_2_remain_point: number;
  hyper_stat_preset_3: string;
  hyper_stat_preset_3_remain_point: number;
}

export interface CharacterPropensityResponse {
  date: string;
  charisma_level: number;
  sensibility_level: number;
  insight_level: number;
  willingness_level: number;
  handicraft_level: number;
  charm_level: number;
}

export interface CharacterAbilityResponse {
  date: string;
  ability_grade: string;
  ability_info: {
    ability_no: string;
    ability_grade: string;
    ability_value: string;
  }[];
  remain_fame: number;
  preset_no: number;
  ability_preset_1: {
    ability_preset_grade: string;
    ability_info: {
      ability_no: string;
      ability_grade: string;
      ability_value: string;
    }[];
  };
  ability_preset_2: {
    ability_preset_grade: string;
    ability_info: {
      ability_no: string;
      ability_grade: string;
      ability_value: string;
    }[];
  };
  ability_preset_3: {
    ability_preset_grade: string;
    ability_info: {
      ability_no: string;
      ability_grade: string;
      ability_value: string;
    }[];
  };
}

export interface ItemExceptionalOption {
  str: string;
  dex: string;
  int: string;
  luk: string;
  max_hp: string;
  max_mp: string;
  attack_power: string;
  magic_power: string;
}

export interface ItemBaseOption extends ItemExceptionalOption {
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  ignore_monster_armor: string;
  all_stat: string;
  max_hp_rate: string;
  max_mp_rate: string;
  base_equipment_level: string;
}

export interface ItemAddOption extends ItemExceptionalOption {
  armor: string;
  speed: string;
  jump: string;
  boss_damage: string;
  damage: string;
  all_stat: string;
  equipment_level_decrease: number;
}

export interface ItemEtcOption extends ItemExceptionalOption {
  armor: string;
  speed: string;
  jump: string;
}

export interface ItemStarforceOption extends ItemEtcOption {}

export interface ItemTotalOption extends ItemAddOption {
  ignore_monster_armor: string;
  max_hp_rate: string;
  max_mp_rate: string;
}

export interface ItemEquipment {
  item_equipment_part: string;
  item_equipment_slot: string;
  item_name: string;
  item_icon: string;
  item_description: string;
  item_shape_name: string;
  item_shape_icon: string;
  gender: string;
  item_total_option: ItemTotalOption;
  item_base_option: ItemBaseOption;
  potential_option_grade: string;
  additional_potential_option_grade: string;
  potential_option_1: string;
  potential_option_2: string;
  potential_option_3: string;
  additional_potential_option_1: string;
  additional_potential_option_2: string;
  additional_potential_option_3: string;
  item_exceptional_option: ItemExceptionalOption;
  item_add_option: ItemAddOption;
  growth_exp: number;
  growth_level: number;
  scroll_upgrade: string;
  cuttable_count: string; // 무교는 255
  golden_hammer_flag: string; // 1적용 이외 미적용
  scroll_resilience_count: string; // 복구 가능 횟수
  scroll_upgradeable_count: string;
  soul_name: string;
  soul_option: string;
  item_etc_option: ItemEtcOption;
  starforce: string;
  starforce_scroll_flag: string; // 놀장강 사용시 1 미사용시 0
  item_starforce_option: ItemStarforceOption;
  special_ring_level: number; // 특수반지 레벨
  date_expire: string; // 장비 유효 기간
}

export interface CharacterItemEquipmentResponse {
  date: string;
  character_gender: string;
  character_class: string;
  preset_no: number;
  item_equipment: ItemEquipment[];
  item_equipment_preset_1: ItemEquipment[];
  item_equipment_preset_2: ItemEquipment[];
  item_equipment_preset_3: ItemEquipment[];
  title: {
    title_name: string;
    title_icon: string;
    title_description: string;
    date_expire: string;
    date_option_expire: string;
    // TODO: 메카닉 장비, 에반 장비도 추가하기
  };
}

export interface CharacterSkill {
  skill_name: string;
  skill_description: string;
  skill_level: string;
  skill_effect: string;
  skill_icon: string;
}
export interface CharacterLinkSkillResponse {
  date: string;
  character_class: string;
  character_link_skill: CharacterSkill[];
  character_link_skill_preset_1: CharacterSkill[];
  character_link_skill_preset_2: CharacterSkill[];
  character_link_skill_preset_3: CharacterSkill[];
  character_owned_link_skill: CharacterSkill;
  character_owned_link_skill_preset_1: CharacterSkill;
  character_owned_link_skill_preset_2: CharacterSkill;
  character_owned_link_skill_preset_3: CharacterSkill;
}
