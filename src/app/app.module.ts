import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatTableModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatDialogModule,
  MatTreeModule,
  MatSnackBarModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RwService } from './services/rw/rw.service';
import { OptionsComponent } from './components/options/options.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { EditorComponent } from './pages/editor/editor.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';
import { ConfigService } from './services/config/config.service';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/reducers';
import * as fromTranslation from './store/translation/translation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TranslationEffects } from './store/translation/translation.effects';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    LayoutComponent,
    EditorComponent,
    SidenavComponent,
    DialogOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    MatListModule,
    MatTreeModule,
    MatSnackBarModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreModule.forFeature(fromTranslation.translationFeatureKey, fromTranslation.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([TranslationEffects])
  ],
  entryComponents: [DialogOverviewComponent],
  providers: [RwService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
