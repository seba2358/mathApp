export const MATH_SECTIONS = [
	{
		id: 1,
		title: "Ułamki",
		topics: [
			{
				id: 1.1,
				topicTitle: "Dodawanie i odejmowanie ułamków",
				tasks: [
					{ number: 1, text: "1/3 + 2/5 - 3/4", result: "-1/60" },
					{ number: 2, text: "0.2 - 0.35 + 1.32", result: "1.17" },
				],
			},
			{
				id: 1.2,
				topicTitle: "Mnożenie i dzielenie ułamków",
				tasks: [
					{ number: 1, text: "1/2 : 2/5 * 4/5", result: "1" },
					{ number: 2, text: "0.2 * 1.25 : 0.75", result: "0,3333" },
				],
			},
			{
				id: 1.3,
				topicTitle: "Inne zadania z ułamków",
				tasks: [
					{
						number: 1,
						text: "Znajdź ułamek, który po podzieleniu przez swoją odwrotność daje wynik 1/49.",
						result: "1/7 lub -1/7",
					},
					{
						number: 2,
						text: "W urnie jest 10 razy więcej kul białych niż czarnych. Jaki ułamek całej puli stanowią kule czarne?",
						result: "1/11",
					},
				],
			},
		],
	},
	{
		id: 2,
		title: "Potęgi i pierwiastki",
		topics: [
			{
				id: 2.1,
				topicTitle: "Mnożenie i dzielenie potęg o tej samej podstawie",
				tasks: [
					{ number: 1, text: "2^6 * 2^10 : 2^12", result: "2^4" },
					{ number: 2, text: "(-1)^100 : (-1)^101 * (-1)^102", result: "-1" },
				],
			},
			{
				id: 2.2,
				topicTitle: "Podnoszenie potęgi do potęgi",
				tasks: [
					{ number: 1, text: "(2^2)^2 * (2^3)^3 : (2^4)^3", result: "2" },
					{ number: 2, text: "(-1)^100 : (-1)^101 * (-1)^102", result: "-1" },
				],
			},
			{
				id: 2.3,
				topicTitle: "Potęga o wykładniku ujemnym",
				tasks: [
					{ number: 1, text: "3^(-2) : 2^(-3)", result: "8/9" },
					{
						number: 2,
						text: "(-1)^(-4) : (-5)^(-100) : (15)^102 * 0^(-5)",
						result: "0",
					},
				],
			},
			{
				id: 2.4,
				topicTitle: "Pierwiastkowanie ",
				tasks: [
					{ number: 1, text: "√128 : √64 * √8", result: "4" },
					{
						number: 2,
						text: "Pewną liczbę podnieśliśmy do potęgi 2, następnie obliczyliśmy pierwistek 3 stopnia i wynik podnieśliśmy do potęgi 4. W wyniku ww. operacji otrzymaliśmy liczbę 256. Jaka była liczba początkowa",
						result: "8",
					},
				],
			},
			{
				id: 2.5,
				topicTitle: "Inne zadania z potęg i pierwiastków",
				tasks: [
					{ number: 1, text: "(√2)^4 : 2^(-1) * 4^(1/2)", result: "16" },
					{
						number: 2,
						text: "63^2 * (1/3)^4",
						result: "7^2",
					},
				],
			},
		],
	},
	{
		id: 3,
		title: "Logarytmy",
		topics: [
			{
				id: 3.1,
				topicTitle: "Obliczanie logarytmów",
				tasks: [
					{ number: 1, text: "log₂16", result: "4" },
					{ number: 2, text: "log₂(1/32)", result: "-5" },
				],
			},
			{
				id: 3.2,
				topicTitle: "Dodawanie i odejmowanie logarytmów",
				tasks: [
					{ number: 1, text: "log₂16 + log₂5 - log₂10", result: "3" },
					{ number: 2, text: "2log₂16 - 3log₂4 - 4log₂1", result: "2" },
				],
			},
			{
				id: 3.3,
				topicTitle: "Logarytm w wykładniku potęgi",
				tasks: [
					{ number: 1, text: "2^log₂16", result: "16" },
					{
						number: 2,
						text: "2^(-2+log₂16)",
						result: "4",
					},
				],
			},
		],
	},
	{
		id: 4,
		title: "Procenty",
		topics: [
			{
				id: 4.1,
				topicTitle: "Obliczanie procentu z liczby",
				tasks: [
					{ number: 1, text: "20% liczby 50", result: "10" },
					{ number: 2, text: "15% liczby 75", result: "11.25" },
				],
			},
			{
				id: 4.2,
				topicTitle: "Obliczanie liczby mając dany jej procent",
				tasks: [
					{
						number: 1,
						text: "20% liczby x wynosi 40. Ile wynosi liczba x?",
						result: "200",
					},
					{
						number: 2,
						text: "0,5% liczby y wynosi 1. Ile wynosi liczba y?",
						result: "200",
					},
				],
			},
			{
				id: 4.3,
				topicTitle: "Obniżki/podwyżki procentowe",
				tasks: [
					{
						number: 1,
						text: "Cenę koszuli obniżono o 25% i teraz kosztuje 60zł. Ile kosztowała przed obniżką?",
						result: "80zł",
					},
					{
						number: 2,
						text: "Sukienka po dwukrotnej 20-procentowej obniżce kosztuje 70,4zł. Ile kosztowała przed obniżkami?",
						result: "110zł",
					},
				],
			},
			{
				id: 4.4,
				topicTitle: "Procent składany",
				tasks: [
					{
						number: 1,
						text: "Pani Grażyna wpłaciła 10000zł na lokatę oprocentowaną 5% w skali roku. Wiedząc, że kapitalizacja odsetek odbywa się raz do roku, oblicz kwotę, którą wyjmie z banku po 5 latach. Wynik zaokrąglij do liczb całkowitych (podatki od dochodu pomijamy).",
						result: "12763zł",
					},
					{
						number: 2,
						text: "Pan Janusz wpłacił 50000zł na lokatę oprocentowaną 3% w skali roku. Kapitalizacja odsetek odbywała się 2 razy do roku. Finalnie, wzbogacił się o ok. 17343zł (podatki zostały pominięte). Ile lat Pan Janusz trzymał pieniądze na lokacie?",
						result: "110zł",
					},
				],
			},
		],
	},
	{
		id: 5,
		title: "Równania i nierówności liniowe",
		topics: [
			{
				id: 5.1,
				topicTitle: "Równania liniowe",
				tasks: [
					{ number: 1, text: "Rozwiąż rónanie x/2 + 2/3 = 3/4", result: "1/6" },
					{
						number: 2,
						text: "Rozwiąż równanie (x+3)/2 = 2-(x-2)/4",
						result: "4/3",
					},
				],
			},
			{
				id: 5.2,
				topicTitle: "Równania liniowe w zadaniach z treścią",
				tasks: [
					{
						number: 1,
						text: "Obwód prostokąta wynosi 20cm, a stosunek długości jego boków to 3:1. Oblicz długość dłuższego boku.",
						result: "7,5cm",
					},
					{
						number: 2,
						text: "Jeden kąt trójkąta ma miarę 60°, a 2 pozostałe pozostają w stosunku 1:3. Oblicz miarę największego kąta.",
						result: "90°",
					},
				],
			},
			{
				id: 5.3,
				topicTitle: "Nierówności liniowe",
				tasks: [
					{
						number: 1,
						text: "Najmniejszą liczbą całkowitą spełniającą nierówność x/2 <= 2x/3 + 1/4 jest",
						result: "-1",
					},
					{
						number: 2,
						text: "Rozwiąż nierówność (1-2x)/2 > 1/3",
						result: "xЄ(-∞; 1/6)",
					},
				],
			},
		],
	},
	{
		id: 6,
		title: "Funkcja liniowa",
		topics: [
			{
				id: 6.1,
				topicTitle: "Wykres funkcji liniowej",
				tasks: [
					{
						number: 1,
						text: "Czy punkt A(2,-6) należy do wykresu funkcji f(x)=2x-8",
						result: "Nie należy",
					},
					{
						number: 2,
						text: "Wyznacz równanie kierunkowe prostej przechodzącej przez punkty A(2,-3) i B(3,2).",
						result: "y=5x-13",
					},
				],
			},
			{
				id: 6.2,
				topicTitle: "Proste równoległe i prostopadłe",
				tasks: [
					{
						number: 1,
						text: "Dla jakie wartości parametru a proste k:y=ax+3 i l:y=(a-5)x-4 będą równoległe",
						result: "Nie istnieje taka wartość parametru a",
					},
					{
						number: 2,
						text: "Proste k:y=3x-5 i l:y=bx+8 są prostopadłe. Ile wynosi wartość parametru b?",
						result: "-1/3",
					},
				],
			},
			{
				id: 6.3,
				topicTitle: "Miejsce zerowe funkcji liniowej",
				tasks: [
					{
						number: 1,
						text: "Ile wynosi miejsce zerowe funkcji liniowej f(x)=x/3-2/5",
						result: "6/5",
					},
					{
						number: 2,
						text: "Liczba -2 jest miejscem zerowym funkcji g(x)=ax-5. Wartość parametru a wynosi",
						result: "-5/2",
					},
				],
			},
		],
	},
	{
		id: 7,
		title: "Funkcja kwadratowa",
		topics: [
			{
				id: 7.1,
				topicTitle: "Równania kwadratowe",
				tasks: [
					{
						number: 1,
						text: "Ile miejsc zerowych ma funkcja f(x)=x^2+2x+1 ?",
						result: "1",
					},
					{
						number: 2,
						text: "Rozwiąż równanie kwadratowe 2x^2-3x+2=0",
						result: "Brak rozwiązań",
					},
				],
			},
			{
				id: 7.2,
				topicTitle: "Nierówności kwadratowe",
				tasks: [
					{
						number: 1,
						text: "Ile wynosi najmniejsza liczba naturalna spełniająca nierówność 2x^2-3x-5>0",
						result: "3",
					},
					{
						number: 2,
						text: "Rozwiąż nierówność 5x^2+2x+1>0",
						result: "R",
					},
				],
			},
			{
				id: 7.3,
				topicTitle: "Postacie funkcji kwadratowej",
				tasks: [
					{
						number: 1,
						text: "Wyznacz współrzędne wierzchołka funkcji f(x)=2(x-3)^2+5",
						result: "W(3,5)",
					},
					{
						number: 2,
						text: "Przekształć wzór funkcji g(x)=x^2-2x-3 do postaci iloczynowej",
						result: "g(x)=(x-3)(x+1)",
					},
					{
						number: 3,
						text: "Przekształć wzór funkcji h(x)=-3(x-2)(x+3) do postaci kanonicznej",
						result: "h(x)=-3(x+1/2)^2-75/4",
					},
				],
			},
		],
	},
	{
		id: 8,
		title: "Wielomiany",
		topics: [
			{
				id: 8.1,
				topicTitle: "Dzielenie wielomianów",
				tasks: [
					{
						number: 1,
						text: "Wykonaj dzielenie wielomianu W(x)=2x^4-3x^3+x^2-x+2 przez wielomian P(x)=x-3",
						result: "2x^3+3x^2+10x+29 reszta: 89",
					},
					{
						number: 2,
						text: "Ile wyniesie reszta z dzielenia wielomianu W(x)=3x^3-5x^2-2x przez wielomian P(x)=x^2-2x",
						result: "0",
					},
				],
			},
			{
				id: 8.2,
				topicTitle: "Rozkład wielomianu na czynniki",
				tasks: [
					{
						number: 1,
						text: "Rozłóż wielomian W(x)=2x^3+4x^2+3x+6 na czynniki",
						result: "W(x)=(x+2)(2x^2+3)",
					},
					{
						number: 2,
						text: "Rozłóż wielomian W(x)=4x^3-2x^2-x-1 na czynniki",
						result: "W(x)=(x-1)(4x^2+2x+1)",
					},
				],
			},
			{
				id: 8.3,
				topicTitle: "Równania i nierówności wielomianowe",
				tasks: [
					{
						number: 1,
						text: "Rozwiąż równanie x^3+3x^2-2x-6=0",
						result: "x=-3 lub x=-√2 lub x=√2",
					},
					{
						number: 2,
						text: "Rozwiąż nierówność 2x^3+5x^2-4x-10>=0",
						result: "xЄ<-5/2;-√2> lub <√2;∞",
					},
				],
			},
		],
	},
	{
		id: 9,
		title: "Funkcja wymierna",
		topics: [
			{
				id: 9.1,
				topicTitle: "Wykres proporcjonalności odwrotnej",
				tasks: [
					{
						number: 1,
						text: "Czy do wykresu funkcji f(x)=2/x należy punkt P(2,4)",
						result: "Nie należy",
					},
					{
						number: 2,
						text: "Podaj równanie asymptoty pionowej funkcji f(x)=3/x",
						result: "x=0",
					},
				],
			},
			{
				id: 9.2,
				topicTitle: "Równanie i nierówności wymierne",
				tasks: [
					{
						number: 1,
						text: "Rozwiąż równanie (2x^2-6x)/(x^2-9)",
						result: "x=0",
					},
					{
						number: 2,
						text: "Rozwiąż nierówność 4/x >= 5",
						result: "xЄ<0;4/5>",
					},
				],
			},
		],
	},
	{
		id: 10,
		title: "Funkcja wykładnicza",
		topics: [
			{
				id: 10.1,
				topicTitle: "Wykres funkcji wykładniczej",
				tasks: [
					{
						number: 1,
						text: "Do wykresu funkcji wykładniczej f(x)=a^x należy punkt P=(2,9). Podaj zbiór wartości tej funkcji.",
						result: "Zw=(0;∞)",
					},
					{
						number: 2,
						text: "Wykres funkcji wykładniczej f(x)=3^x, po przesunięciu o 2 jednostki w prawo, ma wzór",
						result: "3^(x-2)",
					},
				],
			},
			{
				id: 10.2,
				topicTitle: "Równanie i nierówności wykładnicze",
				tasks: [
					{
						number: 1,
						text: "Rozwiąż równanie 3^6x = 9",
						result: "x=1/3",
					},
					{
						number: 2,
						text: "Rozwiąż nierówność (1/5)^(5x) > 5^(-2)",
						result: "x<2/5",
					},
				],
			},
		],
	},
	{
		id: 11,
		title: "Ciągi",
		topics: [
			{
				id: 11.1,
				topicTitle: "Wzór ogólny i motoniczność ciągu",
				tasks: [
					{
						number: 1,
						text: "Ile wynosi siódmy wyraz ciągu o wzorze ogólnym an=2n+6?",
						result: "a7=20",
					},
					{
						number: 2,
						text: "Zbadaj, czy nieskończony ciąg o wzorze ogólnym an=n/(3n+1) jest montoniczny",
						result: "Tak, jest rosnący",
					},
				],
			},
			{
				id: 11.2,
				topicTitle: "Ciąg arytmetyczny",
				tasks: [
					{
						number: 1,
						text: "Wyznacz wzór ogólny ciągu arytmetycznego, wiedząc, że a2=5 i a5=2",
						result: "an=-n+7",
					},
					{
						number: 2,
						text: "Ile wynosi suma 5 początkowych wyrazów ciągu arytmetycznego o wzorze ogólnym an=n^2-2?",
						result: "S5=55",
					},
				],
			},
			{
				id: 11.3,
				topicTitle: "Ciąg geometryczny",
				tasks: [
					{
						number: 1,
						text: "Dla jakiej wartości parametru x wyrażenia 1/2, -3/2, 9/2, x tworzą ciąg geometryczny?",
						result: "x=-27/2",
					},
					{
						number: 2,
						text: "Ile wynosi suma 5 początkowych wyrazów ciągu geometrycznego o wzorze ogólnym an=5*2^n?",
						result: "S5=155",
					},
				],
			},
		],
	},
	{
		id: 12,
		title: "Trygonometria",
		topics: [
			{
				id: 12.1,
				topicTitle: "Zależności w trójkącie prostokątnym",
				tasks: [
					{
						number: 1,
						text: "Miara najmniejszego kąta w trójkącie prostokątnym wynosi 30°, a długość przyptrostokątnej naprzeciwko niego wynosi 5cm. Ile wynosi obwód tego trójkąta?",
						result: "Ob=15+5√3cm",
					},
					{
						number: 2,
						text: "Drabina o długości 5m stoi oparta o ścianę na wysokości 4m. Pod jakim kątem do podłoża stoi drabina? Wynik zaokrąglij do liczb całkowitych.",
						result: "ok. 53°",
					},
				],
			},
			{
				id: 12.2,
				topicTitle:
					"Zależności między funkcjami trygonometrycznymi tego samego kąta",
				tasks: [
					{
						number: 1,
						text: "Oblicz sinα, jeśli cosα=4/5, a kąt α jest ostry.",
						result: "sinα=3/5",
					},
					{
						number: 2,
						text: "Oblicz cosinus kąta rozwartego α, wiedząc, że tgα=-√3",
						result: "cosα=-1/2",
					},
				],
			},
		],
	},
	{
		id: 13,
		title: "Geometria analityczna",
		topics: [
			{
				id: 13.1,
				topicTitle: "Środek i długość odcinka",
				tasks: [
					{
						number: 1,
						text: "Wyznacz współrzędne środka odcinka AB, jeśli A(-4,5) B(0,7).",
						result: "S(-2,6)",
					},
					{
						number: 2,
						text: "Oblicz długość odcinka AB, jeśli A(-2,-3) B(3,5)",
						result: "|AB|=√89",
					},
				],
			},
			{
				id: 13.2,
				topicTitle: "Równanie prostej przechodzącej przez 2 punkty",
				tasks: [
					{
						number: 1,
						text: "Wyznacz równanie przekątnej kwadratu, w którym wierzchołek A(-2,-4), a punkt przecięcia przekątnych S(-1,-2)",
						result: "d:y=2x",
					},
					{
						number: 2,
						text: "Wiemy, że prosta l przechodzi przez punkty A(2,-2) i B(8,-4). Sprawdż, czy przechodzi też przez punkt C(6,-4).",
						result: "Przez punkt C nie przechodzi",
					},
				],
			},
		],
	},
	{
		id: 14,
		title: "Geometria płaska",
		topics: [
			{
				id: 14.1,
				topicTitle: "Trójkąty",
				tasks: [
					{
						number: 1,
						text: "W trójkącie prostokątnym wysokość h=4√3cm. Oblicz pole tego trójkąta.",
						result: "P=16√3cm^2",
					},
					{
						number: 2,
						text: "Dany jest trójkąt prostokątny o przyprostokątnych 5cm i 12cm. Oblicz długość promienia okręgu opisanego na tym trójkącie.",
						result: "R=6,5cm",
					},
				],
			},
			{
				id: 14.2,
				topicTitle: "Czworokąty",
				tasks: [
					{
						number: 1,
						text: "Bok rombu ma długość 8cm, a kąt ostry ma miarę 60°. Oblicz wysokość tego rombu.",
						result: "h=4√3cm",
					},
					{
						number: 2,
						text: "W trapezie miary kątów ostrych są równe 30° i 60°. Ile wówczas wynosi stosunek długości krótszego ramienia do dłuższego?",
						result: "√3/3",
					},
				],
			},
			{
				id: 14.3,
				topicTitle: "Koła i okręgi",
				tasks: [
					{
						number: 1,
						text: "Oblicz pole okręgu, którego średnica wynosi 10cm.",
						result: "P=25πcm^2",
					},
					{
						number: 2,
						text: "Obwód okręgu wynosi 20πcm. Oblicz średnicę tego okręgu.",
						result: "√3/3",
					},
					{
						number: 3,
						text: "Oblicz długość okręgu wyznaczonego przez kąt środkowy o mierze 36°. Promień okręgu wynosi 10cm.",
						result: "l=2πcm",
					},
				],
			},
		],
	},
	{
		id: 15,
		title: "Geometria przestrzenna",
		topics: [
			{
				id: 15.1,
				topicTitle: "Graniastosłupy",
				tasks: [
					{
						number: 1,
						text: "Oblicz pole powierzchni całkowitej graniastosłupa prawidłowego trójkątnego, w którym wysokość podstawy wynosi 6√3cm, a przekątna ściany bocznej 13cm.",
						result: "P=72√3+180cm^2",
					},
					{
						number: 2,
						text: "Oblicz objętość graniastosłupa prawidłowego czworokątnego, w którym przekątna podstawy wynosi 5√2cm, a przekątna ściany bocznej 13cm.",
						result: "V=300cm^3",
					},
				],
			},
			{
				id: 15.2,
				topicTitle: "Ostrosłupy",
				tasks: [
					{
						number: 1,
						text: "Wysokość ostrosłupa prawidłowego trójkątnego wynosi 9cm, a obwód podstawy 24cm. Oblicz objętość tego ostrosłupa.",
						result: "V=48√3cm^3",
					},
					{
						number: 2,
						text: "W ostrosłupie prawidłowym czworokątnym o polu powierzchni całkowitej równym 180cm^2 pole podstawy jest równe polu jednej ściany bocznej. Oblicz wysokość ściany bocznej.",
						result: "h=12cm",
					},
				],
			},
		],
	},
	{
		id: 16,
		title: "Rachunek prawdopodobieństwa",
		topics: [
			{
				id: 16.1,
				topicTitle: "Kombinacje, wariancje i permutacje",
				tasks: [
					{
						number: 1,
						text: "Ile meczów łącznie zostanie rozegranych na turnieju, w którym występuje 5 drużyn i grają systemem każda z każdą (rewanży nie grają).",
						result: "10",
					},
					{
						number: 2,
						text: "Ile liczb 2-cyfrowych parzystych można utworzyć wykorzystując tylko cyfry 1,2,3? Każda liczba musi się składać z 2 różnych cyfr.",
						result: "2 liczby",
					},
					{
						number: 3,
						text: "Na ile sposobów może wysiąść z windy 5 osób na 7 możliwych piętrach. Na danym piętrze wysiada maksymalnie 1 osoba.",
						result: "7*6*5*4",
					},
				],
			},
			{
				id: 16.2,
				topicTitle: "Prawdopodobieństwo klasyczne",
				tasks: [
					{
						number: 1,
						text: "Rzucamy dwiema sześciennymi kostkami do gry. Oblicz prawdopodobieństwo wyrzucenia sumy oczek nie większej niż 3.",
						result: "1/12",
					},
					{
						number: 2,
						text: "W pudełku jest 18 kul czarnych i n kul białych. Prawdopodobieństwo wyciągnięcia kuli czarnej wynosi 3/5. Ile jest kul białych?",
						result: "12 kul białych",
					},
				],
			},
		],
	},
	{
		id: 17,
		title: "Statystyka",
		topics: [
			{
				id: 17.1,
				topicTitle: "Średnia arytmetyczna, mediana i moda",
				tasks: [
					{
						number: 1,
						text: "Dane są liczby 2,4,x,5,8,6 Ile wynosi liczba x, jeśli średnia arytmetyczna podanych liczb wynosi 5?",
						result: "x=5",
					},
					{
						number: 2,
						text: "Ze sprawdzianu z matematyki w pewnej klasie 10 osób dostało ocenę niedostateczną, 6 osób ocenę dopuszczającą, 4 osoby ocenę dostateczną, 3 osoby ocenę dobrą i 2 osobą ocenę bardzo dobrą. Oblicz medianę wyników.",
						result: "mediana wynosi 2",
					},
					{
						number: 3,
						text: "Ile wynosi moda liczb -7,2,3,-7,3,4?",
						result: "Są dwie mody: -7 i 3",
					},
				],
			},
			{
				id: 17.2,
				topicTitle: "Średnia ważona, wariancja i odchylenie standardowe",
				tasks: [
					{
						number: 1,
						text: "W pewnej klasie ocena ze sprawdzianu ma wagę 3, z kartkówki 2, a za odpowiedź ustną 1. Janek ma po 2 oceny ze sprawdzianów, kartkówek i odpowiedzi i wynoszą one kolejno 2,3,3,3,4,5. Jaką ocenę będzie miał na koniec roku?",
						result: "3",
					},
					{
						number: 2,
						text: "Oblicz wariancję liczb 4,7,2,3,5,8,1,10?",
						result: "8,5",
					},
					{
						number: 3,
						text: "Oblicz odchylenie standardowe liczb 7,4,-2",
						result: "√14",
					},
				],
			},
		],
	},
];
