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
};

export default characterApi;
