'use strict';

const publicUrl = 'https://iruwl.github.io';

module.exports = {
  url: publicUrl,
  pathPrefix: '/',
  title: 'catetan iruwl',
  subtitle: "[Dump and die developer]'s notes.",
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 2,
  googleAnalyticsId: 'UA-93479886-2',
  useKatex: false,
  menu: [
    {
      label: 'Beranda',
      path: '/'
    }, {
      label: 'Kintaka',
      path: '/kintaka'
    }, {
      label: 'Kategori',
      path: '/kategori'
    }, {
      label: 'Label',
      path: '/label'
    }, {
      label: 'Nawala',
      path: '/nawala'
    }, {
      label: 'Alat Tempur',
      // jika pada file markdown di content/pages tidak dituliskan parameter slug
      // makan path default untuk pages adalah /pages/file-markdown
      // jika parameter slug dituliskan maka path di sini harus disesuaikan
      // dengan nilai dari parameter slug pada file markdown di content/pages
      // path: '/pages/alat-tempur'
      path: '/alat-tempur'
    }, {
      label: 'Kentang',
      // path: '/pages/kentang'
      path: '/kentang'
    }, {
      label: 'Sesuatu yang akan dilakukan',
      path: '/todo'
    }
  ],
  author: {
    name: 'iruwl',
    photo: '/photo.jpg',
    bio: 'Seorang suami, ayah dari bocil-bocil; suka bermalas-malasan di depan laptop sambil ditemenin kopi sama pisang goreng (kalo lagi ada)',
    contacts: {
      email: '',
      facebook: '',
      telegram: '',
      twitter: 'aka_irul',
      github: 'iruwl',
      rss: publicUrl + '/rss.xml',
      vkontakte: '',
      linkedin: '',
      instagram: '',
      line: '',
      gitlab: '',
      weibo: ''
    }
  }
};