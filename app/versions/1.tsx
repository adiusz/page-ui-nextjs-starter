"use client";

import ProductTour from "@/app/components/product-tour";
import {
  LandingDiscount,
  LandingFaqCollapsibleSection,
  LandingFeatureList,
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink, LandingGridPatternCtaBg, LandingLeadingPill,
  LandingPathsCtaBg, LandingPrimaryVideoCtaSection,
  LandingWavesCtaBg
} from "@/components/landing";
import { LandingPrimaryImageCtaSection, LandingPrimaryTextCtaSection } from "@/components/landing/cta/LandingPrimaryCta";
import { LandingProductFeature } from "@/components/landing/LandingProductFeature";
import { LandingProductFeaturesGrid } from "@/components/landing/LandingProductFeaturesGrid";
import { LandingProductSteps } from "@/components/landing/LandingProductSteps";
import { LandingHeader } from "@/components/landing/navigation/LandingHeader";
import { LandingHeaderMenuItem } from "@/components/landing/navigation/LandingHeaderMenuItem";
import { LandingNewsletterSection } from "@/components/landing/newsletter/LandingNewsletterSection";
import { LandingPricingPlan } from "@/components/landing/pricing/LandingPricingPlan";
import { LandingPricingSection } from "@/components/landing/pricing/LandingPricingSection";
import Logo from "@/components/logo";
import {
    Button
} from "@/components/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import ShinyText from "@/src/components/ShinyText/ShinyText";
import TextType from "@/src/components/TextType/TextType";
import { Bell, Calculator, Check, Image as ImageIcon, Lightbulb, Loader, Package, Route, Users2, Warehouse } from "lucide-react";
import RotatingText from "@/src/components/RotatingText/RotatingText";
import { useEffect, useId, useRef, useState } from "react";

const IS_DEV = false;
const LOGIN_URL = IS_DEV ? `http://localhost:3000/login` : `${process.env.NEXT_PUBLIC_APP_URL}/login`;
const REGISTER_URL = IS_DEV ? `http://localhost:3000/register` : `${process.env.NEXT_PUBLIC_APP_URL}/register`

const copy = {
  // h1: "Zarządzanie drukarnią oparte na danych, nie domysłach"
  h1: "Zwiększ zyski swojej drukarni o 30% dzięki kontroli odpadów"
}

