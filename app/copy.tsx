import RotatingText from "@/src/components/RotatingText/RotatingText"
import { Description } from "@radix-ui/react-dialog";
import { animate } from "framer-motion"
import { Check, Loader, Lightbulb, Bell, Calculator, ImageIcon, Package, Users2, Warehouse } from "lucide-react"
import { exit, features } from "process"

export const IS_DEV = false;
export const LOGIN_URL = IS_DEV ? `http://localhost:3000/login` : `${process.env.NEXT_PUBLIC_APP_URL}/login`;
export const REGISTER_URL = IS_DEV ? `http://localhost:3000/register` : `${process.env.NEXT_PUBLIC_APP_URL}/register`

export const copy = {
  cta: {
    primary: {
      text: "Zacznij za darmo",
      path: "/"
    },
    secondary: {
      text: "Umów darmową prezentację",
      path: "https://calendly.com/printflowapp/printflow-darmowa-prezentacja-q-a"
    }
  },
  hero: {
    h1: <>Zarządzanie drukarnią oparte na danych,<br/> nie domysłach</>, // BYŁO: "Zwiększ zyski swojej drukarni o 30% dzięki kontroli odpadów",
    headline: <>
      <span>PrintFlow to nowoczesna platforma online do prowadzenia drukarni fleksograficznych. Odzyskaj kontrolę nad</span>
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
    </>,
    discountValue: "Wypróbuj przez 30 dni za darmo.",
    discountDesc: "*Karta kredytowa NIE jest wymagana.",
  },
  product_tour: {
    steps_1: [
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
    ],
    steps_2: [
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
    ],
  },
  features_1: {
    title: "Wszystko, czego potrzebuje Twoja drukarnia w jednej platformie",
    description: "Zawsze pod ręką, w nowoczesnym wydaniu",
    items: [
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
    ]
  },
  features_2: {
    title: "Kontroluj każdy grosz — od wyceny do realizacji",
    items: [
      {
        title: "Pełen wgląd w Wyceny i zyski",
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
    ]
  },
  how_it_works: {
    title: "Jak działa PrintFlow — w 4 prostych krokach",
    description: <>
      <a className="text-primary-600 underline" href={REGISTER_URL}>Zarejestruj się</a>
      <span> i sprawdź. Założenie konta zajmuje 3 minuty!</span>
    </>,
    items: [
      {
        title: "Dodaj pierwszego Klienta",
        description: `Po prostu wypełnij dane i naciśnij "Dodaj".`,
        // description: "Po prostu wypełnij dane i dodaj Klienta. Jeśli chciałbyś zaimportować istniejącą listę Klientów (np. z pliku CSV), pomożemy w tym procesie!",
        imageSrc: "/add_client_desktop.png",
        imageAlt: "Dodawanie Klienta",
      },
      {
        title: "Wybierz Klienta, a następnie dodaj Produkt",
        description: "Stwórz wszystkie komponenty Produktu, pozostając na tej samej stronie i zapisz. Produkt stworzony i przypisany do wybranego Klienta.",
        imageSrc: "/add_product_desktop.png",
        imageAlt: "Dodawanie Produktu",
      },
      {
        title: "Utwórz Zlecenie dla nowego Produktu",
        description: "Wybierz Klienta, Produkt, który przed chwilą utworzyłeś, podaj nakład, datę realizacji i stwórz Zlecenie.",
        imageSrc: "/add_order_desktop.png",
        imageAlt: "Dodanie Zlecenia",
      },
      {
        title: "Przeglądaj i zarządzaj Zleceniami w 1 miejscu",
        description: "Filtruj i przeglądaj Zlecenia, sprawdzaj etap produkcji, monitoruj odpady oraz zgłoszone uwagi.",
        imageSrc: "/orders_desktop.png",
        imageAlt: "Zarządzanie zleceniami",
      },
    ]
  },
  roadmap: {
    title: "Jedna platforma dla wszystkich technologii druku",
    // title: "Trzy moduły - jeden ekosystem",
    items:  [
     {
       title: "Fleksograficzny",
       imageSrc: "/module_f.png",
       imageAlt: "Moduł fleksograficzny",
       status: {
         label: "Dostępny",
         icon: Check,
         color: "green-500",
         border: "green-500",
       },
     },
     {
       title: "Cyfra arkuszowa",
       imageSrc: "/module_ds.png",
       imageAlt: "Moduł cyfrowy arkusz",
       status: {
         label: "Budowany",
         icon: Loader,
         color: "yellow-500",
         border: "yellow-500",
       },
     },
     {
       title: "Cyfra rolowa",
       imageSrc: "/module_dw.png",
       imageAlt: "Moduł cyfrowy rolowy",
       status: {
         label: "Planowany",
         icon: Lightbulb,
         color: "gray-500",
         border: "gray-500",
       },
     },
   ]
  },
  pricing: {
    title: "Wybierz plan dopasowany do Twojej drukarni",
    description: "Transparentne ceny. Możliwość zmiany planu w dowolnym momencie.",
    
    
    plans: [
      {
        title: "Professional",
        description: "Dobry na start, dla średnich drukarni",
        ctaText: "Wybierz Professional",
        features: [
          "Testuj przez 30 dni za darmo",
          "40 kont pracowników",
          "Pełny moduł fleksograficzny",
          "Wszystkie funkcje aplikacji",
          "Wsparcie telefoniczne i mailowe",
        ],
        prices: {
          monthly: {
            priceSuffix: "miesięcznie",
            // discountPrice: 800,
            price: 999,
          },
          annual: {
            priceSuffix: "rocznie",
            // discountPrice: 7000,
            price: 9999,
          }
        }
      },
      {
        title: "Enterprise",
        description: "Bez żadnych ograniczeń, dla dużych drukarni",
        ctaText: "Wybierz Enterprise",
        highlighted: true,
        features: [
          "Wszystko z planu Professional",
          "Nieogrniczona ilość kont pracowników",
          "Import listy Klientów na życzenie",
        ],
        prices: {
          monthly: {
            priceSuffix: "miesięcznie",
            discountPrice: 1599,
            price: 1999,
          },
          annual: {
            priceSuffix: "rocznie",
            discountPrice: 13999,
            price: 19999,
          } 
        }
      },
      {
        title: "Custom",
        description: "Indywidualne integracje i automatyzacje",
        ctaText: "Skontaktuj się z nami",
        features: [
          "Wszystko z planu Professional oraz Enterprise",
          "Integracje z maszynami przez API",
          "Dostosowania do procesów firmy (customizacje)",
          "Dedykowany opiekun",
        ],
        prices: {
          monthly: {
            priceSuffix: "miesięcznie",
            price: "Indywidualnie",
          },
          annual: {
            priceSuffix: "rocznie",
            price: "Indywidualnie",
          } 
        }
      },
      {
        title: "Lifetime",
        description: "Dla drukarni, które dobrze poznały PrintFlow",
        
        ctaText: "Skontaktuj się z nami",
        features: [
          "Wszystko z planu Professional i Enterprise",
          "Płacisz raz, korzystasz całe życie",
          "Wszystkie aktualizacje w cenie",
        ],
        featured: true,
        prices: {
          monthly: {
            priceSuffix: "jednorazowo",
            discountPrice: 39999,
            price: 79999
          },
          annual: {
            priceSuffix: "jednorazowo",
            discountPrice: 39999,
            price: 79999
          } 
        }
      },
    ],
  },
  faq: {
    title: "Najczęściej zadawane pytania",
    description: "Szybkie odpowiedzi na najważniejsze kwestie",
    items: [
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
    ]
  },
  bottomCta: {
    title: "Gotowy na pełną kontrolę nad swoją drukarnią?",
    description: "Kontroluj środki i zwiększaj zyski razem z nami!"
  },
  newsletter_sign_up: {
    title: "Otrzymuj aktualizacje o nowych funkcjach PrintFlow",
    description: "Nowe funkcje, case studies i aktualizacje roadmapy prosto na skrzynkę.",
    buttonLabel: "Zapisz się",
    placeholderLabel: "Wprowadź swój adres email",
  },
  footer: {
    description: "Kompleksowa platforma do zarządzania drukarnią — dziś fleksografia, jutro także cyfrowy arkusz i rola.",
    footnote: `© ${new Date().getFullYear()} PrintFlow. Wszystkie prawa zastrzeżone.`
  },
};