'use strict';

const publicUrl = 'https://iruwl.github.io';

module.exports = {
  url: publicUrl,
  pathPrefix: '/',
  title: 'Catetan iRul',
  subtitle: 'Dump and die developer. Was born in legacy code.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 2,
  googleAnalyticsId: 'UA-93479886-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    }, {
      label: 'Kategori',
      path: '/kategori'
    }, {
      label: 'Label',
      path: '/label'
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