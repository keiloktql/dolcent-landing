import useSWR from "swr";
import { useCustomToast } from "@/lib/hooks";
import { SYSTEM_STATUS_API, fetcher } from "@/lib/api";
import { TOAST_ENUM } from "@/lib/enum";
import { getLocalStorageItem, setLocalStorageItem } from "../utils";
import { STATUS_CHECK_CACHE_KEY } from "../data";

export const useSystemStatus = () => {
  const toastTrigger = useCustomToast();
  const checkNeedToFetch = () => {
    const statusCheckObj = getLocalStorageItem(STATUS_CHECK_CACHE_KEY);
    const { timestamp, data }: { timestamp: number; data: string } =
      statusCheckObj ? JSON.parse(statusCheckObj) : {};
    if (statusCheckObj && timestamp && data) {
      const currentTime = new Date().getTime();
      const expirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds
      const expired = currentTime - timestamp >= expirationTime;
      if (expired) {
        return true;
      }
    }
    if (!statusCheckObj) {
      return true;
    }
    return false;
  };

  const needToFetch = checkNeedToFetch();
  const results = useSWR(needToFetch ? SYSTEM_STATUS_API : null, fetcher);

  if (results.error) {
    toastTrigger(TOAST_ENUM.ERROR);
  }

  if (needToFetch && !results.error && !results.isLoading) {
    const currentTime = new Date().getTime();
    setLocalStorageItem(STATUS_CHECK_CACHE_KEY, {
      data: results.data.data,
      timestamp: currentTime
    });
  }

  return results;
};