export default function V1() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {/* Header */}
      <LandingHeader
        withBackground
        fixed
        logoComponent={<Logo centered />}
      >
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
          label="Rozpocznij za darmo"
          type="button"
        />
      </LandingHeader>

      {/* Hero Section */}
      <LandingPrimaryVideoCtaSection
        title={<>
          <TextType
          text={[copy.h1]}
            typingSpeed={20}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
          />
        </>}

        description={
          <>
            <span>PrintFlow to nowoczesna platforma online do prowadzenia drukarni fleksograficznych. Odzyskaj kontrolę nad</span>
            {/*odpadami, marżą, produktami, zleceniami, dokumentami. Analizuj kluczowe dane.*/}
            <RotatingText
              texts={["odpadami.", "marżą.", "produktami.", "zleceniami.", "dokumentami."]}
              mainClassName="inline-flex w-[150px] justify-start px-[4px] bg-transparent text-primary-600 font-bold overflow-hidden py-0.5 sm:py-0.5 md:py-0.5 rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden "
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={1500}
            />
            <br />
            <span>Analizuj kluczowe dane. Podejmuj lepsze decyzje.</span>
          </>
        }
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
            Wypróbuj
          </a>
        </Button>
        <Button size="xl" variant="outlinePrimary" onClick={() => setIsPlaying(true)}>
          <span>Zobacz demo</span>
        </Button>

        <LandingDiscount
          className="w-full flex justify-center"
          discountValueText="Testuj przez 30 dni za darmo."
          discountDescriptionText="*Karta kredytowa nie jest wymagana."

        />
      </LandingPrimaryVideoCtaSection>

      <ProductTour />

      {/* Feature List (dopasowane do funkcji) */}
      <section id={`${useId()}_features`}>
        <LandingFeatureList
          // withBackground
          title="Wszystko, czego potrzebujesz w jednej platformie"
          description="Zawsze pod ręką, w nowoczesnym wydaniu"
          featureItems={[
            {
              title: "Klienci i maszyny",
              description: "Pełna baza Klientów, z przypisanmi Produktami oraz Zleceniami, a także rejestr maszyn.",
              icon: <Users2 className="w-6 h-6" />
            },
            {
              title: "Produkty i komponenty",
              description: "Produkty ze specyfikacją: wykrojniki, kolory, materiały, podglądy i inne parametry techniczne.",
              icon: <ImageIcon className="w-6 h-6" />
            },
            {
              title: "Zlecenia z etapami produkcji",
              description: "Dedykowane formularze, zgłaszanie uszkodzonych polimerów i użycia innych kolorów.",
              icon: <Package className="w-6 h-6" />
            },
          ]}
        />
        <LandingFeatureList
          withBackground
          title="Pełna ścieżka audytu: kto, co, ile i kiedy"
          withBackgroundGlow
          // description="Zawsze pod ręką, w nowoczesnym wydaniu"
          featureItems={[
            {
              title: "Dowiedz się kto dodał daną Wycenę oraz jakich cen użył",
              description: "Chcesz wiedzieć, który z handlowców generuje największe marże? Nie ma problemu.",
              icon: <Calculator className="w-6 h-6" />
            },
            {
              title: "Kontrola przekazań i zwrotów materiałów",
              description: "Stany magazynowe nie zawsze się zgadzają? Sprawdzaj kto i kiedy wydał oraz odebrał materiał.",
              icon: <Warehouse className="w-6 h-6" />
            },
            // {
            //   title: "Sprawdzaj kto i kiedy pracował nad danym Zleceniem",
            //   description: "Od momentu wydania materiału, przez drukowanie po przetwarzanie. Wszystko w jednym miejscu.",
            //   icon: <Route className="w-6 h-6" />
            // },
            {
              title: "Bądź na bieżąco dzięki Powiadomieniom",
              description: "Zmiana statusu zamówienia? Zgłoszone uwagi? Problemy techniczne? Twoim pracownikom nic nie umknie.",
              icon: <Bell className="w-6 h-6" />
            },
          ]}
        />
      </section>


      <section id="jak-dziala">
        <LandingProductSteps
          title="Jak to działa — w 4 prostych krokach"
          description={<>
            <a className="text-primary-600 underline" href={REGISTER_URL}>Zarejestruj się</a>
            <span> i sprawdź. Założenie konta zajmuje 3 minuty!</span>
          </>}
          // withBackground
        >
          <LandingProductFeature
            title="Dodaj pirewszego Klienta"
            description={`Wypełnij dane i dodaj Klienta. Jeśli chicałbyś zaimportować instniejącą listę Klientów (np. z pliku CSV), pomożemy w tym procesie!`}
            imageSrc="/add_client_desktop.png"
            imageAlt="Dodawanie Klienta"
          />
          <LandingProductFeature
            title="Wybierz Klienta, a następnie dodaj Produkt"
            description={`Stwórz wszystkie komponenty Produktu, pozostając na tej samej stronie i zapisz. Produkt stworzony i przypisany do wybranego Klienta.`}
            imageSrc="/add_product_desktop.png"
            imageAlt="Dodawanie Produktu"
          />
          <LandingProductFeature
            title="Utwórz Zlecenie dla nowego Produktu"
            description={`Wybierz Klienta, Produkt, który przed chwilą utworzyłeś, podaj nakład, datę realizacji i stwórz Zlecenie.`}
            imageSrc="/add_order_desktop.png"
            imageAlt="Dodwanie Zlecenia"
          />
          <LandingProductFeature
            title="Przeglądaj i zarządzaj Zleceniami w 1 miejscu"
            description={`Filtruj i przeglądaj Zlecenia, sprawdzaj etap produkcji, monitoruj odpady oraz zgłoszone uwagi.`}
            imageSrc="/orders_desktop.png"
            imageAlt="Zarządzanie zleceniami"
          />

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
      <section id="moduly">
        <LandingProductFeaturesGrid
          title="Trzy moduły — jeden ekosystem"
          // description="Korzystaj już dziś z pełnego modułu fleksograficznego. Moduły cyfrowe w przygotowaniu."
          withBackgroundGlow
        >
          <LandingProductFeature
            title="Fleksograficzny"
            descriptionComponent={<>
              {/*<span>Kompletny, działający moduł: 5 statusów zlecenia, wydania i zwroty materiałów ze Sklepu/Magazynu, rejestr odpadów, zgłaszanie uszkodzonych polimerów, praca na kolorach, częściowy druk, pełna historia operacji.</span>*/}
              <div className="rounded-full mt-[-14px] border-green-500 border !text-black flex">
                <LandingLeadingPill
                  borderVariant="primary"
                  // textVariant="primary"
                >
                  <div className="flex items-center">
                    <Check className="text-green-500 w-4 h-4 mr-1"/>
                    <span>Dostępny</span>
                  </div>
                </LandingLeadingPill>
              </div>
            </>}
            imageSrc="/module_f.png"
            imageAlt="Moduł fleksograficzny"
          />
          <LandingProductFeature
            title="Cyfra arkuszowa"
            // description="Planowane: konfiguracja pod digital sheet, uproszczone statusy, kalkulacje kosztowe dla krótkich serii, integracje z RIP/DFE."
            descriptionComponent={<>
              {/*<span>Kompletny, działający moduł: 5 statusów zlecenia, wydania i zwroty materiałów ze Sklepu/Magazynu, rejestr odpadów, zgłaszanie uszkodzonych polimerów, praca na kolorach, częściowy druk, pełna historia operacji.</span>*/}
              <div className="rounded-full mt-[-14px] border-yellow-500 border !text-black flex">
                <LandingLeadingPill
                  borderVariant="primary"
                  // textVariant="primary"
                >
                  <div className="flex items-center">
                    <Loader className="text-yellow-500 w-4 h-4 mr-1"/>
                    <span>Budowany</span>
                  </div>
                </LandingLeadingPill>
              </div>
            </>}
            imageSrc="/module_ds.png"
            imageAlt="Moduł cyfrowy arkusz"
          />
          <LandingProductFeature
            title="Cyfra rolowa"
            // description="Planowane: parametry roli, przebieg pracy inline, automatyzacja przeliczeń materiałowych i rozliczeń wolumenu."
            descriptionComponent={<>
              {/*<span>Kompletny, działający moduł: 5 statusów zlecenia, wydania i zwroty materiałów ze Sklepu/Magazynu, rejestr odpadów, zgłaszanie uszkodzonych polimerów, praca na kolorach, częściowy druk, pełna historia operacji.</span>*/}
              <div className="rounded-full mt-[-14px] border-gray-500 border !text-black flex">
                <LandingLeadingPill
                  borderVariant="primary"
                  // textVariant="primary"
                >
                  <div className="flex items-center">
                    <Lightbulb className="text-gray-500 w-4 h-4 mr-1"/>
                    <span>Planowany</span>
                  </div>
                </LandingLeadingPill>
              </div>
            </>}
            imageSrc="/module_dw.png"
            imageAlt="Moduł cyfrowy rolowy"
          />
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
          title="Wybierz plan dopasowany do Twojej drukarni"
          description="Transparentne ceny. Możliwość zmiany planu w dowolnym momencie."
          // withBackgroundGlow
          // backgroundGlowVariant="secondary"
        >
        </LandingPricingSection>
        <div className="w-full m-0 mx-auto flex justify-center items-center">
          <Tabs defaultValue="monthly">
            <TabsList className="justify-self-center ml-auto mr-auto block rounded-full">
              <TabsTrigger value="monthly">Miesięcznie</TabsTrigger>
              <TabsTrigger value="anually">Rocznie</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <LandingPricingSection
                pt0
                // title="Wybierz plan dopasowany do Twojej drukarni"
                // description="Transparentne ceny. Możliwość zmiany planu w dowolnym momencie."
                // withBackgroundGlow
                // backgroundGlowVariant="secondary"
              >
                <LandingPricingPlan
                  title="Professional"
                  description="Kompletne wdrożenie dla drukarni produkcyjnych"
                  price="1000 zł"
                  discountPrice="800 zł"
                  priceSuffix="/miesiąc"
                  ctaText="Wybierz Professional"
                  highlighted
                >
                  <p>Testuj przez 30 dni za darmo</p>
                  <p>Pełny moduł fleksograficzny</p>
                  <p>Wszystkie funkcje aplikacji</p>
                  <p>Import listy klientów</p>
                  <p>Wsparcie telefoniczne</p>
                </LandingPricingPlan>
                <LandingPricingPlan
                  title="Enterprise"
                  description="Indywidualne integracje i automatyzacje"
                  price="Indywidualnie"
                  ctaText="Skontaktuj się z nami"
                >
                  <p>Wszystko z planu Professional</p>
                  <p>Integracje z maszynami przez API</p>
                  <p>Dedykowane wdrożenia i szkolenia</p>
                  <p>Dostosowania do procesów firmy</p>
                  <p>Dedykowany opiekun</p>
                </LandingPricingPlan>
                <LandingPricingPlan
                  title="Lifetime"
                  description="Indywidualne integracje i automatyzacje"
                  price="50.000 zł"
                  discountPrice="39.000 zł"
                  // priceSuffix="jednorazowy zakup"
                  ctaText="Skontaktuj się z nami"
                >
                  <p>Wszystko z planu Professional i Enterprise</p>
                  <p>Płacisz raz, korzystasz całe życie</p>
                  <p>Wszystkie aktualizacje w cenie</p>
                </LandingPricingPlan>
              </LandingPricingSection>
            </TabsContent>
            <TabsContent value="anually">
              <LandingPricingSection
                pt0
                // title="Wybierz plan dopasowany do Twojej drukarni"
                // description="Transparentne ceny. Możliwość zmiany planu w dowolnym momencie."
                // withBackgroundGlow
                // backgroundGlowVariant="secondary"
              >
                <LandingPricingPlan
                  title="Professional"
                  description="Kompletne wdrożenie dla drukarni produkcyjnych"
                  price="10.000 zł"
                  discountPrice="7.000 zł"
                  priceSuffix="/rok"
                  ctaText="Wybierz Professional"
                  highlighted
                >
                  <p>Testuj przez 30 dni za darmo</p>
                  <p>Pełny moduł fleksograficzny</p>
                  <p>Wszystkie funkcje aplikacji</p>
                  <p>Import listy klientów</p>
                  <p>Wsparcie telefoniczne</p>
                </LandingPricingPlan>
                <LandingPricingPlan
                  title="Enterprise"
                  description="Indywidualne integracje i automatyzacje"
                  price="Indywidualnie"
                  ctaText="Skontaktuj się z nami"
                >
                  <p>Wszystko z planu Professional</p>
                  <p>Integracje z maszynami przez API</p>
                  <p>Dedykowane wdrożenia i szkolenia</p>
                  <p>Dostosowania do procesów firmy</p>
                  <p>Dedykowany opiekun</p>
                </LandingPricingPlan>
                <LandingPricingPlan
                  title="Lifetime"
                  description="Indywidualne integracje i automatyzacje"
                  price="50.000 zł"
                  discountPrice="39.000 zł"
                  // priceSuffix="jednorazowy zakup"
                  ctaText="Skontaktuj się z nami"
                >
                  <p>Wszystko z planu Professional i Enterprise</p>
                  <p>Płacisz raz, korzystasz całe życie</p>
                  <p>Wszystkie aktualizacje w cenie</p>
                </LandingPricingPlan>
              </LandingPricingSection>
            </TabsContent>
          </Tabs>
        </div>



      </section>

      {/* FAQ */}
      <section id="faq">
        <LandingFaqCollapsibleSection
          withBackgroundGlow
          title="Najczęściej zadawane pytania"
          description="Szybkie odpowiedzi na najważniejsze kwestie"
          faqItems={[
            {
              question: "Czy system obsługuje wszystkie typy druku?",
              answer: "Obecnie w pełni dostępny jest moduł fleksograficzny. Moduły do druku cyfrowego arkuszowego i rolowego są w przygotowaniu i pojawią się w kolejnych aktualizacjach."
            },
            {
              question: "Czy system jest zgodny z polskimi przepisami?",
              answer: "Tak, generowane dokumenty (WZ, faktury – wkrótce) i raporty są zgodne z obowiązującymi wymogami."
            },
            {
              question: "Jak długo trwa wdrożenie?",
              answer: `Założenie konta zajmuje 3 minuty. Utworzenie pierwszego ~lecenia nie powinno zająć dłużej niż 15 minut. Cała aplikacja jest bardzo intuicyjna oraz cały czas "prowadzi za rękę" gwarantując spójność zapisywanych danych. `
            },
            {
              question: "Czy mogę zaimportować dane z obecnego systemu?",
              answer: "Obecnie możliwość ta jest dostępna tylko dla płacących klientów i usługę tę wykonujemy indywidualnie, pozostając w kontakcie z Państwem."
            },
            {
              question: "Jakie integracje są dostępne?",
              answer: "Dla indywidualnych Klientów, oferujemy integrację systemu PrintFlow z zewnętrznym API maszyny. W przyszłości planujemy dodać integrację z systemami księgowymi."
            },
            {
              question: "Czy jest kontrola uprawnień?",
              answer: "Tak. Role i uprawnienia (RBAC) pozwalają ograniczyć dostęp do funkcji i danych zgodnie z obowiązkami pracowników."
            }
          ]}
          withBackground
        />
      </section>

      {/* Bottom CTA */}
      <section id="cta">
        <LandingPrimaryTextCtaSection
          title="Gotowy na pełną kontrolę nad swoją drukarnią?"
          description="Kontroluj środki i zwiększaj zyski razem z nami!"
          textPosition="center"
          // effectComponent={<LandingDotParticleCtaBg />}
          // effectComponent={<LandingGridPatternCtaBg variant="primary" />}
          // effectComponent={<LandingFlickeringGridCtaBg variant="primary" />}
          effectComponent={<LandingPathsCtaBg variant="primary" />}



          // withBackground
          // withBackgroundGlow
        >
          <Button size="xl" asChild variant="primary">
            <a href={REGISTER_URL}>Testuję przez 30 dni</a>
          </Button>
          <Button size="xl" variant="outlinePrimary" asChild>
            <a href="#contact">Porozmawiaj z ekspertem</a>
          </Button>
        </LandingPrimaryTextCtaSection>
      </section>

      {/* Newsletter */}
      <LandingNewsletterSection
        title="Bądź na bieżąco z rozwojem modułów"
        description="Nowe funkcje, case studies i aktualizacje roadmapy prosto na skrzynkę."
        buttonLabel="Zapisz się"
        placeholderLabel="Wprowadź swój adres email"
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
