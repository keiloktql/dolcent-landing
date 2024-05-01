import { useState } from "react";
import { Icon } from "@iconify/react";
import get from "lodash/get";
import {
  EMAIL_INCLUDED_REGEX,
  EMAIL_OR_HTTPS_INCLUDED_REGEX,
  HTTPS_INCLUDED_REGEX
} from "@/lib/config";

/**
 * Hook to replace URLs and emails with anchor tags.
 *
 * @param {string} initialText Initial text value.
 * @param {object} linkMap Map of links to be replaced.
 * @returns Tuple containing the text and a function to set the text.
 */
const useTextWithAnchors = (
  initialText: (string | Element)[],
  linkMap: Record<string, string> = {}
): JSX.Element => {
  let text = initialText as any;
  const replaceText = (inputText: any) =>
    inputText.split(EMAIL_OR_HTTPS_INCLUDED_REGEX).map((str, i) => {
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
  text = replaceText(text);

  return text;
};

export default useTextWithAnchors;
