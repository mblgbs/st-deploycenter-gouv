import Head from "next/head";
import { GlobalLayout } from "@/features/layouts/components/GlobalLayout";
import { login, useAuth } from "@/features/auth/Auth";
import {
  Footer,
  Hero,
  HomeGutter,
  MainLayout,
  ProConnectButton,
} from "@gouvfr-lasuite/ui-kit";
import { useTranslation } from "react-i18next";
import banner from "@/assets/home/banner.svg";
import {
  addToast,
  Toaster,
  ToasterItem,
} from "@/features/ui/components/toaster/Toaster";
import { LeftPanelMobile } from "@/features/layouts/components/left-panel/LeftPanelMobile";
import { HeaderRight } from "@/features/layouts/components/header/Header";
import { useThemeCustomization } from "@/hooks/useThemeCustomization";
import { SpinnerPage } from "@/features/ui/components/spinner/SpinnerPage";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const { user } = useAuth();
  const { t } = useTranslation();
  const router = useRouter();
  const footerCustommization = useThemeCustomization("footer");

  useEffect(() => {
    const reason = router.query.reason as string | undefined;
    if (reason === "forbidden" || reason === "unauthorized") {
      addToast(
        <ToasterItem type="error">
          <span>{t(`home.access_denied.${reason}`)}</span>
        </ToasterItem>
      );
      // Clean up the URL without triggering a re-render
      router.replace("/", undefined, { shallow: true });
    }
  }, [router.query.reason]);

  useEffect(() => {
    if (user) {
      router.push("/operators");
    }
  }, [user]);

  if (user) {
    return <SpinnerPage />;
  }

  return (
    <>
      <Head>
        <title>{t("app_title")}</title>
        <meta name="description" content={t("app_description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HomeGutter>
        <Hero
          logo={<div className="drive__logo-icon" />}
          banner={banner.src}
          title={t("home.title")}
          subtitle={t("home.subtitle")}
          mainButton={
            <div className="c__hero__buttons">
              <div>
                <ProConnectButton onClick={() => login()} />
              </div>
            </div>
          }
        />
      </HomeGutter>
      <section className="drive__home__highlights">
        <h3>{t("home.highlights.title")}</h3>
        <div className="drive__home__highlights__grid">
          <article>
            <h4>{t("home.highlights.cards.services.title")}</h4>
            <p>{t("home.highlights.cards.services.description")}</p>
          </article>
          <article>
            <h4>{t("home.highlights.cards.roles.title")}</h4>
            <p>{t("home.highlights.cards.roles.description")}</p>
          </article>
          <article>
            <h4>{t("home.highlights.cards.followup.title")}</h4>
            <p>{t("home.highlights.cards.followup.description")}</p>
          </article>
        </div>
      </section>
      <Footer {...footerCustommization} />
    </>
  );
}

Home.getLayout = (page: React.ReactElement) => {
  return (
    <div className="drive__home">
      <GlobalLayout>
        <MainLayout
          enableResize
          hideLeftPanelOnDesktop={true}
          leftPanelContent={<LeftPanelMobile />}
          icon={
            <div className="drive__header__left">
              <img src="/assets/logo-gouv.svg" alt="" />
              <div className="drive__header__logo" />
            </div>
          }
          rightHeaderContent={<HeaderRight />}
        >
          {page}
          <Toaster />
        </MainLayout>
      </GlobalLayout>
    </div>
  );
};
