import { ChangeDetectorRef, Component } from '@angular/core';
import { RwService } from './services/rw/rw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18n-editor';

  constructor(public rw: RwService, private ref: ChangeDetectorRef) {

  }

  readMultiFiles(e) {
    this.rw.readMultiFiles(e).then(() => {
      this.ref.detectChanges();
    });
  }

  save() {
     this.rw.exportCategories();
  }
}
