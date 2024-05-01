import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import get from "lodash/get";
import {
  EMAIL_INCLUDED_REGEX,
  EMAIL_OR_HTTPS_INCLUDED_REGEX,
  HTTPS_INCLUDED_REGEX
} from "@/lib/config";

/**
 * Replaces Urls and Emails with anchor tags
 *
 * @param {string} text
 * @param {object} linkMap
 * @returns {HTMLElement}
 */
export const replaceUrlsAndEmailsWithAnchors = (text = "", linkMap = {}) =>
  text.split(EMAIL_OR_HTTPS_INCLUDED_REGEX).map((str, i) => {
    if (HTTPS_INCLUDED_REGEX.test(str)) {
      return (
        <a
          className="font-bold text-primary items-center inline-flex"
          href={str}
          key={i}
          rel="noopener noreferrer"
          target="_blank"
        >
          {linkMap ? get(linkMap, [str], str) : str}
          <Icon className="ml-[2px] text-primary" icon="bx:link-external" />
        </a>
      );
    }
    if (EMAIL_INCLUDED_REGEX.test(str)) {
      return (
        <a
          className="font-bold text-primary items-center inline-flex"
          key={i}
          href={`mailto:${str}`}
        >
          {linkMap ? get(linkMap, [str], str) : str}
          <Icon
            className="ml-[2px] text-primary"
            icon="material-symbols:mail"
          />
        </a>
      );
    }
    return str;
  });

/**
 * Utility function to combine tailwind compatible classnames
 *
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Sets key-value pair in LocalStorage.
 *
 * @param {string=} key
 * @param {string=} value
 */
export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting localStorage item:", error);
  }
};

/**
 * Retrieves a value from LocalStorage based on given key.
 *
 * @param {*} key
 * @returns {string | null}
 */
export const getLocalStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
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
export const removeLocalStorageItem = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing localStorage item:", error);
  }
};
