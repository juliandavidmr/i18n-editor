import { Injectable } from '@angular/core';

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
            this.categorize();
            resolve();
          }
        };
        reader.readAsText(file);
      });
    }));
  }

  private categorize() {
    const list = [];
    this.fileList.map((file) => {
      Object.keys(file.content).map((key) => {
        list[key] = list[key] ? list[key] : [];
        list[key].push({
          lang: file.name,
          text: file.content[key]
        });
      });
    });
    this.categoryList = list;
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
    console.log('Save:', list);
  }
}
