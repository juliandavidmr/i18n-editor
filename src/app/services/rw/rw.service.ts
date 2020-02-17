import { Injectable } from '@angular/core';
import JSZip from 'jszip';
import * as XLSX from 'xlsx';
import { TranslationGroup } from 'src/app/store/translation/translation.reducer';

interface IChild {
  keyName: string;
  text?: string;
  hasChildren: boolean;
  children?: IChild[];
}

export interface ICategory {
  keyName: string;
  languages: Partial<{
    lang: string
    text: string
    children?: Partial<IChild>[]
  }>[];
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class RwService {

  fileList: { name: string, content: { [key: string]: string }[] }[] = [];
  categoryList: ICategory[] = [];

  constructor() { }

  get hasFiles() {
    return this.fileList.length > 0;
  }

  files() {
    return this.fileList;
  }

  readExcelFile(e: any) {
    return new Promise(((resolve, reject) => {
      this.fileList = [];
      const files = e.currentTarget.files as File[];
      Object.keys(files).forEach(i => {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = function (e) {
          var filename = file.name;
          // pre-process data
          var binary = "";
          var target: any = e.target;
          var bytes = new Uint8Array(target.result);
          var length = bytes.byteLength;
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          // call 'xlsx' to read the file
          var oFile = XLSX.read(binary, { type: 'binary', cellDates: true, cellStyles: true });
          if (oFile) {
            resolve({ workbook: oFile });
          }
        };
        reader.readAsArrayBuffer(file);
      });
    }));
  }

  exportToExcel() {
    var tabularData = [{
      "sheetName": "Sheet1",
      "data": [[{ "text": "Name" }, { "text": "Position" }, { "text": "Office" }, { "text": "Age" }, {
        "text": "Start <a href='https://www.jqueryscript.net/time-clock/'>date</a>"
      }, { "text": "Salary" }], [{ "text": "Tiger Nixon" }, { "text": "System Architect" }, { "text": "Edinburgh" }, { "text": 61 }, { "text": "2011/04/25" }, { "text": "$320,800" }], [{ "text": "Garrett Winters" }, { "text": "Accountant" }, { "text": "Tokyo" }, { "text": 63 }, { "text": "2011/07/25" }, { "text": "$170,750" }], [{ "text": "Ashton Cox" }, { "text": "Junior Technical Author" }, { "text": "San Francisco" }, { "text": 66 }, { "text": "2009/01/12" }, { "text": "$86,000" }], [{ "text": "Cedric Kelly" }, { "text": "Senior Javascript Developer" }, { "text": "Edinburgh" }, { "text": 22 }, { "text": "2012/03/29" }, { "text": "$433,060" }], [{ "text": "Airi Satou" }, { "text": "Accountant" }, { "text": "Tokyo" }, { "text": 33 }, { "text": "2008/11/28" }, { "text": "$162,700" }], [{ "text": "Brielle Williamson" }, { "text": "Integration Specialist" }, { "text": "New York" }, { "text": 61 }, { "text": "2012/12/02" }, { "text": "$372,000" }], [{ "text": "Herrod Chandler" }, { "text": "Sales Assistant" }, { "text": "San Francisco" }, { "text": 59 }, { "text": "2012/08/06" }, { "text": "$137,500" }], [{ "text": "Rhona Davidson" }, { "text": "Integration Specialist" }, { "text": "Tokyo" }, { "text": 55 }, { "text": "2010/10/14" }, { "text": "$327,900" }]]
    }];
    var options = {
      fileName: "jhreport",
      extension: ".xlsx",
      sheetName: "Sheet",
      fileFullName: "report.xlsx",
      header: true,
      maxCellWidth: 20
    };
    //XLSX.export(tabularData, options);
  }

  getChilds(text: { [key: string]: string }) {
    const children: IChild[] = [];
    Object.keys(text).map(k => {
      if (typeof text[k] === 'string') {
        children.push({
          keyName: k,
          hasChildren: false,
          text: text[k]
        });
      } else {
        children.push({
          keyName: k,
          hasChildren: true,
          children: this.getChilds(text[k] as any)
        });
      }
    });
    return children;
  }

  addLanguage(allKeys: boolean, resourceKey: string, lang: string) {
    if (allKeys) {
      Object.keys(this.categoryList).map(rKey => {
        this.addLanguage(false, this.categoryList[rKey].keyName, lang);
      });
    } else {
      this.categoryList.filter(f => f.keyName === resourceKey)[0].languages.push({
        lang,
        text: ''
      });
    }
  }

  addResourceKey(key: string) {
    const category: ICategory = {
      keyName: key,
      languages: []
    };

    this.fileList.map(f => {
      category.languages.push({
        lang: f.name,
        text: ''
      });
    });

    return this.categoryList.unshift(category) - 1;
  }

  removeResourceKey(key: string) {
    this.categoryList = this.categoryList.filter(c => c.keyName !== key);
  }

  exportCategories(listAll: TranslationGroup[]) {
    const list: { lang?: string, content?: { [key: string]: string } } = {};

    listAll.map((key) => {
      const languages = key.detail;
      languages.map((l) => {
        list[l.filename] = list[l.filename] || {};
        list[l.filename][key.resource] = l.text;
      });
    });

    const zip = new JSZip();
    Object.keys(list).map(fileName => {
      const content = JSON.stringify(list[fileName], null, 2);
      zip.file(fileName, content);
    });

    zip.generateAsync({ type: 'base64' }).then((base64) => {
      location.href = 'data:application/zip;base64,' + base64;
    });
    //console.log('Save:', list);
  }
}
