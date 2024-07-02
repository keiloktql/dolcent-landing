import axios from "axios";
import { HTTP_METHODS_ENUM } from "../enum";
import { API_URL } from "../config";

/**
 *
 * @param {string} url
 * @param {string=} accessToken
 * @param {string=} method
 * @returns {Promise<AxiosResponse>}
 */
export const fetcher = async (
  url: string,
  accessToken?: string,
  method: HTTP_METHODS_ENUM = HTTP_METHODS_ENUM.GET
) => {
  const response = await axios({
    url,
    method,
    ...(accessToken && {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
  });
  return response.data;
};

// API LIST
export const SYSTEM_STATUS_API = `${API_URL}/system-status`;
