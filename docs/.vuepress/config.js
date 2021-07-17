const moment = require('moment');
moment.locale('zh-cn')

module.exports = {
    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: timestamp => {
              return moment(timestamp).format('LLLL')
            }
          }
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
        ]
    }
}