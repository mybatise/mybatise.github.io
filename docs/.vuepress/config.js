module.exports = {
    title: 'Mybatise',
    description: 'Mybatis 拓展插件',
    head: [
        ['link', { rel: 'icon', href: '/logo.ico' }]
    ],
    themeConfig: {
        logo:'/logo.svg',
        nav:[
            { text:'首页',link:'/' },
            { text: 'GitHub', link: 'https://github.com/mybatise' },
            { text: '作者博客', link: 'https://blog.xuexi4.tk/' }
        ]
    },
    temp:'.temp',
    dest:'dist'
}