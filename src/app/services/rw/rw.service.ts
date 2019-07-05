import { Injectable } from '@angular/core';
import JSZip from 'jszip';
import * as XLSX from 'xlsx';

export interface ICategory {
  keyName: string;
  languages: {
    lang: string,
    text: string
  }[];
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

  readMultiFiles(e: any) {
    return new Promise(((resolve, reject) => {
      this.fileList = [];
      const files = e.currentTarget.files as File[];
      Object.keys(files).forEach(i => {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          // server call for uploading or reading the files one-by-one
          // by using 'reader.result' or 'file'
          this.fileList.push({
            name: file.name,
            content: JSON.parse(reader.result as string)
          });
          if (this.fileList.length === files.length) {
            resolve({ count: this.categorize() });
          }
        };
        reader.readAsText(file);
      });
    }));
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
          var oFile = XLSX.read(binary, {type: 'binary', cellDates:true, cellStyles:true});
          if (oFile) {
            resolve({ workbook: oFile });
          }
        };
        reader.readAsArrayBuffer(file);
      });
    }));
  }

  private categorize() {
    for (const file of this.fileList) {
      Object.keys(file.content).map((key) => {
        let category = this.categoryList.find(c => c.keyName === key);

        if (!category) {
          this.categoryList.push({
            keyName: key,
            languages: []
          });

          category = this.categoryList.find(c => c.keyName === key);
        }

        category.languages.push({
          lang: file.name,
          text: file.content[key]
        });
      });
    }
    console.log('Cat', this.categoryList)
    return Object.keys(this.categoryList).length;
  }

  addLanguage(allKeys: boolean, resourceKey: string, lang: string) {

    if (allKeys) {
      Object.keys(this.categoryList).map(rKey => {
        this.addLanguage(false, this.categoryList[rKey].keyName, lang)
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

  exportCategories() {
    const list: { lang?: string, content?: { [key: string]: string } } = {};

    this.categoryList.map((key) => {
      const languages: any = key.languages;
      languages.map(l => {
        list[l.lang] = list[l.lang] || {};
        list[l.lang][key.keyName] = l.text;
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
    console.log('Save:', list);
  }
}
