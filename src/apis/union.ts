import { UnionInfoResponse } from "@customTypes/union";
import client from "./client";

const unionApi = {
  async getUnionInfo(ocid: string, date?: string | null) {
    const res = await client.get("maplestory/v1/user/union", {
      params: {
        ocid: ocid,
        date: date?.split("T")[0],
      },
    });
    return res.data as UnionInfoResponse;
  },
};

export default unionApi;
