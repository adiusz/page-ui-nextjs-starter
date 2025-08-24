"use client";

import ProductTour from "@/app/components/product-tour";
import {
    LandingAboutSection,
    LandingDiscount,
    LandingFaqCollapsibleSection,
    LandingFeatureList,
    LandingFooter,
    LandingFooterColumn,
    LandingFooterLink, LandingGridPatternCtaBg, LandingLeadingPill,
    LandingPathsCtaBg, LandingPrimaryVideoCtaSection,
    LandingSocialProofBand,
    LandingSocialProofBandItem
} from "@/components/landing";
import { LandingPrimaryTextCtaSection } from "@/components/landing/cta/LandingPrimaryCta";
import { LandingProductFeature } from "@/components/landing/LandingProductFeature";
import { LandingProductFeaturesGrid } from "@/components/landing/LandingProductFeaturesGrid";
import { LandingProductSteps } from "@/components/landing/LandingProductSteps";
import { LandingHeader } from "@/components/landing/navigation/LandingHeader";
import { LandingHeaderMenuItem } from "@/components/landing/navigation/LandingHeaderMenuItem";
import { LandingNewsletterSection } from "@/components/landing/newsletter/LandingNewsletterSection";
import { LandingPricingPlan } from "@/components/landing/pricing/LandingPricingPlan";
import { LandingPricingSection } from "@/components/landing/pricing/LandingPricingSection";
import Logo from "@/components/logo";
import { Button } from "@/components/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import { Phone } from "lucide-react";
import { useId, useState } from "react";
import { copy, LOGIN_URL, REGISTER_URL } from "../copy";

