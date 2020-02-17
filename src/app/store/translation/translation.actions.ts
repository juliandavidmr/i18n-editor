import { createAction, props } from '@ngrx/store';
import { TranslationGroup } from './translation.reducer';

export const loadTranslations = createAction(
  '[Translation] Load Translations',
  props<{ files: FileList }>()
);

export const loadTranslationsSuccess = createAction(
  '[Translation] Load Translations Success',
  props<{ data: TranslationGroup[] }>()
);

export const loadTranslationsFailure = createAction(
  '[Translation] Load Translations Failure',
  props<{ error: any }>()
);
