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

  constructor(private readonly store: Store<State>) { }

  loadTranslation(files: FileList) {
    this.store.dispatch(TranslationActions.loadTranslations({ files: Array.from(files) }));
  }

  getTranslations() {
    return this.store
      .select(TranslationSelectors.selectTranslations)
      .pipe(distinctUntilChanged());
  }
}
