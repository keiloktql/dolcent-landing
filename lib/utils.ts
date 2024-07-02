import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine tailwind compatible classnames
 *
 * @param  {...any} inputs
 * @returns {string}
 */
export const cn = (...inputs: any[]): string => twMerge(clsx(inputs));

/**
 * Sets key-value pair in LocalStorage.
 *
 * @param {string=} key
 * @param {string=} value
 */
export const setLocalStorageItem = (
  key: string | undefined,
  value: Record<string, any> | string | undefined
) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting localStorage item:", error);
  }
};

/**
 * Retrieves a value from LocalStorage based on given key.
 *
 * @param {string} key
 * @returns {string | null}
 */
export const getLocalStorageItem = (key: string): string | null => {
  if (typeof window === "undefined") {
    console.error(
      "Error getting localStorage item: not possible on server side"
    );
    return null;
  }
  try {
    const item = localStorage.getItem(key);
    return item || null;
  } catch (error) {
    console.error("Error getting localStorage item:", error);
    return null;
  }
};

/**
 * Removes a value from LocalStraoge based on given key.
 *
 * @param {string} key
 */
export const removeLocalStorageItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing localStorage item:", error);
  }
};
