import { LandingProductTourContent, LandingProductTourList, LandingProductTourSection, LandingProductTourTrigger } from "@/components/landing";
import { Skeleton } from "@/components/shared/ui/skeleton";
import Image from "next/image";
import { Suspense } from "react";

const ProductTour = () => {
  const steps = [
    {
      value: "step-1",
      title: "Wyceny",
      description: "Z naszym kalkulatorem wycen, opartym o ceny materiałów, które sam podajesz, będziesz widział dokładnie swoje koszty, marżę oraz przychód. Koniec z arkuszami kalkulacyjnymi!",
      src: "/quotes.png",
      alt: "Wyceny"
    },
    {
      value: "step-2",
      title: "Od Wyceny do Zlecenia",
      description: "Utwórz Zlecenie na podstawie Wyceny — od wybrania Klienta, stworzenia Produktu i wpisania parametrów Zlecenia — wszystko w 1 okienku.",
      src: "/add_order_from_quote.png",
      alt: "Wyceny"
    },
    {
      value: "step-3",
      title: "Uprawnienia pracowników",
      description: "Stwórz Role, nadaj Uprawnienia i przypisuj do Role do pracowników, aby każdy mógł robić na platformie tylko tyle, ile potrzebuje.",
      src: "/permissions.png",
      alt: "Uprawnienia pracowników"
    },
    {
      value: "step-4",
      title: "Dokumnety WZ",
      description: "Wybierz Zlecenia, dodaj pozycje, uzupełnij ceny i wygeneruj dokument WZ. Drukuj lub ściągnij PDF.",
      src: "/add_wz.png",
      alt: "Dokumenty WZ"
    },
    // {
    //   value: "step-6",
    //   title: "Przeglądaj i zarządzaj Zleceniami w 1 miejscu",
    //   description: "Filtruj i przeglądaj Zlecenia, sprawdzaj etap produkcji, monitoruj odpady oraz zgłoszone uwagi.",
    //   src: "/orders_desktop.png",
    //   alt: "Zarządzanie zleceniami"
    // }
  ];

  const steps2 = [
    {
      value: "step-5",
      title: "Analityka",
      description: "Wybierz pracownika, zakres dat i sprawdź jego efektywność — ilość zleceń, całkowite zapotrzebowanie materiału oraz wygenerowany odpad.",
      src: "/analytics.png",
      alt: "Dodawanie Zlecenia"
    },
    {
      value: "step-6",
      title: "Wygoda",
      description: "Chcesz dodać Zlecenie dla nowego Klienta? Koniec z przeklikiwaniem się po różnych rejonach aplikacji — w PrintFlow stworzysz wszystko w jednym miejscu!",
      src: "/add_order_from_quote.png",
      alt: "Dodawanie Zlecenia"
    },
    {
      value: "step-7",
      title: "Pełne dane",
      description: "Twoje obecne katalogi są niespójne, bo pracownicy nie wpisali jakichś danych albo wpisywali je w różnej konwencji? W PrintFlow to nie przejdzie.",
      src: "/pure_data.png",
      alt: "Dodawanie Zlecenia"
    },
    {
      value: "step-8",
      title: "Personalizacja",
      description: "Przełączaj się między trybem jasnym a ciemnym. Nie podoba Ci się kolor? Zmień go na jeden z szcześciu dostępnych kolorów przewodnich.",
      src: "/customization.png",
      alt: "Dodawanie Zlecenia"
    },
  ]

  return (
    <>
      <LandingProductTourSection
        title="Funkcje dostosowane do Twojej drukarni"
        // description="Założenie konta zajmuje 3 minuty!"
        defaultValue="step-1"
        // withBackgroundGlow
        className="relative pb-0"
        withBackground
        pb0
      >
        <LandingProductTourList>
          {steps?.map(({ value, title, description }) => (
            <LandingProductTourTrigger key={value} value={value}>
              <p className="text-xl font-bold">{title}</p>
              <p>{description}</p>
            </LandingProductTourTrigger>
          ))}
        </LandingProductTourList>

        <div
          // className="fixed top-0"
        >
          {steps?.map(({ value, src, title }) => (
            <LandingProductTourContent key={value} value={value}>
              <Suspense fallback={<Skeleton className="h-full" />}>
                <Image
                  width={800}
                  height={1000}
                  className="w-full rounded-md"
                  src={src}
                  alt={title}
                  // fetchPriority="high"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggNSc+CiAgICAgIDxmaWx0ZXIgaWQ9J2InIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0nc1JHQic+CiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0nMScgLz4KICAgICAgPC9maWx0ZXI+CgogICAgICA8aW1hZ2UgcHJlc2VydmVBc3BlY3RSYXRpbz0nbm9uZScgZmlsdGVyPSd1cmwoI2IpJyB4PScwJyB5PScwJyBoZWlnaHQ9JzEwMCUnIHdpZHRoPScxMDAlJyAKICAgICAgaHJlZj0nZGF0YTppbWFnZS9hdmlmO2Jhc2U2NCwvOWovMndCREFBZ0dCZ2NHQlFnSEJ3Y0pDUWdLREJRTkRBc0xEQmtTRXc4VUhSb2ZIaDBhSEJ3Z0pDNG5JQ0lzSXh3Y0tEY3BMREF4TkRRMEh5YzVQVGd5UEM0ek5ETC8yd0JEQVFrSkNRd0xEQmdORFJneUlSd2hNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpJeU1qSXlNakl5TWpML3dBQVJDQUFMQUJBREFTSUFBaEVCQXhFQi84UUFGZ0FCQVFFQUFBQUFBQUFBQUFBQUFBQUFCZ01ILzhRQUloQUFBZ0lDQWdFRkFRQUFBQUFBQUFBQUFRSURCQVVSQUNFU0JoTVVNVUhCLzhRQUZRRUJBUUFBQUFBQUFBQUFBQUFBQUFBQUFBTC94QUFaRVFBREFBTUFBQUFBQUFBQUFBQUFBQUFBQVJFQ0lUSC8yZ0FNQXdFQUFoRURFUUEvQU5KdFhNbEZqekxjaGZIMVl4dDVQa3B2ZjUzL0FEWGZJeGVzemtFclJZK3V0eVYxVVNsU3dDc1U4aHM2ME5nRTY0aEVVZCtrOWEzR2swRWkrTG82Z2dnOWNNNTJOYU9GdFdxbzltWlN6cXlIV2pvOWdmWDd3M3VsNHpoLy85az0nIC8+CiAgICA8L3N2Zz4KICA="
                />  
              </Suspense>
              
            </LandingProductTourContent>
          ))}

        </div>

      </LandingProductTourSection>

      <LandingProductTourSection
        // title="Funkcje dostosowane do Twojej drukarni"
        // description="Założenie konta zajmuje 3 minuty!"
        defaultValue="step-5"
        withBackground
        // withBackgroundGlow
        className="relative lg:flex-row-reverse mt-0"
        pt0
      >
        <LandingProductTourList>
          {steps2?.map(({ value, title, description }) => (
            <LandingProductTourTrigger key={value} value={value}>
              <p className="text-xl font-bold">{title}</p>
              <p>{description}</p>
            </LandingProductTourTrigger>
          ))}
        </LandingProductTourList>

        <div
          // className="fixed top-0"
        >
          {steps2?.map(({ value, src, title }) => (
            <LandingProductTourContent key={value} value={value}>
              <Image
                width={800}
                height={1000}
                className="w-full rounded-md"
                src={src}
                alt={title}
                fetchPriority="high"
              />
            </LandingProductTourContent>
          ))}

        </div>

      </LandingProductTourSection>

    </>
  );
};

export default ProductTour;