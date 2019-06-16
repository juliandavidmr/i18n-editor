import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTreeModule } from '@angular/cdk/tree';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatTableModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatMenuModule,
  MatDialogModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RwService } from './services/rw/rw.service';
import { OptionsComponent } from './components/options/options.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { EditorComponent } from './pages/editor/editor.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DialogOverviewComponent } from './components/dialog-overview/dialog-overview.component';
import { ConfigService } from './services/config/config.service';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    LayoutComponent,
    WelcomeComponent,
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
    CdkTreeModule
  ],
  entryComponents: [DialogOverviewComponent],
  providers: [RwService, ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
