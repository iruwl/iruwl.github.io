'use strict';

const publicUrl = 'https://iruwl.github.io';

module.exports = {
  url: publicUrl,
  pathPrefix: '/',
  title: 'Catetan iRul',
  subtitle: 'Dump and die developer. Was born in legacy code.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'iRul',
    photo: '/photo.jpg',
    bio: 'Seorang suami, ayah dari bocil-bocil; suka bermalas-malasan di depan laptop sambil ditemenin kopi sama pisang goreng (kalo lagi ada)',
    contacts: {
      email: '',
      facebook: '#',
      telegram: '#',
      twitter: 'aka_irul',
      github: 'iruwl',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: ''
    }
  }
};