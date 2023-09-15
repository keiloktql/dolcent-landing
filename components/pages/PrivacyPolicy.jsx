import MainLayout from "@/components/layout/MainLayout";
import { BASE_URL } from "@/config/constants";

const PrivacyPolicyPage = () => {
  return (
    <MainLayout className="flex flex-col max-w-screen-xl px-16 mx-auto">
      <p
        id="app-info"
        className="font-semibold pt-10 text-gray-400 text-xs text-center hidden"
      >
        You are now visiting {`${BASE_URL}/privacy-policy`}
      </p>
      <h1 className="font-bold text-display-md pt-10">Privacy Policy</h1>
      <p className="pt-10">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <h2 className="pt-10 font-bold text-display-sm">1. Condition A</h2>

      <p className="pt-10">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <h2 className="pt-10 font-bold text-display-sm">2. Condition B</h2>

      <p className="py-10">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industrys standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
    </MainLayout>
  );
};

export default PrivacyPolicyPage;
