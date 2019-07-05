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
  modelNewLanguage = '.json';
  modelNewKey = '';
  resourcesGroup: any;
  state: any;
  loading: boolean = false;
  jsonResult: any = {};
  filter: string;
  totalResources: any[] = [];
  missingResources: any[] = [];
  renderChecked: boolean = false;
  isMissingActivated: boolean = false;

  constructor(public rw: RwService, public dialog: MatDialog, private cdRef: ChangeDetectorRef) { }

  readMultiFiles(e: any) {
    this.loading = true;
    this.cdRef.detectChanges();
    this.rw.readMultiFiles(e).then(({ count }) => {
      this.totalResources = this.rw.categoryList;
      this.missingResources = this.rw.categoryList.filter(res => res.languages.length != this.rw.fileList.length)
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
      var languages = ["en", "es", "de", "fr", "it", "ja", "nl", "pt", "ru", "zh-cn"];
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
      this.jsonResult = "<pre>" + JSON.stringify(result, undefined, 2) + "</pre>"
      this.openDialog("Result", this.jsonResult, 900)

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
      case "it":
        return row.IT || row.it;
      case "ja":
        return row.JA || row.ja;
      case "nl":
        return row.NL || row.nl;
      case "pt":
        return row.PT || row.pt;
      case "ru":
        return row.RU || row.ru;
      case "zh-cn":
        return row.ZH_CN || row.zh_cn;
    }
  }

  filterResources(event) {
    if (event != '') {
      this.totalResources =
        this.isMissingActivated ?
          this.missingResources.filter(res => res.keyName.toLowerCase().indexOf(event.toLowerCase()) > -1) :
          this.rw.categoryList.filter(res => res.keyName.toLowerCase().indexOf(event.toLowerCase()) > -1);
      if (this.resourcesGroup)
        this.resourcesGroup = this.totalResources.filter(res => res.keyName.toLowerCase().indexOf(this.resourcesGroup.keyName.toLowerCase()) > -1).length > 0 ? this.resourcesGroup : null;
    } else {
      this.totalResources = this.isMissingActivated ? this.missingResources : this.rw.categoryList;
    }
  }

  addLanguage(allKeys: boolean, resourceKey: string) {
    this.rw.addLanguage(allKeys, resourceKey, this.modelNewLanguage);
    this.modelNewLanguage = '.json';
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
    this.renderChecked = event.checked;
    this.state.inner = this.renderChecked;
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
      //console.log('The dialog was closed', result);
    });
  }

  // Treat the instructor name as the unique identifier for the object
  trackCategoryByKey(index: number, category: ICategory) {
    return category.keyName;
  }

  trackResourceByKey(index: number, transl: any) {
    return transl.lang;
  }

  viewResource(index: string | number) {
    this.resourcesGroup = this.totalResources[index];
    this.state = this.states[index];
  }

  showMissingFiles() {
    this.totalResources = this.missingResources.filter(res => res.languages.length != this.rw.fileList.length)
    this.isMissingActivated = true;
  }

  showAllResources() {
    this.totalResources = this.rw.categoryList;
    this.isMissingActivated = false;
  }
}
