import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import * as TranslationActions from './translation.actions';
import { TranslationGroup } from './translation.reducer';

// export type NestedContent = Record<string, string> | Record<string, NestedContent>;
export type NestedContent = Record<string, string> | Record<string, Record<string, string | Record<string, string | Record<string, string>>>>;
export type BaseFiles = { name: string, content: NestedContent };

@Injectable()
export class TranslationEffects {

  loadTranslations$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TranslationActions.loadTranslations),
      concatMap((params) =>
        of(0)
        .pipe(
          concatMap(() => {
            return new Observable<BaseFiles[]>(observer => {
              const files = params.files;
              const fileList: BaseFiles[] = [];
  
              for (let i = 0; i < files.length; i++) {
                const file: File = files[i];
                const reader = new FileReader();
                reader.onload = () => {
                  fileList.push({
                    name: file.name,
                    content: JSON.parse(reader.result as string)
                  });
  
                  if (fileList.length === files.length) {
                    observer.next(fileList);
                    observer.complete();
                  }
                };
                reader.readAsText(file); 
              }
            })
          }),
          map(fileList => {
            const translationGroups: TranslationGroup[] = [];

            for (let i = 0; i < fileList.length; i++) {
              const file = fileList[i];
              const fileName = file.name; // ja.json
              const resources = file.content; // { "resource": "abc", "resource_b": { "child": "Hello" } }

              Object.keys(resources).map(resource => {
                const content = resources[resource];

                if (typeof content === 'string') {
                  const translationGroup = translationGroups.find(t => t.resource === resource);
                  if (translationGroup) {
                    translationGroup.detail.push({ filename: fileName, text: content });
                  } else {
                    translationGroups.push({ resource, detail: [{ filename: fileName, text: content }] });
                  }
                } else {
                  // TODO: Aqui es para claves anidadas.
                }
              });
            }

            return TranslationActions.loadTranslationsSuccess({ data: translationGroups })
          }),
          catchError(error => of(TranslationActions.loadTranslationsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
