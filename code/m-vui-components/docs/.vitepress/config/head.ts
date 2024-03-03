import type {HeadConfig} from 'vitepress'
export const head: HeadConfig[] = [
    [
        'link',
        {
            rel: 'icon',
            href: '',
            type: 'image',
        },
    ],
    [
        'meta',
        {
            name: 'theme-color',
            content: '#ffffff',
        },
    ],
    ['meta', {rel: 'referrer', href: `same-origin`}],
    ['meta', {name: 'keywords', content: `m-vui`}],
    ['meta', {name: 'description', content: `m-vui`}],
    ['meta', {name: 'author', content: `houyw`}],
    ['meta', {name: 'baidu-site-verification', content: `code-bakUos2v8l`}],
    ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "//hm.baidu.com/hm.js?2788f1f4f01e060d6d892f4bbd5b74d4";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
    `]
]
