import { ChangeDetectorRef, Component } from '@angular/core';
import { RwService } from './services/rw/rw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n-editor';

  constructor() {

  }
}
