/* eslint-disable arrow-body-style */
import MainLayout from "@/components/layout/MainLayout";
import { HOST_URL, SUPPORT_EMAIL } from "@/config/general";
import DocumentSection from "../shared/DocumentSection";

const TermsAndConditionsPage = () => {
  return (
    <MainLayout
      title="Terms and Conditions - Dolcent"
      className="flex flex-col max-w-screen-xl px-6 sm:px-16 mx-auto pb-20"
    >
      <p
        id="app-info"
        className="font-semibold pt-10 text-gray-400 text-xs text-center hidden"
      >
        You are now visiting {`${HOST_URL}/terms-and-conditions`}
      </p>
      <h1 className="font-bold text-display-md pt-10">Terms and Conditions</h1>

      <p className="pt-4 font-semibold text-sm">Last updated: September 2023</p>

      <DocumentSection
        heading="1. Introduction"
        desc={`Welcome to Dolcent (the "App"), which is provided by Tham Kei Lok ("I", "me", or "my") at no cost and is intended for use as is.`}
      />
      <DocumentSection
        heading="2. Acceptance of Terms"
        desc={`By downloading, installing, or using the App, you agree to
      comply with and be bound by these Terms and Conditions ("Terms"). If you
      do not agree to these Terms, please do not use the App.`}
      />
      <DocumentSection
        heading="3. App Usage"
        desc={`You agree to use the App only for lawful purposes and in compliance with
        these Terms. Prohibited activities include but are not limited to
        unauthorized access, data breaches, and any action that disrupts the
        App's functionality.`}
      />
      <DocumentSection
        heading="4. Warranty Disclaimer"
        desc={`The App is provided "as is" and "as available" without any warranties,
        express or implied. I do not warrant that the App will be error-free,
        uninterrupted, or that defects will be corrected.`}
      />
      <DocumentSection
        heading="5. Limitations"
        desc={`In no event shall Dolcent be liable for any indirect, incidental,
        special, consequential, or punitive damages, or any loss of profits or
        revenues, whether incurred directly or indirectly.`}
      />
      <DocumentSection
        heading="6. Accuracy of Materials"
        desc={`The materials appearing within Dolcent could include technical,
        typographical, or photographic errors. Dolcent does not warrant that any
        of the materials are accurate, complete or current. Dolcent may make
        changes to the materials on the App at any time without notice. However
        Dolcent does not make any commitment to update the materials.`}
      />
      <DocumentSection
        heading="7. Modifications"
        desc={`Dolcent may revise these Terms at any time without notice.
        By using the App you are agreeing to be bound by the then current
        version of these Terms.`}
      />
      <DocumentSection
        heading="8. Contact"
        desc={`If you have any questions, you may contact me at ${SUPPORT_EMAIL}`}
      />
    </MainLayout>
  );
};

export default TermsAndConditionsPage;
