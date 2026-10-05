import { OpenWhenLetter, PersonaCard, TimelineEvent, FuturePossibility } from '../types.ts';

export const PERSONA_CARDS: PersonaCard[] = [
  {
    id: 'coffee',
    title: 'COFFEE',
    category: 'Our Warm Mornings',
    iconName: 'coffee',
    reflection: 'Somehow, even coffee feels a little more special because I know how much you love it.',
    extendedNote: 'Every time I hold a warm cup or catch the aroma of roasted coffee, I picture your smile in the morning. It isn’t just coffee anymore; it has become one of my favorite reminders of you, your quiet morning thoughts, and the peace I feel whenever I am with you.',
  },
  {
    id: 'cinnamon-rolls',
    title: 'CINNAMON ROLLS',
    category: 'The Sweetness You Bring',
    iconName: 'croissant',
    reflection: 'There is a softness in how much joy you find in the sweetest things.',
    extendedNote: 'Whenever you get excited over a fresh, warm cinnamon roll, you look so genuinely happy that it melts my heart. You bring that same warmth and sweetness into my life every single day, making even ordinary moments feel like home.',
  },
  {
    id: 'cats',
    title: 'CATS',
    category: 'Gentle & Patient Love',
    iconName: 'cat',
    reflection: 'Cats recognize pure kindness before anything else. It makes complete sense why you love them.',
    extendedNote: 'You have that calm, comforting warmth that puts any soul at ease. Seeing your eyes light up whenever you see a cat reminds me of how pure your heart is, and how lucky I am to be loved by someone so tender and gentle.',
  },
  {
    id: 'children',
    title: 'CHILDREN',
    category: 'Your Beautiful Heart',
    iconName: 'heart-handshake',
    reflection: 'The way you care for children proves that your empathy isn’t practiced—it’s instinct.',
    extendedNote: 'Watching the patient, caring way you talk to children shows me the depth of your soul. You have a nurturing warmth that makes people feel safe and cherished. It is one of the thousand reasons I fall in love with you more and more.',
  },
];

