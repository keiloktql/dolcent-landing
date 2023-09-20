import { Icon } from "@iconify/react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import get from "lodash/get";
import {
  EMAIL_INCLUDED_REGEX,
  EMAIL_OR_HTTPS_INCLUDED_REGEX,
  HTTPS_INCLUDED_REGEX
} from "@/config/general";

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

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
