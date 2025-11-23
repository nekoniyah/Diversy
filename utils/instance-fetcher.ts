import axios from "axios";

export type InstanceInfo = {
  name: string;
  version: string;
  description: string;
  tags: string[];
};

export async function fetchInstanceInfo(
  url: string
): Promise<InstanceInfo | { error: string }> {
  try {
    const response = await axios.get(`${url}/health`, { timeout: 5000 });
    return response.data;
  } catch (error: any) {
    return { error: error.message };
  }
}
