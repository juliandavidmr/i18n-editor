import { Action, createReducer, on } from '@ngrx/store';
import * as TranslationActions from './translation.actions';

export const translationFeatureKey = 'translation';

export interface Translation {
  filename: string;
  text: string;
}

export interface TranslationGroup {
  resource: string;
  detail: Translation[];
}

export interface State {
  loading: boolean;
  translationGroups: TranslationGroup[]
}

export const initialState: State = {
  loading: false,
  translationGroups: []
};

const translationReducer = createReducer(
  initialState,

  on(TranslationActions.loadTranslations, (state, action) => ({
    ...state,
    loading: true
  })),
  on(TranslationActions.loadTranslationsSuccess, (state, action) => ({
    ...state,
    loading: false,
    translationGroups: [...action.data]
  })),
  on(TranslationActions.loadTranslationsFailure, (state, action) => ({...state})),
);

export function reducer(state: State | undefined, action: Action) {
  return translationReducer(state, action);
}
