"use client";

import ProductTour from "@/app/components/product-tour";
import {
  LandingDiscount,
  LandingFaqCollapsibleSection,
  LandingFeatureList,
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink, LandingGridPatternCtaBg, LandingLeadingPill,
  LandingPathsCtaBg, LandingPrimaryVideoCtaSection
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
import { useId, useState } from "react";
import { copy, LOGIN_URL, REGISTER_URL } from "../copy";
import AnnoucmentBar from "../components/annoucment-bar";
import Link from "next/link";
import { Phone } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// const IS_DEV = false;
// const LOGIN_URL = IS_DEV ? `http://localhost:3000/login` : `${process.env.NEXT_PUBLIC_APP_URL}/login`;
// const REGISTER_URL = IS_DEV ? `http://localhost:3000/register` : `${process.env.NEXT_PUBLIC_APP_URL}/register`

// const copy = {
  // h1: "Zarządzanie drukarnią oparte na danych, nie domysłach"
  // h1: "Zwiększ zyski swojej drukarni o 30% dzięki kontroli odpadów"
// }

export default function V1() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/*<AnnoucmentBar 
      
      strong="promocja Early Bird 🕊️"
      text="Wypróbuj 30 dni za darmo • plan Lifetime -50%"
      // linkComponent={<>
      //   <Link href="/">
      //     <Button variant="default" className="flex-none rounded-full bg-white/10 px-3.5 py-0 text-sm font-semibold text-white shadow-xs inset-ring-white/20 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      //       Skontaktuj się z nami 📞
      //     </Button>
      //   </Link>
      // </>}
      
      
      
      />*/}
      
      {/* Header */}
      <LandingHeader
        withBackground
        fixed
        logoComponent={<Logo centered />}
        annoucmentBarValue="promocja Early Birds 🕊️ • Wypróbuj 30 dni za darmo • plan Lifetime -50%"
      >
        <LandingHeaderMenuItem href="/" type="icon-button" variant="outlinePrimary" label=<><Phone /></> />
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
          label={copy.ctaPrimary}
          type="button"
        />
      </LandingHeader>

      {/* Hero Section */}
      <LandingPrimaryVideoCtaSection
        title={copy.hero.h1}
        // title={<>
        //   <TextType
        //     className="text-4xl"
        //     text={[copy.h1]}
        //     typingSpeed={20}
        //     pauseDuration={1500}
        //     showCursor={false}
        //     cursorCharacter="|"
        //   />
        // </>}
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
            {copy.ctaPrimary}
          </a>
        </Button>
        <Button size="xl" variant="outlinePrimary">
          <a href="https://calendly.com/printflowapp/printflow-darmowa-prezentacja-q-a">
            {copy.ctaSecondary}
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

      {/* Sekcja: Moduły (nowa sekcja Product Features Grid) */}
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

      {/* Pasek statusu modułów (Social Proof Band – nowa komunikacja roadmapy) */}
      {/*<section className="py-8 text-center" aria-label="Status modułów">*/}
      {/*  <LandingSocialProofBand>*/}
      {/*    <LandingSocialProofBandItem graphic="zap">*/}
      {/*      Fleksografia: dostępna produkcyjnie*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*    <LandingSocialProofBandItem graphic="magic">*/}
      {/*      Cyfrowy arkusz: w przygotowaniu*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*    <LandingSocialProofBandItem graphic="time">*/}
      {/*      Cyfrowy rolowy: w przygotowaniu*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*  </LandingSocialProofBand>*/}
      {/*</section>*/}


      {/* Key Points (krótkie USP) */}


      {/* Stats (nowa sekcja) */}
      {/*<LandingStatsSection*/}
      {/*  title="Efekty wdrożenia"*/}
      {/*  description="Dane, które mają znaczenie w codziennej produkcji"*/}
      {/*  stats={[*/}
      {/*    {*/}
      {/*      value: "5×", label: "Szybsze przygotowanie ofert",*/}
      {/*      description: "aaa"*/}
      {/*    },*/}
      {/*    { value: '20%', label: 'Mniej odpadów dzięki kontroli etapów', description: "aaa" },*/}
      {/*    { value: '100%', label: 'Historia operacji i rozliczalność', description: "aaa" },*/}
      {/*    { value: '24/7', label: 'Dostęp do kluczowych danych', description: "aaa" },*/}
      {/*  ]}*/}
      {/*  withBackground*/}
      {/*/>*/}

      {/* Kroki: Jak działa */}

      {/*<LandingProductTourSection*/}
      {/*  title="Jak to działa — 5 prostych kroków"*/}
      {/*  description="Założenie konta zajmuje 3 minuty!"*/}
      {/*  defaultValue="step-1"*/}
      {/*>*/}
      {/*  <LandingProductTourList>*/}
      {/*    {[*/}
      {/*      {*/}
      {/*        value: "step-1",*/}
      {/*        title: "Dodaj pierwszego Klienta",*/}
      {/*        description:*/}
      {/*          "Wypełnij formularz i kliknij \"Dodaj\". Jeśli chciałbyś zaimportować istniejącą listę Klientów (np. z pliku CSV), pomożemy w tym procesie!",*/}

      {/*      },*/}
      {/*      {*/}
      {/*        value: "step-2",*/}
      {/*        title: "Stwórz konta pracowników",*/}
      {/*        description:*/}
      {/*          "Podaj login lub email, określ Rolę, wygeneruj hasło, a skopiowane do schowka dane logowania prześlij pracownikowi.",*/}


      {/*      },*/}
      {/*      {*/}
      {/*        value: "step-3",*/}
      {/*        title: "Wybierz Klienta, a następnie dodaj Produkt",*/}
      {/*        description:*/}
      {/*          "Stwórz wszystkie komponenty Produktu, pozostając na tej samej stronie i kliknij \"Dodaj\". Produkt stworzony i przypisany do wybranego Klienta.",*/}


      {/*      },*/}
      {/*      {*/}
      {/*        value: "step-4",*/}
      {/*        title: "Utwórz Zlecenie z nowego Produktu",*/}
      {/*        description:*/}
      {/*          "Wybierz Klienta, Produkt, który przed chwilą utworzyłeś, podaj nakład, datę realizacji i stwórz Zlecenie.",*/}

      {/*      },*/}
      {/*      {*/}
      {/*        value: "step-5",*/}
      {/*        title: "Przeglądaj i zarządzaj Zleceniami w 1 miejscu",*/}
      {/*        description:*/}
      {/*          "Filtruj i przeglądaj Zlecenia, sprawdzaj etap produkcji, monitoruj odpady oraz zgłoszone uwagi.",*/}

      {/*      }*/}
      {/*    ].map(({ value, title, description }) => (*/}
      {/*      <LandingProductTourTrigger key={value} value={value}>*/}
      {/*        <p className="text-xl font-bold">{title}</p>*/}
      {/*        <p>{description}</p>*/}
      {/*      </LandingProductTourTrigger>*/}
      {/*    ))}*/}
      {/*  </LandingProductTourList>*/}

      {/*  {[*/}
      {/*    {*/}
      {/*      value: "step-1",*/}
      {/*      src: "/add_client_desktop.png",*/}
      {/*      alt: "Dodawanie Klienta"*/}

      {/*    },*/}
      {/*    {*/}
      {/*      value: "step-2",*/}
      {/*      src: "/add_user_desktop.png",*/}
      {/*      alt: "Tworzenie konta pracownika"*/}


      {/*    },*/}
      {/*    {*/}
      {/*      value: "step-3",*/}
      {/*      src: "/add_product_desktop.png",*/}
      {/*      alt: "Dodawanie Produktu"*/}


      {/*    },*/}
      {/*    {*/}
      {/*      value: "step-4",*/}
      {/*      src: "/add_order_desktop.png",*/}
      {/*      alt: "Dodawanie Zlecenia"*/}

      {/*    },*/}
      {/*    {*/}
      {/*      value: "step-5",*/}
      {/*      src: "/orders_desktop.png",*/}
      {/*      alt: "Zarządzanie zleceniami"*/}

      {/*    }*/}
      {/*  ].map(({ value, src, alt }) => (*/}
      {/*    <LandingProductTourContent value={value}>*/}
      {/*      <Image*/}
      {/*        width={400}*/}
      {/*        height={600}*/}
      {/*        className="w-full rounded-md"*/}
      {/*        src={src}*/}
      {/*        alt={alt}*/}
      {/*        fetchPriority="high"*/}
      {/*      />*/}
      {/*    </LandingProductTourContent>*/}
      {/*  ))}*/}
      {/*</LandingProductTourSection>*/}

      {/*<LandingProductTourSection*/}
      {/*  title="Jak to działa — 5 prostych kroków"*/}
      {/*  description="Założenie konta zajmuje 3 minuty!"*/}
      {/*  defaultValue="step-1"*/}
      {/*>*/}
      {/*  <LandingProductTourList>*/}
      {/*    <LandingProductTourTrigger value="step-1">*/}
      {/*      <p className="text-xl font-bold">*/}
      {/*        Dodaj pierwszego Klienta*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        Wypełnij formularz i kliknij "Dodaj". Jeśli chciałbyś zaimportować istniejącą listę Klientów (np. z pliku CSV), pomożemy w tym procesie!*/}
      {/*      </p>*/}
      {/*    </LandingProductTourTrigger>*/}

      {/*    <LandingProductTourTrigger value="step-2">*/}
      {/*      <p className="text-xl font-bold">*/}
      {/*        Stwórz konta pracowników*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        Podaj login lub email, określ Rolę, wygeneruj hasło, a skopiowane do schowka dane logowania prześlij pracownikowi.*/}
      {/*      </p>*/}
      {/*    </LandingProductTourTrigger>*/}

      {/*    <LandingProductTourTrigger value="step-3">*/}
      {/*      <p className="text-xl font-bold">*/}
      {/*        Wybierz Klienta, a następnie dodaj Produkt*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        Stwórz wszystkie komponenty Produktu, pozostając na tej samej stronie i kliknij "Dodaj". Produkt stworzony i przypisany do wybranego Klienta.*/}
      {/*      </p>*/}
      {/*    </LandingProductTourTrigger>*/}

      {/*    <LandingProductTourTrigger value="step-4">*/}
      {/*      <p className="text-xl font-bold">*/}
      {/*        Utwórz Zlecenie z nowego Produktu*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        Wybierz Klienta, Produkt, który przed chwilą utworzyłeś, podaj nakład, datę realizacji i stwórz Zlecenie.*/}
      {/*      </p>*/}
      {/*    </LandingProductTourTrigger>*/}

      {/*    <LandingProductTourTrigger value="step-5">*/}
      {/*      <p className="text-xl font-bold">*/}
      {/*        Przeglądaj i zarządzaj Zleceniami w 1 miejscu*/}
      {/*      </p>*/}
      {/*      <p>*/}
      {/*        Filtruj i przeglądaj Zlecenia, sprawdzaj etap produkcji, monitoruj odpady oraz zgłoszone uwagi.*/}
      {/*      </p>*/}
      {/*    </LandingProductTourTrigger>*/}
      {/*  </LandingProductTourList>*/}

      {/*  <LandingProductTourContent value="step-1">*/}
      {/*    <img*/}
      {/*      className="w-full rounded-md"*/}
      {/*      src="/add_client_desktop.png"*/}
      {/*      alt="Dodawanie Klienta"*/}
      {/*    />*/}
      {/*  </LandingProductTourContent>*/}

      {/*  <LandingProductTourContent value="step-2">*/}
      {/*    <img*/}
      {/*      className="w-full rounded-md"*/}
      {/*      src="/add_user_desktop.png"*/}
      {/*      alt="Tworzenie konta pracownika"*/}
      {/*    />*/}
      {/*  </LandingProductTourContent>*/}

      {/*  <LandingProductTourContent value="step-3">*/}
      {/*    <img*/}
      {/*      className="w-full rounded-md"*/}
      {/*      src="/add_product_desktop.png"*/}
      {/*      alt="Dodawanie Produktu"*/}
      {/*    />*/}
      {/*  </LandingProductTourContent>*/}

      {/*  <LandingProductTourContent value="step-4">*/}
      {/*    <img*/}
      {/*      className="w-full rounded-md"*/}
      {/*      src="/add_order_desktop.png"*/}
      {/*      alt="Dodawanie Zlecenia"*/}
      {/*    />*/}
      {/*  </LandingProductTourContent>*/}

      {/*  <LandingProductTourContent value="step-5">*/}
      {/*    <img*/}
      {/*      className="w-full rounded-md"*/}
      {/*      src="/orders_desktop.png"*/}
      {/*      alt="Zarządzanie zleceniami"*/}
      {/*    />*/}
      {/*  </LandingProductTourContent>*/}
      {/*</LandingProductTourSection>*/}


      {/* Showcase / Social Proof rozszerzony */}
      {/*<section className="py-12 text-center">*/}
      {/*  <h2 className="text-2xl font-bold mb-8">Zaufały nam drukarnie w całej Polsce</h2>*/}
      {/*  <LandingSocialProofBand>*/}
      {/*    <LandingSocialProofBandItem graphic="checkmark">*/}
      {/*      250+ kont utworzonych w systemie*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*    <LandingSocialProofBandItem graphic="trophy">*/}
      {/*      Wysoka stabilność i jakość wdrożeń*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*    <LandingSocialProofBandItem graphic="rating">*/}
      {/*      Średnia ocena 4.9/5*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*    <LandingSocialProofBandItem graphic="zap">*/}
      {/*      Szybkie wdrożenie i start pracy*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*    <LandingSocialProofBandItem graphic="magic">*/}
      {/*      Automatyzacja krytycznych procesów*/}
      {/*    </LandingSocialProofBandItem>*/}
      {/*  </LandingSocialProofBand>*/}
      {/*</section>*/}

      {/* Cennik */}
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
