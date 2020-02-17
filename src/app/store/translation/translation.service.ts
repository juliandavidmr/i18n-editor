import { Injectable } from '@angular/core';
import * as TranslationActions from './translation.actions';
import * as TranslationSelectors from './translation.selectors';
import { State } from './translation.reducer';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private readonly isoNames = {
    ar: 'Arabic',
    az: 'Azerbaijani',
    be: 'Belorussian',
    bg: 'Bulgarian',
    bs: 'Bosnian',
    ca: 'Catalan',
    cs: 'Czech',
    da: 'Danish',
    de: 'German',
    en: 'English',
    es: 'Spanish',
    et: 'Estonian',
    fa: 'Persian',
    fi: 'Finnish',
    fr: 'French',
    el: 'Greek',
    he: 'Hebrew',
    hr: 'Croatian',
    hu: 'Hungarian',
    hy: 'Armenian',
    it: 'Italian',
    id: 'Indonesian',
    ja: 'Japanese',
    ka: 'Georgian',
    kk: 'Kazakh',
    ko: 'Korean',
    ky: 'Kyrgyz',
    lt: 'Lithuanian',
    lv: 'Latvian',
    mk: 'Macedonian',
    mn: 'Mongolian',
    nb: 'Norwegian Bokmål',
    nl: 'Dutch',
    nn: 'Norwegian Nynorsk',
    pl: 'Polish',
    pt: 'Portuguese',
    ro: 'Romanian',
    ru: 'Russian',
    sk: 'Slovak',
    sl: 'Slovene',
    sr: 'Serbian',
    sv: 'Swedish',
    th: 'Thai',
    tr: 'Turkish',
    uk: 'Ukrainian',
    ur: 'Urdu',
    uz: 'Uzbek',
    zh: 'Chinese',
    vi: 'Vietnamese',
  }

  constructor(private readonly store: Store<State>) { }

  loadTranslation(files: FileList) {
    this.store.dispatch(TranslationActions.loadTranslations({ files: Array.from(files) as any }));
  }

  getTranslations() {
    return this.store
      .select(TranslationSelectors.selectTranslations)
      .pipe(distinctUntilChanged());
  }

  getCountryName(iso: string): string {
    return this.isoNames[iso];
  }
}
