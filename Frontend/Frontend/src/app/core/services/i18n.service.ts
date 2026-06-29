import { Injectable, signal } from '@angular/core';

export type Lang = 'de' | 'en';

const translations = {
  de: {
    search_placeholder: 'Raum oder Event suchen...',
    search_label: 'Suche',
    filter_building: 'Gebäude',
    filter_floor: 'Etage',
    filter_floor_prefix: 'Etage',
    rooms_count: (n: number) => `${n} Räume`,
    rooms_subtitle: 'Wählen Sie einen Raum aus',
    event_now: 'Jetzt',
    event_next: 'Nächstes',
    event_free: 'Frei',
    logout: 'Logout',
    loading: 'Räume werden geladen...',
    no_rooms: 'Keine Räume gefunden.',
    error_loading: 'Räume konnten nicht geladen werden. Ist das Backend erreichbar?',
  },
  en: {
    search_placeholder: 'Search room or event...',
    search_label: 'Search',
    filter_building: 'Building',
    filter_floor: 'Floor',
    filter_floor_prefix: 'Floor',
    rooms_count: (n: number) => `${n} Rooms`,
    rooms_subtitle: 'Select a room',
    event_now: 'Now',
    event_next: 'Next',
    event_free: 'Free',
    logout: 'Logout',
    loading: 'Loading rooms...',
    no_rooms: 'No rooms found.',
    error_loading: 'Could not load rooms. Is the backend reachable?',
  },
} as const;

@Injectable({ providedIn: 'root' })
export class I18nService {
  lang = signal<Lang>('de');

  get t() {
    return translations[this.lang()];
  }

  toggle() {
    this.lang.set(this.lang() === 'de' ? 'en' : 'de');
  }
}
