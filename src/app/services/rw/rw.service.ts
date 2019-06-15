import { Injectable } from '@angular/core';
import JSZip from 'jszip';

export interface ICategory {
  keyName: string;
  languages: {
    lang: string,
    text: string
  }[];
  children?: ICategory[];
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
    return new Promise((resolve => {
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
    for (const file of this.fileList) {
      Object.keys(file.content).map(key => {
        let category = this.categoryList.find(c => c.keyName === key);

        if (!category) {
          category = {
            keyName: key,
            languages: [],
            children: []
          };

          this.categoryList.push(category);
        }

        const text = file.content[key];
        if (typeof text === 'string') {
          category.languages.push({
            lang: file.name,
            text: file.content[key]
          });
        } else if (typeof text === 'object') {
          //
        }
      });
    }
    console.log('Categories:', this.categoryList);
    return this.categoryList.length;
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

  exportCategories() {
    const list: { lang?: string, content?: { [key: string]: string } } = {};

    this.categoryList.map((key) => {
      const languages: any = key.languages;
      languages.map((l: { lang: string | number; text: any; }) => {
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