export const OPEN_WHEN_LETTERS: OpenWhenLetter[] = [
  {
    id: 'lost',
    trigger: 'OPEN WHEN YOU FEEL LOST',
    subtitle: 'When the path feels uncertain and you need a hand to hold',
    timestamp: 'Always In My Heart',
    signature: 'Forever your safe place, Ali',
    content: [
      'My dearest Rayan, take a slow, gentle breath. You don’t have to figure out the whole world tonight.',
      'Sometimes your mind feels clouded because you carry so much care and expect so much of yourself. But feeling lost is never the end of your story—it is just the pause before you discover your strength all over again.',
      'Whenever the road ahead feels dark, remember: you are never walking it alone. I am right here holding your hand, believing in you when your own faith wavers, and loving you unconditionally.',
      'You will find your way, my love. You always do.'
    ],
  },
  {
    id: 'doubt',
    trigger: 'OPEN WHEN YOU DOUBT YOURSELF',
    subtitle: 'When you forget how extraordinary and brilliant you are',
    timestamp: 'Unwavering Truth',
    signature: 'Loving and admiring you endlessly, Ali',
    content: [
      'Look at me through these words, Rayan. Stop listening to the voice in your head that whispers you are not enough.',
      'In our studies of programming and cybersecurity, we both know how complex things can get. Every difficult problem, every error, and every confusing concept is just part of the journey. None of it defines your brilliance.',
      'I see your intellect, your sharp mind, your determination, and how hard you try even when you are exhausted. You are capable of mastering anything you put your mind to.',
      'You are brilliant, Rayan. And more than that, you are my greatest pride.'
    ],
  },
  {
    id: 'tired',
    trigger: 'OPEN WHEN YOU\'RE TIRED',
    subtitle: 'When you need to rest and let the world wait',
    timestamp: 'Quiet Sanctuary',
    signature: 'Here to hold you, Ali',
    content: [
      'Put your work away, my darling. Close your eyes. You have carried enough for today.',
      'You pour so much effort and passion into everything you do, but your worth is not measured by how much you can endure without breaking. You are allowed to rest.',
      'Let your shoulders drop. Tonight, the code can wait, the books can wait, and the world can wait. Just rest and let yourself be held in my thoughts.',
      'You did wonderfully today. Sleep peacefully, my love.'
    ],
  },
  {
    id: 'miss-me',
    trigger: 'OPEN WHEN YOU MISS ME',
    subtitle: 'Bridging every moment between us with love',
    timestamp: '08 · 01 · 2026',
    signature: 'Completely and forever yours, Ali',
    content: [
      'I miss you too, Rayan. More than these words could ever describe.',
      'Whenever you miss me, touch your heart and remember that I am carrying you with me in every thought. We share the same dreams, the same field, birthdays just ten days apart in December, and a love that became ours on January 8th, 2026.',
      'There is no distance that can lessen how much I cherish you. You are the first thought in my morning and the last smile on my face before I fall asleep.',
      'Close your eyes for a moment—I am right there with you.'
    ],
  },
  {
    id: 'motivation',
    trigger: 'OPEN WHEN YOU NEED MOTIVATION',
    subtitle: 'To remind you of the incredible heights waiting for you',
    timestamp: 'Always Believing in You',
    signature: 'Cheering for you always, Ali',
    content: [
      'Rayan, think about the future you are building with your own hands. You chose a field that requires true courage and intellect—programming and cybersecurity—and you belong right at the top of it.',
      'Every challenge you face is turning you into a master of your craft. When you feel tired, remember why you started, and remember how capable you truly are.',
      'I believe in your potential with every beat of my heart. Keep pushing forward, step by step. Nothing can stop you.'
    ],
  },
  {
    id: 'reminder',
    trigger: 'OPEN WHEN YOU NEED A REMINDER',
    subtitle: 'The one promise that will never fade',
    timestamp: 'Our Eternal Invariant',
    signature: 'Still and always choosing you, Ali',
    content: [
      'If you ever wonder how much you mean to me, let me remind you:',
      'You are my favorite person in the entire universe. You are the warmth in my quiet days, the motivation in my ambitions, and the gentle beauty that makes life magical.',
      'I love you for your brilliant mind, your soft laughter, your deep empathy, and the way you look at the world. I loved you yesterday, I love you today, and I will choose you tomorrow and forever.',
      'You are my heart, Rayan.'
    ],
  },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: '2007-12-06',
    displayDate: '06 · 12 · 2007',
    title: 'The Day My World Began',
    subtitle: 'Rayan\'s Birthday',
    description: 'On this winter day in December, the most wonderful girl came into this world. Long before we knew each other, destiny was already writing our story.',
    tag: 'Your Beginning',
  },
  {
    date: '2007-12-16',
    displayDate: '16 · 12 · 2007',
    title: 'Ten Days Apart',
    subtitle: 'Ali\'s Birthday',
    description: 'Born just ten days after you under the same winter sky, destined to share the same passion, the same code, and one inseparable heart.',
    tag: 'Written in the Stars',
  },
  {
    date: '2026-01-08',
    displayDate: '08 · 01 · 2026',
    title: 'The Day We Became One',
    subtitle: 'Our Story Became Ours',
    description: 'The happiest and most meaningful day of my life. The day two souls agreed to walk hand in hand through every storm and every triumph. The beginning of forever.',
    isPrimary: true,
    tag: 'Our Forever Begins',
  },
];

export const FUTURE_POSSIBILITIES: FuturePossibility[] = [
  {
    text: 'You become more extraordinary and fulfilled than you ever dreamed.',
    domain: 'Your Boundless Growth',
    insight: 'Watching you bloom into the woman you are becoming is the greatest joy of my life.',
  },
  {
    text: 'We build a warm, peaceful home filled with laughter, morning coffee, and endless love.',
    domain: 'Our Shared Sanctuary',
    insight: 'A quiet place where you feel cherished, safe, and happy every single day.',
  },
  {
    text: 'You make remarkable breakthroughs in cybersecurity and software engineering.',
    domain: 'Your Brilliant Mind',
    insight: 'Your intelligence and dedication will open doors that command respect across the industry.',
  },
  {
    text: 'You look back at every hard semester and realize you conquered them all.',
    domain: 'Triumph & Pride',
    insight: 'Every late night you spent studying will pay off in ways that will make your heart sing with pride.',
  },
  {
    text: 'We travel, code together, and celebrate every victory side by side.',
    domain: 'Our Adventure',
    insight: 'No matter how high you fly, I will always be right beside you, cheering the loudest.',
  },
];
