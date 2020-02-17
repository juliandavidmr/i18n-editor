import { Component, ChangeDetectorRef } from '@angular/core';
import { RwService } from 'src/app/services/rw/rw.service';
import * as XLSX from 'xlsx';
import { TranslationService } from 'src/app/store/translation/translation.service';
import { TranslationGroup, Translation } from 'src/app/store/translation/translation.reducer';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  states: { inner: boolean }[] = [];
  modelNewLanguage = '.json';
  modelNewKey = '';
  currentTranslationGroup = 0;
  resourcesGroup: TranslationGroup;
  translationGroups: TranslationGroup[] = [];
  state: any;
  loading: boolean = false;
  jsonResult: any = {};
  filter: string;
  totalResources: any[] = [];
  renderChecked: boolean = false;
  currentTranslationTab: 'all' | 'addFile' | 'addTranslation' = 'all';

  constructor(public rw: RwService, private cdRef: ChangeDetectorRef, private readonly translationService: TranslationService) {
    this.initTranslationList();
  }

  private initTranslationList() {
    this.translationService.getTranslations().subscribe(list => {
      this.translationGroups = JSON.parse(JSON.stringify(list));
    })
  }

  get isEmpty() {
    return this.translationGroups.length === 0;
  }

  readMultiFiles(e: any) {
    const files = e.currentTarget.files as File[];
    this.translationService.loadTranslation(files as any);
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
        let jsonResources = {};
        rows.forEach(row => {
          let key = this.getParameterCaseInsensitive(row, "key");
          let value = this.getParameterCaseInsensitive(row, lang);
          if (!(value) && lang === "zh-cn")
            value = this.getParameterCaseInsensitive(row, "zh");
          jsonResources[`${key}`] = `${value}`;
        })
        let data = { lang: lang, resources: jsonResources }
        result.push(data)
      })
      this.jsonResult = '<pre>' + JSON.stringify(result, undefined, 2) + '</pre>'
      this.openDialog("Result", this.jsonResult, 900, true, true)

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
        return row.ZH_CN || row.zh_cn || row.zh || row.ZH;
    }
  }

  getParameterCaseInsensitive(object, key) {
    let value = object[Object.keys(object)
      .find(k => k.toLowerCase() === key.toLowerCase())];
    return value || '';
  }

  filterResources(event: string) {
    // if (event != '') {
    //   this.totalResources = this.rw.categoryList.filter(res => res.keyName.toLowerCase().indexOf(event.toLowerCase()) > -1);
    //   if (this.resourcesGroup$)
    //     this.resourcesGroup$ = this.totalResources.filter(res => res.keyName.toLowerCase().indexOf(this.resourcesGroup$.keyName.toLowerCase()) > -1).length > 0 ? this.resourcesGroup$ : null;
    // } else {
    //   this.totalResources = this.rw.categoryList;
    // }
  }

  addLanguage(allKeys: boolean, resourceKey: string) {
    this.rw.addLanguage(allKeys, resourceKey, this.modelNewLanguage);
    this.modelNewLanguage = '.json';
  }

  save() {
    this.rw.exportCategories(this.translationGroups);
  }

  addNewKey() {
    if (this.modelNewKey) {
      const index = this.rw.addResourceKey(this.modelNewKey);
      this.modelNewKey = '';
      this.states[index] = { inner: false };
      this.refreshResources();
    }
  }

  removeResourceKey(keyName: string) {
    const r = confirm(`Are you sure to remove "${keyName}"?`);
    if (r) {
      this.rw.removeResourceKey(keyName);
      this.refreshResources();
    }
  }

  refreshResources() {    
    this.totalResources = this.rw.categoryList;
  }

  onChangeInner(event) {
    this.renderChecked = event.target.checked;
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

  openDialog(title: string, content: string, width: number = 430, isField: boolean = false, showCheckboxes: boolean = false): void {
    alert(content);
  }

  // Treat the instructor name as the unique identifier for the object
  trackCategoryByKey(index: number, category: TranslationGroup) {
    return category.resource;
  }

  trackResourceByKey(index: number, transl: Translation) {
    return transl.filename;
  }

  viewResource(index: number) {
    this.resourcesGroup = this.translationGroups[index];
    this.currentTranslationGroup = index;
  }

  getMissingFiles() {
    return this.rw.categoryList.filter(res => res.languages.length != this.rw.fileList.length)
  }

  getCountryName(iso: string) {
    iso = iso.split(/-|\./)[0];
    return this.translationService.getCountryName(iso);
  }
}
