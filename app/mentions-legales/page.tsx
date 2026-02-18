import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Title } from "@/components/Title";

export default function MentionsLegalesPage() {
  return (
    <>
      <Section variant="azur" animate={false} className="pt-24">
        <Container>
          <Title as="h1" align="center">
            Mentions légales
          </Title>
          <div className="mt-10 sm:mt-12 border-t border-indigo/25 max-w-2xl mx-auto" aria-hidden />

          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto space-y-10 font-raleway text-cyan leading-relaxed">
            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                1. Éditeur du site et responsable de la publication
              </h2>
              <p>
                Le site <strong>Cap&apos;nage bien Être en milieu aquatique</strong> est édité par :
              </p>
              <p className="mt-2">
                <strong>BOUCHET Alizée</strong><br />
                Cap&apos;nage bien Être en milieu aquatique
              </p>
              <p className="mt-2">
                Par mail :{" "}
                <a href="mailto:capalizeey@gmail.com" className="text-indigo hover:underline">
                  capalizeey@gmail.com
                </a>
                <br />
                Par téléphone :{" "}
                <a href="tel:+33651357550" className="text-indigo hover:underline">
                  06 51 35 75 50
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                2. Conception et réalisation du site
              </h2>
              <p>
                Ce site a été conçu et réalisé par :
              </p>
              <p className="mt-2">
                <strong>Maxime Farineau</strong><br />
                SIRET : 953 018 538 000 25
              </p>
              <p className="mt-2">
                Par mail :{" "}
                <a href="mailto:contact@maximefarineau.com" className="text-indigo hover:underline">
                  contact@maximefarineau.com
                </a>
                <br />
                Par téléphone :{" "}
                <a href="tel:+33669347443" className="text-indigo hover:underline">
                  06 69 34 74 43
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par :
              </p>
              <p className="mt-2">
                <strong>Railway Corporation</strong><br />
                548 Market St PMB 68956<br />
                San Francisco, California 94104<br />
                États-Unis
              </p>
              <p className="mt-2">
                Site web :{" "}
                <a
                  href="https://railway.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo hover:underline"
                >
                  https://railway.app
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                4. Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo, structure, etc.) est protégé par le droit d&apos;auteur et le droit des marques. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans l&apos;autorisation préalable de l&apos;éditeur est interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de propriété intellectuelle.
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                5. Données personnelles
              </h2>
              <p>
                Les informations recueillies via le formulaire de contact sont destinées uniquement à répondre à vos demandes. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement général sur la protection des données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant. Pour l&apos;exercer, contactez l&apos;éditeur du site aux coordonnées indiquées ci-dessus.
              </p>
              <p className="mt-4">
                Les données personnelles ne sont pas cédées à des tiers et sont conservées uniquement pour la durée nécessaire au traitement de votre demande.
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                6. Cookies
              </h2>
              <p>
                Ce site peut être amené à utiliser des cookies pour assurer son bon fonctionnement ou à des fins de mesure d&apos;audience. Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt.
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                7. Limitation de responsabilité
              </h2>
              <p>
                L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, l&apos;éditeur ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition. L&apos;éditeur décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
              <p className="mt-4">
                Les liens hypertextes vers d&apos;autres sites ne engagent pas la responsabilité de l&apos;éditeur quant au contenu de ces sites.
              </p>
            </section>

            <section>
              <h2 className="font-radley text-xl sm:text-2xl text-indigo mb-4">
                8. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </section>

            <p className="mt-12 pt-8 border-t border-indigo/20 text-sm text-cyan/80">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
