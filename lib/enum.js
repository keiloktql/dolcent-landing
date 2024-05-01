import { CANNY_URL, UPTIME_URL } from "./config";

export const BTN_META = {
  PRIMARY: {
    className: "bg-primary text-white"
  },
  PRIMARY_EMPTY: {
    className: "hover:underline"
  },
  EMPTY: {
    className: "override-empty-btn text-black"
  }
};

export const FOOTER_NAV_LINKS_META = {
  SUPPORT: {
    heading: "Support",
    links: [
      {
        text: "FAQ",
        href: "/faq"
      },
      {
        text: "Contact",
        href: "/faq#contact"
      },
      {
        text: "System Status",
        href: UPTIME_URL,
        external: true
      },
      {
        text: "Feature Request",
        href: `${CANNY_URL}/feature-request`,
        external: true
      }
    ]
  },
  PRODUCT: {
    heading: "Product",
    links: [
      {
        text: "Roadmap",
        href: CANNY_URL,
        external: true
      },
      {
        text: "Sitemap",
        href: "/sitemap"
      }
    ]
  },
  LEGAL: {
    heading: "Legal",
    links: [
      {
        text: "Terms and Conditions",
        href: "/terms-and-conditions"
      },
      {
        text: "Privacy Policy",
        href: "/privacy-policy"
      }
    ]
  }
};

export const BENTO_BOX_TYPE = {
  LONG_TEXT_LEFT: "LONG_TEXT_LEFT",
  LONG_TEXT_RIGHT: "LONG_TEXT_RIGHT",
  SMALL: "SMALL",
  SMALL_TEXT_LEFT: "SMALL_TEXT_LEFT",
  SMALL_TEXT_RIGHT: "SMALL_TEXT_RIGHT"
};

export const OVERVIEW_FEATURES_LIST = [
  {
    type: BENTO_BOX_TYPE.LONG_TEXT_LEFT,
    imageHref: "/assets/app/bento-1.png",
    heading: "Interactive Graphs ⚡",
    desc: "Visualize your cash flow, income, and expenses.",
    className: "bg-gray-200"
  },
  {
    type: BENTO_BOX_TYPE.LONG_TEXT_RIGHT,
    imageHref: "/assets/app/bento-2.png",
    heading: "See your Money in One Place 👀",
    desc: "Keep tabs on your balances, from cash to digital wallets.",
    className: "bg-gray-500",
    textClassName: "text-white"
  },
  {
    type: BENTO_BOX_TYPE.SMALL,
    content: [
      {
        type: BENTO_BOX_TYPE.SMALL_TEXT_LEFT,
        imageHref: "/assets/app/bento-3.png",
        heading: "Multi Currency Support 🌎",
        desc: "Track your finances in 140+ currencies.",
        className: "bg-gray-200"
      },
      {
        type: BENTO_BOX_TYPE.SMALL_TEXT_RIGHT,
        imageHref: "/assets/app/bento-4.png",
        heading: "Easily Add Transactions 🔥",
        desc: "Easily view and filter all your financial transactions.",
        className: "bg-gray-300"
      }
    ]
  },
  {
    type: BENTO_BOX_TYPE.LONG_TEXT_LEFT,
    imageHref: "/assets/app/bento-5.png",
    heading: "Know How Much You can Spend 💰",
    desc: "Set and manage budgets for a better financial future.",
    className: "bg-gray-100"
  }
];

export const SYSTEM_STATUS_TYPE = {
  PAUSED: "PAUSED", // gray
  DOWN: "DOWN", // yellow
  UP: "UP" // green
};
