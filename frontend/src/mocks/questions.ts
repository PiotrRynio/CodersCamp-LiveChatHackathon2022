import img1 from '../assets/images/questionsImages/answer1.png';
import img2 from '../assets/images/questionsImages/answer2.png';
import img3 from '../assets/images/questionsImages/answer3.png';
import img4 from '../assets/images/questionsImages/answer4.png';
import { QuizQuestion } from '../hooks/useQuizQuestion/QuizQuestion';

export const questionsListMock = {
  questionsList: [
    {
      id: '1',
      questionText: 'Jakie cechy nie są charakterystyczne dla zjawiska deepfake?',
      type: 'text',
      answersOptions: [
        {
          id: '1',
          answerText:
            'Technologia ta wykorzystywana jest przede wszystkim w materiałach, w których występują ludzie',
          isCorrect: false,
          explanation: 'Ta odpowiedź dotyczy zjawiska deepfake. Spróbuj znaleźć tę, która jest błędna.',
        },
        {
          id: '2',
          answerText: 'Technologia tworzy nowe obrazy bądź filmy, bazując na tożsamości użytkownika',
          isCorrect: true,
          explanation:
            'Zgadza się, ta odpowiedź jest błędna! Technologia deepfake nie tworzy nowej treści. Jeśli chcesz dowiedzieć się więcej o zjawisku deepfake polecamy odwiedzić ',
          source: [
            'tę stronę.',
            'https://ose.gov.pl/aktualnosci/wpis/czy-to-nagranie-moze-klamac-uwaga-na-deepfake',
          ],
        },
        {
          id: '3',
          answerText:
            'Najczęściej przerabiane są materiały filmowe, ale do deepfake’ów zaliczamy także przeróbki głosu oraz zdjęć',
          isCorrect: false,
          explanation: 'Ta odpowiedź dotyczy zjawiska deepfake. Spróbuj znaleźć tę, która jest błędna.',
        },
        {
          id: '4',
          answerText: 'To stosunkowo nowe zjawisko: sama nazwa pojawiła się pod koniec 2017 r.',
          isCorrect: false,
          explanation: 'Ta odpowiedź dotyczy zjawiska deepfake. Spróbuj znaleźć tę, która jest błędna.',
        },
      ],
    },
    {
      id: '2',
      questionText: 'Które za zdań jest opinią?',
      type: 'text',
      answersOptions: [
        {
          id: '5',
          answerText: 'Większość Polaków posiada telefon komórkowy',
          isCorrect: false,
          explanation: 'To zdanie jest faktem. ',
          source: ['[Źródło]', 'https://www.cbos.pl/SPISKOM.POL/2021/K_116_21.PDF'],
        },
        {
          id: '6',
          answerText: 'Polskie prawo karne nie odnosi się wprost do fake newsów.',
          isCorrect: false,
          explanation:
            'To zdanie jest faktem. Nie oznacza to jednak, że osoby rozpowszechniające takie treści są bezkarne. ',
          source: [
            '[Źródło]',
            'https://centrumcyfrowe.pl/wp-content/uploads/sites/16/2020/06/Raport_walka-z-fake-newsami.pdf',
          ],
        },
        {
          id: '7',
          answerText: 'Założenie rodziny jest najważniejszą sprawą w życiu Polaka',
          isCorrect: true,
          explanation: 'Ta odpowiedź dotyczy zjawiska deepfake. Spróbuj znaleźć tę, która jest błędna.',
        },
        {
          id: '8',
          answerText: 'Propagowanie faszyzmu lub innego ustroju totalitarnego jest w Polsce karalne.',
          isCorrect: false,
          explanation: 'To zdanie jest faktem, mówi o tym art.. 256 Kodeksu Karnego. ',
          source: [
            '[Źródło]',
            'https://sip.lex.pl/akty-prawne/dzu-dziennik-ustaw/kodeks-karny-16798683/art-256',
          ],
        },
      ],
    },
    {
      id: '3',
      questionText:
        'Na portalu społecznościowym czytasz informację o tym, że w Twoim mieście mają zostać zamknięte wszyskie sklepy. Czego nie powinieneś robić w takiej sytuacji?',
      type: 'text',
      answersOptions: [
        {
          id: '9',
          answerText:
            'Sprawdzić czy strona, z której pochodzi informacja jest wiarygodna  i nikt się pod nią nie podszywa.',
          isCorrect: false,
          explanation:
            'Ta odpowiedź jest błędna. Powinieneś sprawdzić czy adres strony jest poprawny i czy nikt nie próbuje się pod nią podszyć lub czy nie jest to nowa strona, zrobiona do szerzenia dezinformacji',
        },
        {
          id: '10',
          answerText: 'Zrobić zakupy, udostępniając po drodzie post, żeby poinformować znajomych.',
          isCorrect: true,
          explanation:
            'Zgadza się, ta odpowiedź jest prawidłowa! Powinno się zweryfikować autorów i źródła informacji, zanim podejmie się dalsze działania. Nie powinno się również rozprzestrzeniać niezweryfikowanych informacji, ponieważ to tylko pomaga rozpowszechaniu nieprawdziwych informacji.',
        },
        {
          id: '11',
          answerText: 'Sprawdzić źródła na które powołuje się autor artykułu.',
          isCorrect: false,
          explanation:
            'Ta odpowiedź jest nieprawidłowa. Należy sprawdzić źródła informacji i czy autor artykułu nie powiedział np. tylko części faktów lub ukrył kontekst, skutkiem czego wprowadza czytelnikow w błąd.',
        },
        {
          id: '12',
          answerText:
            'Sprawdzić czy artykuł występuje również na innych znanych Ci wiarygodnych portalach z wiadomościami.',
          isCorrect: false,
          explanation:
            'To błędna odpowiedź. Porównując materiały można sprawdzić czy informacja nie została przedstawiona w części lub w złym świetle.',
        },
      ],
    },
    {
      id: '4',
      questionText:
        'Dostałeś wiadomość na facebooku, na którym użytkownik wykorzystuje poniższe zdjęcie profilowe. Które ze zdjęć mogą wskazywać na oszustwo?',
      type: 'image',
      answersOptions: [
        {
          id: '13',
          answerImage: img1,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com . Link do podglądu zdjecia na TinEye znajdziecie ',
          source: [
            'tutaj.',
            'https://tineye.com/search/5b4339a4bfc96a482d04ebf11e761e0f04f440fa?sort=score&order=desc&page=1',
          ],
        },
        {
          id: '14',
          answerImage: img2,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com . Link do podglądu zdjęcia na TinEye znajdziecie ',
          source: [
            'tutaj.',
            'https://tineye.com/search/417e197f3e4a21c3f479d679d717a319c993ce4f?sort=score&order=desc&page=1',
          ],
        },
        {
          id: '15',
          answerImage: img3,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com . Link do podglądu zdjęcia na TinEye znajdziecie ',
          source: [
            'tutaj.',
            'https://tineye.com/search/68b5591f211fa20e18b2c8fa71487cbed793c0fc?sort=score&order=desc&page=1',
          ],
        },
        {
          id: '16',
          answerImage: img4,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com . Link do podglądu zjęcia na TinEye znajdziecie ',
          source: [
            'tutaj.',
            'https://tineye.com/search/ca70d2b9cd9f90459b60965b59a2adedbaf833c2?sort=score&order=desc&page=1',
          ],
        },
      ],
    },
    {
      id: '5',
      questionText:
        '"Zjawisko we współczesnej kulturze medialnej. Zachodzi, gdy odbiorca ma cały czas do czynienia z przekazami wyrażającymi podobne poglądy czy wartości. Zamyka go to na konfrontację z innymi punktami widzenia." Jakiego problemu dotyczy powyższy opis?',
      type: 'text',
      answersOptions: [
        {
          id: '17',
          answerText: 'Deepfake.',
          isCorrect: false,
          explanation: '',
        },
        {
          id: '18',
          answerText: 'Trolling.',
          isCorrect: false,
          explanation: '',
        },
        {
          id: '19',
          answerText: 'Cyberbulling',
          isCorrect: false,
          explanation: '',
        },
        {
          id: '20',
          answerText: 'FilterBubble',
          isCorrect: true,
          explanation: '',
        },
      ],
    },
    {
      id: '6',
      questionText: 'Na jakiej podstawie profilowane są wyniki Twojego zapytania w wyszukiwarce Google?',
      type: 'text',
      answersOptions: [
        {
          id: '21',
          answerText: 'Wyniki profilowane są tylko na podstawie lokalizacji użytkownika.',
          isCorrect: false,
          explanation: 'Niestety nie tylko.',
        },
        {
          id: '22',
          answerText: 'Wyniki z wyszukiwarki nie są profilowane.',
          isCorrect: false,
          explanation: 'Wyniki są profilowane.',
        },
        {
          id: '23',
          answerText: 'Wyniki zależą m.in. Od historii wyszukiwania. ',
          isCorrect: true,
          explanation:
            'Wyniki zależą również między innymi od ustawień np. zainteresowań na koncie google, zainstalowanych aplikacji ze sklepu play lub filmów obejrzanych na youtube. ',
          source: ['Źródło', 'https://policies.google.com/privacy?hl=pl&gl=pl#footnote-customized-search'],
        },
      ],
    },
    {
      id: '7',
      questionText: 'Do czego służa czytniki RSS?',
      type: 'text',
      answersOptions: [
        {
          id: '24',
          answerText: 'Pozwalają określić procentowo, jak wiarygodna jest dana informacja. ',
          isCorrect: false,
          explanation: 'Nie taka jest rola tych czytników.',
        },
        {
          id: '25',
          answerText: 'Pozwalają użytkownikowi porównać dany news w różnych miejscach w internecie.',
          isCorrect: false,
          explanation:
            'Brawo! Czytniki RSS (Rich Site Summary) służą do "zasysania" treści z wybranych portali informacyjnych, blogów a także np.kont twitterowych. Przykładem takich wyszukiwarek jest http://www.rssowl.org/. ',
          source: ['Źródło', 'https://panoptykon.org/stop-dezinformacji-przewodnik'],
        },
        {
          id: '26',
          answerText: 'Sprawdzają aktywność autora danej treści. ',
          isCorrect: false,
          explanation: 'Nie taka jest rola tych czytników.',
        },
      ],
    },
  ] as QuizQuestion[],
};
