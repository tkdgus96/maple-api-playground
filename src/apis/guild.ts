import { GuildIdResponse, GuildInfoResponse } from "@customTypes/guild";
import client from "./client";

const guildApi = {
  async getGuildId(worldName: string, guildName: string) {
    const res = await client.get("maplestory/v1/guild/id", {
      params: {
        guild_name: guildName,
        world_name: worldName,
      },
    });
    return res.data as GuildIdResponse;
  },
  async getGuildInfo(ogid: string) {
    const res = await client.get("maplestory/v1/guild/basic", {
      params: {
        oguild_id: ogid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as GuildInfoResponse;
  },
};

export default guildApi;
