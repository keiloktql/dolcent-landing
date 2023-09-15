import MainLayout from "@/components/layout/MainLayout";
import { BASE_URL, SUPPORT_EMAIL } from "@/config/constants";
import DocumentSection from "../shared/DocumentSection";

const PrivacyPolicyPage = () => {
  return (
    <MainLayout className="flex flex-col max-w-screen-xl px-6 sm:px-16 mx-auto pb-20">
      <p
        id="app-info"
        className="font-semibold pt-10 text-gray-400 text-xs text-center hidden"
      >
        You are now visiting {`${BASE_URL}/privacy-policy`}
      </p>
      <h1 className="font-bold text-display-md pt-10">Privacy Policy</h1>
      <p className="pt-4 font-semibold text-sm">Last updated: September 2023</p>

      <DocumentSection
        heading="1. Introduction"
        desc={`Welcome to Dolcent (the "App"), which is provided by Tham Kei Lok ("I", "me", or "my") at no cost and is intended for use as is. I am committed to protecting your personal information and your right to privacy.
        If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. This Privacy Policy governs the privacy policies and practices of my App.
        The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
        Please read my Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with me.`}
      />
      <DocumentSection
        heading="2. Information Collection and Use"
        desc={`I do not collect any personal information when you download, install, or use my App.
        I may collect usage data, such as the duration of your usage or the features you used, for analytical purposes. This data is anonymized and cannot be used to identify you.`}
      />
      <DocumentSection
        heading="3. How I Use Your Information"
        desc={`I do not collect personal information from you, and therefore,
        I do not use your information for any purpose other than for analyzing
        how my App is used. I do not sell, trade, or share your usage data with
        third parties.`}
      />
      <DocumentSection
        heading="4. Security"
        desc={`I am committed to ensuring that your information is secure. However,
        please be aware that no method of transmission over the internet or method 
        of electronic storage is 100% secure. While I strive to use commercially
        acceptable means to protect your personal information, I cannot guarantee
        its absolute security.`}
      />
      <DocumentSection
        heading="5. Changes to this Privacy Policy"
        desc={`I may update my Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. These changes
        are effective immediately after they are posted on this page.`}
      />
      <DocumentSection
        heading="6. Contact"
        desc={`If you have any questions, you may contact me at ${SUPPORT_EMAIL}`}
      />
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
