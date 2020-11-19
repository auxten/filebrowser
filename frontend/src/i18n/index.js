import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import zhCN from './zh-cn.json'

Vue.use(VueI18n)

export function detectLocale () {
  let locale = (navigator.language || navigator.browserLangugae).toLowerCase()
  switch (true) {
    case /^ar.*/i.test(locale):
      locale = 'ar'
      break
    case /^es.*/i.test(locale):
      locale = 'es'
      break
    case /^en.*/i.test(locale):
      locale = 'en'
      break
    case /^it.*/i.test(locale):
      locale = 'it'
      break
    case /^fr.*/i.test(locale):
      locale = 'fr'
      break
    case /^pt.*/i.test(locale):
      locale = 'pt'
      break
    case /^pt-BR.*/i.test(locale):
      locale = 'pt-br'
      break
    case /^ja.*/i.test(locale):
      locale = 'ja'
      break
    case /^zh-CN/i.test(locale):
      locale = 'zh-cn'
      break
    case /^zh-TW/i.test(locale):
      locale = 'zh-tw'
      break
    case /^zh.*/i.test(locale):
      locale = 'zh-cn'
      break
    case /^de.*/i.test(locale):
      locale = 'de'
      break
    case /^ru.*/i.test(locale):
      locale = 'ru'
      break
    case /^pl.*/i.test(locale):
      locale = 'pl'
      break
    case /^ko.*/i.test(locale):
      locale = 'ko'
      break
    default:
      locale = 'en'
  }

  return locale
}

const i18n = new VueI18n({
  locale: detectLocale(),
  fallbackLocale: 'en',
  messages: {
    'en': en,
    'zh-cn': zhCN
  }
})

export default i18n
