import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private readonly REGEX_IDENTIFIER = '([a-zA-Z0-9_-]+)';
  private readonly brackets: { open: string, close: string } = {
    open: '{{',
    close: '}}'
  };

  constructor() {
  }

  getBindingParams(text: string) {
    const r = new RegExp(`${this.brackets.open}\s*${this.REGEX_IDENTIFIER}\s*${this.brackets.close}`, 'g');
    const match = text.match(r);
    return match ? match : [];
  }
}
