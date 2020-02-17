import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTranslation from './translation.reducer';

export const selectTranslationState = createFeatureSelector<fromTranslation.State>(
  fromTranslation.translationFeatureKey
);

export const selectTranslations = createSelector(
  selectTranslationState,
  (state) => state.translationGroups
);