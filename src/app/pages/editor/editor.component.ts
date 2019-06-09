import { Component } from '@angular/core';
import { RwService, ICategory } from 'src/app/services/rw/rw.service';
import { MatCheckboxChange, MatDialog } from '@angular/material';
import { DialogOverviewComponent } from 'src/app/components/dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  states: {
    inner: boolean
  }[] = [];
  modelNewLanguage = '';
  modelNewKey = '';

  constructor(public rw: RwService, public dialog: MatDialog) { }

  readMultiFiles(e) {
    this.rw.readMultiFiles(e).then(({ count }) => {
      Array.from({ length: count }, () => this.states.push({ inner: false }));
      console.log(this.states);
    });
  }

  addLanguage(allKeys: boolean, resourceKey: string) {
    this.rw.addLanguage(allKeys, resourceKey, this.modelNewLanguage);
    this.modelNewLanguage = '';
  }

  save() {
    this.rw.exportCategories();
  }

  addNewKey() {
    if (this.modelNewKey) {
      console.log(this.modelNewKey);
      const index = this.rw.addResourceKey(this.modelNewKey);
      this.modelNewKey = '';
      this.states[index] = {inner: false};
    }
  }

  onChangeInner(event: MatCheckboxChange, index: number) {
    this.states[index].inner = event.checked;
    console.log(index, event);
  }

  copyFormat(format: 'ngx-translate', keyResource: string) {
    switch (format) {
      case 'ngx-translate':
        this.openDialog('ngx-translate', `{{ '${keyResource}' | translate }}`);
        break;
      default:
        break;
    }
  }

  openDialog(title: string, content: string): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: '430px',
      data: { title, content }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  // Treat the instructor name as the unique identifier for the object
  trackCategoryByKey(index: number, category: ICategory) {
    return category.keyName;
  }

  trackResourceByKey(index: number, transl: any) {
    return transl.lang;
  }
}
