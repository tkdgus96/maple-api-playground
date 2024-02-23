export interface GuildIdResponse {
  oguild_id: string;
}
export interface GuildInfoResponse {
  date: string;
  world_name: string;
  guild_name: string;
  guild_level: number;
  guild_fame: number;
  guild_point: number;
  guild_master_name: string;
  guild_member_count: number;
  guild_member: string[];
  guild_skill: GuildSkill[];
  guild_noblesse_skill: GuildNoblesseSkill[];
  guild_mark: string;
  guild_mark_custom: string;
}

export interface GuildSkill {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}

export interface GuildNoblesseSkill {
  skill_name: string;
  skill_description: string;
  skill_level: number;
  skill_effect: string;
  skill_icon: string;
}
