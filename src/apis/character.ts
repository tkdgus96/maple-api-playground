import {
  CharacterDojangResponse,
  CharacterHyperStatResponse,
  CharacterInfoResponse,
  CharacterItemEquipmentResponse,
  CharacterLinkSkillResponse,
  CharacterPopularityResponse,
  CharacterStatResponse,
} from "@customTypes/character";
import client from "./client";

const characterApi = {
  async getOcid(characterName: string) {
    const res = await client.get("maplestory/v1/id", {
      params: {
        character_name: characterName,
      },
    });
    return res.data;
  },
  async getBasicInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/basic", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getPopularityInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/popularity", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterPopularityResponse;
  },
  async getStatInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/stat", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterStatResponse;
  },
  async getHyperStatInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/hyper-stat", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterHyperStatResponse;
  },
  async getPropensityInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/propensity", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getAbilityInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/ability", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getItemEquipmentInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/item-equipment", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterItemEquipmentResponse;
  },
  async getCashItemEquipmentInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/cashitem-equipment", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getSymbolEquipmentInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/symbol-equipment", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getSetEffectInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/set-effect", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getBeautyEquipmentInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/beauty-equipment", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getAndroidEquipmentInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/android-equipment", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getPetEquipmentInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/pet-equipment", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getSkillInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/skill", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getLinkSkillInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/link-skill", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterLinkSkillResponse;
  },
  async getVMatrixInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/vmatrix", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getHexaMatrixInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/hexamatrix", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getHexaStatInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/hexamatrix-stat", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getDojangInfo(ocid: string, date: string) {
    const res = await client.get("maplestory/v1/character/dojang", {
      params: {
        ocid,
        date: date.split("T")[0],
      },
    });
    return res.data as CharacterDojangResponse;
  },
};

export default characterApi;
