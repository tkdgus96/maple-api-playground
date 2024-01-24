import { CharacterInfoResponse } from "@customTypes/character";
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
  async getBasicInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/basic", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getPopularityInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/popularity", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getStatInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/stat", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getHyperStatInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/hyper-stat", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getPropensityInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/propensity", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getAbilityInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/ability", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getItemEquipmentInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/item-equipment", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getCashItemEquipmentInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/cashitem-equipment", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getSymbolEquipmentInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/symbol-equipment", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getSetEffectInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/set-effect", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getBeautyEquipmentInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/beauty-equipment", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getAndroidEquipmentInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/android-equipment", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getPetEquipmentInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/pet-equipment", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getSkillInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/skill", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getLinkSkillInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/link-skill", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getVMatrixInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/vmatrix", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getHexaMatrixInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/hexamatrix", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getHexaStatInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/hexamatrix-stat", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
  async getDojangInfo(ocid: string) {
    const res = await client.get("maplestory/v1/character/dojang", {
      params: {
        ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as CharacterInfoResponse;
  },
};

export default characterApi;
