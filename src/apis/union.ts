import { UnionInfoResponse } from "@customTypes/union";
import client from "./client";

const unionApi = {
  async getUnionInfo(ocid: string) {
    const res = await client.get("maplestory/v1/user/union", {
      params: {
        ocid: ocid,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
    });
    return res.data as UnionInfoResponse;
  },
};

export default unionApi;
