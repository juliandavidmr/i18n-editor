import { Injectable } from '@angular/core';
import JSZip from 'jszip';

export interface ICategory {
  [key: string]: {
    lang: string, text: string
  };
}

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

  private categorize() {
    const list = [];
    for (const file of this.fileList) {
      Object.keys(file.content).map((key) => {
        list[key] = list[key] ? list[key] : [];
        list[key].push({
          lang: file.name,
          text: file.content[key]
        });
      });
    }
    this.categoryList = list;
    return Object.keys(list).length;
  }

  addLanguage(allKeys: boolean, resourceKey: string, lang: string) {
    if (allKeys) {
      Object.keys(this.categoryList).map(rKey => this.addLanguage(false, rKey, lang));
    } else {
      this.categoryList[resourceKey].push({
        lang,
        text: ''
      });
    }
  }

  exportCategories() {
    const list: { lang?: string, content?: { [key: string]: string } } = {};
    Object.keys(this.categoryList).map((key) => {
      const files: any = this.categoryList[key];
      files.map((lang) => {
        list[lang.lang as string] = list[lang.lang] || { };
        list[lang.lang as string][key] = lang.text;
      });
    });

    const zip = new JSZip();
    Object.keys(list).map(fileName => {
      const content = JSON.stringify(list[fileName], null, 2);
      zip.file(fileName, content);
    });

    zip.generateAsync({type: 'base64'}).then((base64) => {
      location.href = 'data:application/zip;base64,' + base64;
    });
    console.log('Save:', list);
  }
}
