import { Component, ChangeDetectorRef } from '@angular/core';
import { RwService, ICategory } from 'src/app/services/rw/rw.service';
import { MatCheckboxChange, MatDialog } from '@angular/material';
import { DialogOverviewComponent } from 'src/app/components/dialog-overview/dialog-overview.component';
import * as XLSX from 'xlsx';

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
  resourcesGroup: any;
  state: any;
  loading: boolean = false;
  jsonResult: any = {};

  constructor(public rw: RwService, public dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

  readMultiFiles(e) {
    this.loading = true;
    this.cdRef.detectChanges();
    this.rw.readMultiFiles(e).then(({ count }) => {
      Array.from({ length: count }, () => this.states.push({ inner: false }));
      this.loading = false;
      this.cdRef.detectChanges();
    });
  }

  readExcelFile(e) {
    this.loading = true;
    this.cdRef.detectChanges();
    this.rw.readExcelFile(e).then(({ workbook }) => {
      var first_sheet_name = workbook.SheetNames[0];
      var languages = ["en", "es", "de", "fr", "ja", "it"];
      var result: any[] = []
      /* Get worksheet */
      var worksheet = workbook.Sheets[first_sheet_name];
      let rows: any[] = XLSX.utils.sheet_to_json(worksheet, {
        raw: true
      });
      languages.forEach(lang => {
        let data = { lang: lang, resources: [] }
        rows.forEach(row => {
          let key = row.KEY || row.key;
          let value = this.getLangValue(row, lang)
          data.resources.push(`${key} : ${value || ''};`)
          // data.resources.push(`${key} : ${value || ''};`)
        })
        result.push(data)
      })
      this.jsonResult = "<pre>"+JSON.stringify(result,undefined, 2) +"</pre>"
      this.openDialog("Result", this.jsonResult, 700)

      this.loading = false;
      this.cdRef.detectChanges();
    });
  }

  getLangValue(row: any, lang: string) {
    switch (lang) {
      case "en":
        return row.EN || row.en;
      case "es":
        return row.ES || row.es;
      case "de":
        return row.DE || row.de;
      case "fr":
        return row.FR || row.fr;
      case "ja":
        return row.JA || row.ja;
      case "it":
        return row.IT || row.it;
    }
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
      this.states[index] = { inner: false };
    }
  }

  onChangeInner(event: MatCheckboxChange, index: number) {
    this.state.inner = event.checked;
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

  openDialog(title: string, content: string, width: number = 430): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: `${width}px`,
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

  viewResource(index) {
    this.resourcesGroup = this.rw.categoryList[index];
    this.state = this.states[index];
  }
}
