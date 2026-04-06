import Head from "next/head";
import "./frontend.scss";

export default function FrontendPage() {
  return (
    <>
      <Head>
        <title>Frontend demo</title>
        <meta
          name="description"
          content="Une page frontend simple pour démarrer rapidement."
        />
      </Head>
      <main className="frontend-demo">
        <div className="frontend-demo__container">
          <section className="frontend-demo__hero">
            <h1 className="frontend-demo__title">Frontend prêt à l&apos;emploi</h1>
            <p className="frontend-demo__subtitle">
              Cette page fournit une base claire pour démarrer un frontend :
              structure, styles, sections de contenu et boutons d&apos;action.
            </p>
            <div className="frontend-demo__actions">
              <button
                type="button"
                className="frontend-demo__button frontend-demo__button--primary"
              >
                Commencer
              </button>
              <button
                type="button"
                className="frontend-demo__button frontend-demo__button--secondary"
              >
                Documentation
              </button>
            </div>
          </section>

          <section className="frontend-demo__grid" aria-label="Fonctionnalités">
            <article className="frontend-demo__card">
              <h3>Composants</h3>
              <p>Ajoutez facilement des composants réutilisables.</p>
            </article>
            <article className="frontend-demo__card">
              <h3>Responsive</h3>
              <p>La grille s&apos;adapte automatiquement aux écrans mobiles.</p>
            </article>
            <article className="frontend-demo__card">
              <h3>Évolutif</h3>
              <p>Une base simple qui peut grandir avec votre produit.</p>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