export default function V1() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>

      {/* Header */}
      <LandingHeader
        withBackground
        fixed
        logoComponent={<Logo centered />}
        annoucmentBarValue="promocja Early Birds 🕊️ • Wypróbuj 30 dni za darmo • plan Lifetime -50%"
      >
        <LandingHeaderMenuItem href="tel:+48608709237" type="icon-button" variant="outlinePrimary" label=<><Phone /></> />
        <LandingHeaderMenuItem href="#moduly" label="Moduły" />
        <LandingHeaderMenuItem href="#funkcje" label="Funkcje" />
        <LandingHeaderMenuItem href="#jak-dziala" label="Jak działa" />
        <LandingHeaderMenuItem href="#cennik" label="Cennik" />
        <LandingHeaderMenuItem href="#faq" label="FAQ" />
        <LandingHeaderMenuItem
          href={LOGIN_URL}
          label="Logowanie"
          type="button"
          variant="outlinePrimary"
        />
        <LandingHeaderMenuItem
          href={REGISTER_URL}
          label={copy.cta.primary.text}
          type="button"
        />
      </LandingHeader>

      {/* Hero Section */}
      <LandingPrimaryVideoCtaSection
        title={copy.hero.h1}
        description={copy.hero.headline}
        videoPoster="/app_mock_desktop.png"
        videoSrc="https://cache.shipixen.com/features/8-customize-pages.mp4"
        // imageAlt="PrintFlow app"
        startPlay={isPlaying}
        textPosition="center"
        videoPosition="center"
        videoShadow="soft"
        minHeight={500}
        // minHeight={1000}
        // effectComponent={<LandingShapesCtaBg />}
        // effectComponent={<LandingWavesCtaBg variant="hero" />}
        effectComponent={<LandingGridPatternCtaBg variant="hero" />}

      >

        <Button size="xl" asChild variant="primary">
          <a href={REGISTER_URL}>
            {copy.cta.primary.text}
          </a>
        </Button>
        <Button size="xl" variant="outlinePrimary">
          <a href="https://calendly.com/printflowapp/printflow-darmowa-prezentacja-q-a">
            {copy.cta.secondary.text}
          </a>
        </Button>

        <LandingDiscount
          className="w-full flex justify-center"
          discountValueText={copy.hero.discountValue}
          discountDescriptionText={copy.hero.discountDesc}
        />    
      </LandingPrimaryVideoCtaSection>

      <ProductTour
        steps_1={copy.product_tour.steps_1}
        steps_2={copy.product_tour.steps_2}
      />

      {/* Feature List (dopasowane do funkcji) */}
      <section id={`${useId()}_features`}>
        <LandingFeatureList
          // withBackground
          title={copy.features_1.title}
          description={copy.features_1.description}
          featureItems={copy.features_1.items}
        />
        <LandingFeatureList
          withBackground
          title={copy.features_2.title}
          withBackgroundGlow
          // description="Zawsze pod ręką, w nowoczesnym wydaniu"
          featureItems={copy.features_2.items}
        />
      </section>


      <section>
        <LandingProductSteps
          title={copy.how_it_works.title}
          description={copy.how_it_works.description}
          // withBackground
        >
          {copy.how_it_works.items.map((feature) => (
            <LandingProductFeature
              key={feature.title}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
            />
          ))}



        </LandingProductSteps>
      </section>
      
      {/* Problem Agitator */}
      {/*<LandingProblemAgitator*/}
      {/*  title="Czy Twoja drukarnia traci pieniądze przez brak kontroli procesu?"*/}
      {/*  description="Ręczne operacje, rozproszone dane i brak analityki prowadzą do opóźnień, odpadów i wyższych kosztów."*/}
      {/*  // cliffhanger="PrintFlow — platforma zaprojektowana specjalnie dla drukarni produkcyjnych"*/}
      {/*>*/}
      {/*  <LandingProblemAgitatorItem>Chaos w zarządzaniu zleceniami i materiałami</LandingProblemAgitatorItem>*/}
      {/*  <LandingProblemAgitatorItem>Brak widoczności odpadów i kosztów produkcji</LandingProblemAgitatorItem>*/}
      {/*  <LandingProblemAgitatorItem>Czasochłonne wyceny i dokumenty</LandingProblemAgitatorItem>*/}
      {/*  <LandingProblemAgitatorItem>Brak mierzalnej wydajności pracowników</LandingProblemAgitatorItem>*/}
      {/*  /!*<LandingProblemAgitatorComment className="-right-8 top-0">*!/*/}
      {/*  /!*  Efekt: straty, opóźnienia i niezadowoleni klienci*!/*/}
      {/*  /!*</LandingProblemAgitatorComment>*!/*/}
      {/*</LandingProblemAgitator>*/}

      {/* Problem / Solution (nowa sekcja) */}
      {/*<LandingProductProblemSolution*/}
      {/*  title="Rozwiązanie"*/}
      {/*  description="Przekształć złożony proces produkcji w przejrzysty i kontrolowalny przepływ pracy."*/}
      {/*  withBackground*/}
      {/*  problems={[*/}
      {/*    {*/}
      {/*      title: "Rozproszone dane i ręczne aktualizacje",*/}
      {/*      description:*/}
      {/*        "Informacje o klientach, produktach, materiałach i zleceniach żyją w arkuszach i notatkach.",*/}
      {/*      // icon: <Workflow className="w-6 h-6" />,*/}
      {/*    },*/}
      {/*    {*/}
      {/*      title: "Brak kontroli etapów produkcji",*/}
      {/*      description:*/}
      {/*        "Niejasne statusy, brak historii i trudno mierzalna odpowiedzialność.",*/}
      {/*      // icon: <Layers className="w-6 h-6" />,*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*  solutions={[*/}
      {/*    {*/}
      {/*      title: "Jedno źródło prawdy",*/}
      {/*      description:*/}
      {/*        "Centralna baza klientów, maszyn, produktów, materiałów i zleceń — powiązana, spójna i gotowa do raportowania."*/}
      {/*      // icon: <ShieldCheck className="w-6 h-6" />,*/}
      {/*    },*/}
      {/*    {*/}
      {/*      title: "Pełna kontrola nad pracą",*/}
      {/*      description: "Wszystkie informacje zawsze pod ręką - nie przegap żadnej aktualizacji dzięki powiadomieniom."*/}
      {/*    },*/}
      {/*    {*/}
      {/*      title: "Etapy i pełna ścieżka audytu",*/}
      {/*      description:*/}
      {/*        "5 statusów dopasowanych do fleksografii, dedykowane formularze, historia kto/co/kiedy + możliwość druku częściowego."*/}
      {/*      // icon: <Rocket className="w-6 h-6" />,*/}
      {/*    }*/}
      {/*  ]}*/}
      {/*/>*/}

      <section>
        <LandingProductFeaturesGrid
          title={copy.roadmap.title}
          withBackgroundGlow
        >
          {copy.roadmap.items.map(({ title, imageSrc, imageAlt, status }) => (
            <LandingProductFeature
              key={title}
              title={title}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              descriptionComponent={
                <div
                  className={`rounded-full mt-[-14px] border-${status.border} border !text-black flex`}
                >
                  <LandingLeadingPill borderVariant="primary">
                    <div className="flex items-center">
                      <status.icon
                        className={`text-${status.color} w-4 h-4 mr-1`}
                      />
                      <span>{status.label}</span>
                    </div>
                  </LandingLeadingPill>
                </div>
              }
            />
          ))}
        </LandingProductFeaturesGrid>
      </section>

      <section>
        <LandingPricingSection
          // pt0
          title={copy.pricing.title}
          description="Transparentne ceny. Możliwość zmiany planu w dowolnym momencie."
          // withBackgroundGlow
          // backgroundGlowVariant="secondary"
        >
        </LandingPricingSection>
        <div className="w-full m-0 mx-auto flex justify-center items-center">
          <Tabs defaultValue="monthly">
            <TabsList className="justify-self-center ml-auto mr-auto block rounded-full">
              <TabsTrigger value="monthly">Miesięcznie</TabsTrigger>
              <TabsTrigger value="annual">Rocznie</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <LandingPricingSection
                pt0
                // title="Wybierz plan dopasowany do Twojej drukarni"
                // description="Transparentne ceny. Możliwość zmiany planu w dowolnym momencie."
                // withBackgroundGlow
                // backgroundGlowVariant="secondary"
              >
                {copy.pricing.plans.map(
                  ({ title, description, prices, ctaText, highlighted, features, featured }) => (
                    <LandingPricingPlan
                      key={title}
                      title={title}
                      description={description}
                      price={typeof prices.monthly.price === "number" ? formatCurrency(prices.monthly.price) : prices.monthly.price}
                      discountPrice={typeof prices.monthly.discountPrice === "number" ? formatCurrency(prices.monthly.discountPrice) : prices.monthly.discountPrice}
                      priceSuffix={prices.monthly.priceSuffix}
                      ctaText={ctaText}
                      highlighted={highlighted}
                      featured={featured}
                    >
                      {features.map((feature) => (
                        <p key={feature}>{feature}</p>
                      ))}
                    </LandingPricingPlan>
                  )
                )}
              </LandingPricingSection>
            </TabsContent>
            <TabsContent value="annual">
              <LandingPricingSection
                pt0
                // title="Wybierz plan dopasowany do Twojej drukarni"
                // description="Transparentne ceny. Możliwość zmiany planu w dowolnym momencie."
                // withBackgroundGlow
                // backgroundGlowVariant="secondary"
              >
                {copy.pricing.plans.map(
                  ({ title, description, prices, ctaText, highlighted, features, featured }) => (
                    <LandingPricingPlan
                      key={title}
                      title={title}
                      description={description}
                      price={typeof prices.annual.price === "number" ? formatCurrency(prices.annual.price) : prices.annual.price}
                      discountPrice={typeof prices.annual.discountPrice === "number" ? formatCurrency(prices.annual.discountPrice) : prices.annual.discountPrice}
                      priceSuffix={prices.annual.priceSuffix}
                      ctaText={ctaText}
                      highlighted={highlighted}
                      featured={featured}
                    >
                      {features.map((feature) => (
                        <p key={feature}>{feature}</p>
                      ))}
                    </LandingPricingPlan>
                  )
                )}
              </LandingPricingSection>
            </TabsContent>
          </Tabs>
        </div>



      </section>

      {/* FAQ */}
      <section>
        <LandingFaqCollapsibleSection
          withBackgroundGlow
          title={copy.faq.title}
          description={copy.faq.description}
          faqItems={copy.faq.items}
          withBackground
        />
      </section>

      {/* Bottom CTA */}
      <section>
        <LandingPrimaryTextCtaSection
          title={copy.bottomCta.title}
          description={copy.bottomCta.description}
          textPosition="center"
          // effectComponent={<LandingDotParticleCtaBg />}
          // effectComponent={<LandingGridPatternCtaBg variant="primary" />}
          // effectComponent={<LandingFlickeringGridCtaBg variant="primary" />}
          effectComponent={<LandingPathsCtaBg variant="primary" />}



          // withBackground
          // withBackgroundGlow
        >
          <Button size="xl" asChild variant="primary">
            <a href={REGISTER_URL}>{copy.cta.primary.text}</a>
          </Button>
          <Button size="xl" variant="outlinePrimary" asChild>
            <a href={copy.cta.secondary.path}>{copy.cta.secondary.text}</a>
          </Button>
          
          <div>
            <LandingSocialProofBand className="bg-transparent">
              <LandingSocialProofBandItem>
                W fazie rozwoju - Twoja opinia pomoże nam tworzyć lepszy produkt
              </LandingSocialProofBandItem>
            </LandingSocialProofBand>
            <LandingSocialProofBand className="bg-transparent">
              <LandingSocialProofBandItem>
                Stworzony przez zespół z doświadczeniem w branży poligraficznej
              </LandingSocialProofBandItem>
            </LandingSocialProofBand>
            <LandingSocialProofBand className="bg-transparent">
              <LandingSocialProofBandItem>
                Pierwsi użytkownicy pomagają kształtować przyszłość PrintFlow
              </LandingSocialProofBandItem>
            </LandingSocialProofBand>
          </div>
          
        </LandingPrimaryTextCtaSection>
      </section>

      {/* Newsletter */}
      <LandingNewsletterSection
        title={copy.newsletter_sign_up.title}
        description={copy.newsletter_sign_up.description}
        buttonLabel={copy.newsletter_sign_up.buttonLabel}
        placeholderLabel={copy.newsletter_sign_up.placeholderLabel}
        withBackground
        withAvatars
      />

      {/* Footer */}
      <LandingFooter
        // title="PrintFlow"
        description="Kompleksowa platforma do zarządzania drukarnią — dziś fleksografia, jutro także cyfrowy arkusz i rola."
        footnote={`© ${new Date().getFullYear()} PrintFlow. Wszystkie prawa zastrzeżone.`}
        withBackgroundGlow
        logoComponent={<Logo />}
      >
        <LandingFooterColumn title="Produkt">
          <LandingFooterLink href="#moduly">Moduły</LandingFooterLink>
          <LandingFooterLink href="#funkcje">Funkcje</LandingFooterLink>
          <LandingFooterLink href="#cennik">Cennik</LandingFooterLink>
          <LandingFooterLink href="#faq">FAQ</LandingFooterLink>
        </LandingFooterColumn>
        <LandingFooterColumn title="Wsparcie">
          <LandingFooterLink href="#pomoc">Pomoc</LandingFooterLink>
          <LandingFooterLink href="#dokumentacja">Dokumentacja</LandingFooterLink>
          <LandingFooterLink href="#kontakt">Kontakt</LandingFooterLink>
          <LandingFooterLink href="#status">Status systemu</LandingFooterLink>
        </LandingFooterColumn>
        <LandingFooterColumn title="Firma">
          <LandingFooterLink href="#o-nas">O nas</LandingFooterLink>
          <LandingFooterLink href="#blog">Blog</LandingFooterLink>
          <LandingFooterLink href="#kariera">Kariera</LandingFooterLink>
          <LandingFooterLink href="#partnerzy">Partnerzy</LandingFooterLink>
        </LandingFooterColumn>
        <LandingFooterColumn title="Prawne">
          <LandingFooterLink href="#regulamin">Regulamin</LandingFooterLink>
          <LandingFooterLink href="#prywatnosc">Polityka prywatności</LandingFooterLink>
          <LandingFooterLink href="#rodo">RODO</LandingFooterLink>
          <LandingFooterLink href="#cookies">Cookies</LandingFooterLink>
        </LandingFooterColumn>
      </LandingFooter>
    </>
  );
}
