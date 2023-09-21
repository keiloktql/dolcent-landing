import {
  APP_STORE_LISTING_URL,
  BUY_ME_A_COFFEE_URL,
  GITHUB_URL,
  PLAY_STORE_LISTING_URL,
  REALM_ENCRYPTION_URL,
  SUPPORT_EMAIL
} from "./general";

// LOCALSTORAGE KEY
export const STATUS_CHECK_CACHE_KEY = "STATUS_CHECK_CACHE_KEY";

// DATA
export const FAQ_DATA = [
  {
    heading: "General",
    contents: [
      {
        id: "OZ514",
        qns: "What is Dolcent?",
        ans: "Dolcent is a powerful budget expense app designed to help you manage your finances and track your expenses with ease."
      },
      {
        id: "YOW2Y",
        qns: "Is Dolcent free to use?",
        ans: `Yes, Dolcent is completely free to use with no hidden fees or subscriptions. However, if you enjoy using Dolcent and would like to support its development, you can ${BUY_ME_A_COFFEE_URL} or send a tip via the app (iOS only)`
      },
      {
        id: "VNASO",
        qns: "Does Dolcent run ads?",
        ans: "No, Dolcent does not run ads."
      },
      {
        id: "TOCBB",
        qns: "Who built Dolcent?",
        ans: `Dolcent is developed by ${GITHUB_URL} , a Software Engineering student in Singapore.`
      },
      {
        id: "PPWOV",
        qns: "What does Dolcent mean?",
        ans: `Dolcent is a fusion of the words "Dollars" and "Cents," symbolizing its core purpose of helping you manage your financial matters down to the last cent.`
      }
    ]
  },
  {
    heading: "Getting Started",
    contents: [
      {
        id: "BDW5W",
        qns: "How do I download and install Dolcent?",
        ans: `You can download Dolcent from the ${APP_STORE_LISTING_URL} or ${PLAY_STORE_LISTING_URL} , and then simply follow the installation instructions on your device.`
      },
      {
        id: "35MVA",
        qns: "Do I need to create an account to use Dolcent?",
        ans: "No, Dolcent does not require you to create an account. You can start using the app right away."
      }
    ]
  },
  {
    heading: "Features",
    contents: [
      {
        id: "5CBL4",
        qns: "What currencies does Dolcent support?",
        ans: "Dolcent supports over 140 currencies, allowing you to track your expenses no matter where you are. To view the list of supported currnecies, please Open Dolcent app > Settings > Exchange Rates"
      },
      {
        id: "BZ8E5",
        qns: "Is my data safe with Dolcent?",
        ans: `Absolutely, your data is securely stored on your device and is never uploaded to the cloud or accessible by the developer. Additionally, it's encrypted with ${REALM_ENCRYPTION_URL}, ensuring the highest level of security for your financial information.`
      },
      {
        id: "664XZ",
        qns: "Can I set a passcode or biometric lock for added security?",
        ans: "Yes, Dolcent offers enhanced security options. You can set a passcode lock and, if your device supports it, use biometric authentication such as Face ID or Touch ID for added protection. You can enable these security features in the app's settings"
      },
      {
        id: "K3Y1A",
        qns: "Can I use Dolcent on multiple devices?",
        ans: "Currently, Dolcent is designed to be used on a single device. However, you can export your data in JSON format and import it into Dolcent on another device."
      }
    ]
  },
  {
    heading: "Troubleshooting",
    contents: [
      {
        id: "S85PV",
        qns: "I'm having trouble with currency exchange updates. What should I do?",
        ans: `Please ensure you have an internet connection, and Dolcent will automatically update currency exchange rates daily. If you're still facing issues, contact support at ${SUPPORT_EMAIL}`
      },
      {
        id: "CKBL8",
        qns: "I forgot my passcode. How can I reset it?",
        ans: "If you are already logged in to Dolcent, you can reset your passcode by going to the settings page and turn Passcode off. Unfortunately, if you are at the lockscreen page, you will not be able to reset your passcode."
      }
    ]
  }
];
