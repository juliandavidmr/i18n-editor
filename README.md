# Translation editor

[Translation editor](https://juliandavidmr.github.io/i18n-editor/dist/) for (web) apps. Edit your json properties translation files with ease.

## Features

- [x] Add translations to multiple languages.
- [x] Support multiple language files in parallel.
- [x] Live HTML rendering.
- [x] Export resource to [ngx-translate](https://github.com/ngx-translate/core) format.
- [x] Delete translation resources.
- [ ] Support for nested keys.
- [ ] Differentiator of incomplete location resources.
- [ ] Parameter extractor _(Angular, ie: {{ idParam }} => parameter = idParam)_.

## JSON examples

**en.json**:

```json
{
  "login_sign_in": "Sign in",
  "login_sign_in_here": "Sign In here",
  "login_sign_up_now": "Sign up now",
  "login_subtitle": "Bizagi Community",
  "login_title": "Welcome to the",
  "login_welcome_to": "Welcome to",
  "register_have_bizagi_account": "Do you have a Bizagi account?",
  "register_terms_use_required": "Please select terms and conditions"
}
```

**ja.json**:

```json
{
  "login_sign_in": "ログイン",
  "login_sign_in_here": "ここでサインイン",
  "login_sign_up_now": "今すぐ登録",
  "login_subtitle": "Bizagiコミュニティ",
  "login_title": "へようこそ",
  "login_welcome_to": "へようこそ！",
  "register_have_bizagi_account": "Bizagiアカウントをお持ちですか？",
  "register_terms_use_required": "契約条件を選択してください"
}
```