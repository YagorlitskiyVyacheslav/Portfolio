import { Header } from "@/features/Header/Header";
import { HomePage } from "@/features/Home/HomePage";
import { Layout } from "@/layouts/Layout";
import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Layout header={<Header />}>
      <HomePage />
    </Layout>
  );
};

export default Home;
