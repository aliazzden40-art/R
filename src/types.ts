export interface OpenWhenLetter {
  id: string;
  trigger: string;
  subtitle: string;
  content: string[];
  signature: string;
  timestamp: string;
}

export interface PersonaCard {
  id: string;
  title: string;
  category: string;
  iconName: 'coffee' | 'croissant' | 'cat' | 'heart-handshake' | 'sparkles' | 'shield';
  reflection: string;
  extendedNote: string;
}

export interface TimelineEvent {
  date: string;
  displayDate: string;
  title: string;
  subtitle: string;
  description: string;
  isPrimary?: boolean;
  tag: string;
}

export interface FuturePossibility {
  text: string;
  domain: string;
  insight: string;
}
