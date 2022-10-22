import { HomePage } from "@/features/Home/HomePage";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return <HomePage />;
};

export default Home;
