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
            'Zgadza się, ta odpowiedź jest błędna! Technologia deepfake nie tworzy nowej treści. Jeśli chcesz dowiedzieć się więcej o zjawisku deepfake polecamy odwiedzić stronę: https://ose.gov.pl/aktualnosci/wpis/czy-to-nagranie-moze-klamac-uwaga-na-deepfake',
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
      questionText: 'Które za zdań jest faktem?',
      type: 'text',
      answersOptions: [
        {
          id: '5',
          answerText: 'Większość Polaków posiada telefon komórkowy',
          isCorrect: false,
          explanation: 'Ta odpowiedź dotyczy zjawiska deepfake. Spróbuj znaleźć tę, która jest błędna.',
        },
        {
          id: '6',
          answerText: 'Szerzenie ideologii komunistycznej i faszystowskiej jest w Polsce nielegalne',
          isCorrect: true,
          explanation:
            'Zgadza się, ta odpowiedź jest błędna! Technologia deepfake nie tworzy nowej treści. Jeśli chcesz dowiedzieć się więcej o zjawisku deepfake polecamy odwiedzić stronę: https://ose.gov.pl/aktualnosci/wpis/czy-to-nagranie-moze-klamac-uwaga-na-deepfake',
        },
        {
          id: '7',
          answerText: 'Założenie rodziny jest najważniejszą sprawą w życiu Polaka',
          isCorrect: false,
          explanation: 'Ta odpowiedź dotyczy zjawiska deepfake. Spróbuj znaleźć tę, która jest błędna.',
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
          id: '8',
          answerText:
            'Sprawdzić czy strona, z której pochodzi informacja jest wiarygodna  i nikt się pod nią nie podszywa.',
          isCorrect: false,
          explanation:
            'Ta odpowiedź jest błędna. Powinieneś sprawdzić czy adres strony jest poprawny i czy nikt nie próbuje się pod nią podszyć lub czy nie jest to nowa strona, zrobiona do szerzenia dezinformacji',
        },
        {
          id: '9',
          answerText: 'Zrobić zakupy, udostępniając po drodzie post, żeby poinformować znajomych.',
          isCorrect: true,
          explanation:
            'Zgadza się, ta odpowiedź jest prawidłowa! Powinno się zweryfikować autorów i źródła informacji, zanim podejmie się dalsze działania. Nie powinno się również rozprzestrzeniać niezweryfikowanych informacji, ponieważ to tylko pomaga rozpowszechaniu nieprawdziwych informacji.',
        },
        {
          id: '10',
          answerText: 'Sprawdzić źródła na które powołuje się autor artykułu.',
          isCorrect: false,
          explanation:
            'Ta odpowiedź jest nieprawidłowa. Należy sprawdzić źródła informacji i czy autor artykułu nie powiedział np. tylko części faktów lub ukrył kontekst, skutkiem czego wprowadza czytelnikow w błąd.',
        },
        {
          id: '11',
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
      type: 'images',
      answersOptions: [
        {
          id: '12',
          answerImage: img1,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com',
        },
        {
          id: '13',
          answerImage: img2,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com',
        },
        {
          id: '14',
          answerImage: img3,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com',
        },
        {
          id: '15',
          answerImage: img4,
          isCorrect: true,
          explanation:
            'Każde!  Oszuści korzystają często ze zdjęć z popularnych witryn. Istnieją narzędzia które pozwalają na sprawdzenie na jakich innych stronach pojawiła się fotografia. W takich sytuacjach może pomóc wyszukiwarka zdjęć, np. TinEye.com',
        },
      ],
    },
  ] as QuizQuestion[],
};
