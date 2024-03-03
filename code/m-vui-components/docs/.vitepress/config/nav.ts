import {ensureLang, lang} from '../utils/lang'
import navLocale from '../i18n/pages/nav.json'
import {REPO_PATH } from './global'

function getNav() {
    return Object.values(navLocale[lang]).map(item => ({
        ...item,
        // 添加语言前缀，最终为 /zh-CN/guide/design
        link: `${ensureLang(lang)}${item.link}`,
    }))
}

const dropDown = [{
    text: '更多',
    items: [
        { text: 'GitHub', link: `https://github.com/${REPO_PATH}`, icon: 'github'},
        { text: 'Blog', link: 'http://www.houyuewei.cn' },
    ]
}];


export const nav = [...getNav(), ...dropDown]
