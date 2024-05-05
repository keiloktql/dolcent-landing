export enum BENTO_BOX_ENUM {
  LONG_TEXT_LEFT,
  LONG_TEXT_RIGHT,
  SMALL,
  SMALL_TEXT_LEFT,
  SMALL_TEXT_RIGHT
}

export enum SYSTEM_STATUS_ENUM {
  PAUSED, // gray
  DOWN, // yellow
  UP // green
}

export enum FOOTER_NAV_LINKS_ENUM {
  SUPPORT,
  PRODUCT,
  LEGAL
}

export const OVERVIEW_FEATURES_LIST = [
  {
    type: BENTO_BOX_ENUM.LONG_TEXT_LEFT,
    imageHref: "/assets/app/bento-1.png",
    heading: "Interactive Graphs ⚡",
    desc: "Visualize your cash flow, income, and expenses.",
    className: "bg-gray-200"
  },
  {
    type: BENTO_BOX_ENUM.LONG_TEXT_RIGHT,
    imageHref: "/assets/app/bento-2.png",
    heading: "See your Money in One Place 👀",
    desc: "Keep tabs on your balances, from cash to digital wallets.",
    className: "bg-gray-500",
    textClassName: "text-white"
  },
  {
    type: BENTO_BOX_ENUM.SMALL,
    content: [
      {
        type: BENTO_BOX_ENUM.SMALL_TEXT_LEFT,
        imageHref: "/assets/app/bento-3.png",
        heading: "Multi Currency Support 🌎",
        desc: "Track your finances in 140+ currencies.",
        className: "bg-gray-200"
      },
      {
        type: BENTO_BOX_ENUM.SMALL_TEXT_RIGHT,
        imageHref: "/assets/app/bento-4.png",
        heading: "Easily Add Transactions 🔥",
        desc: "Easily view and filter all your financial transactions.",
        className: "bg-gray-300"
      }
    ]
  },
  {
    type: BENTO_BOX_ENUM.LONG_TEXT_LEFT,
    imageHref: "/assets/app/bento-5.png",
    heading: "Know How Much You can Spend 💰",
    desc: "Set and manage budgets for a better financial future.",
    className: "bg-gray-100"
  }
];
