interface Design {
  title: string;
  image: string;
  alt: string;
}

interface DesignSection {
  title: string;
  description?: string;
  items: Design[];
}

export const designSections: DesignSection[] = [
  {
    title: 'Patches',
    description: 'Over the years, patches I’ve designed have found their way onto hundreds of student overalls around Finland. Here is a selection of my designs.',
    items: [
      {
        title: 'Wesibussi Mörkö',
        image: '/assets/designs/patches/wb_morko.png',
        alt: 'Patch for heavy metal themed party bus event.',
      },
      {
        title: 'KotiMaanPitkä 2024',
        image: '/assets/designs/patches/kmp24.png',
        alt: 'Patch for KMP-24 excursion',
      },
      {
        title: 'Titeenien Taistot 2024',
        image: '/assets/designs/patches/titeenit24.png',
        alt: 'Patch for CSE student gathering 2024'
      },
      {
        title: 'Wesibussi 25v',
        image: '/assets/designs/patches/wb_25v.png',
        alt: 'Patch for Wesibussi 25 year anniversary ball'
      },
      {
        title: 'Wesibussi KLK',
        image: '/assets/designs/patches/wb_KLK.png',
        alt: 'Patch for a Wesibussi event in 2023',
      },
      {
        title: 'OTY Urheilujaos',
        image: '/assets/designs/patches/oty_urheilujaos.png',
        alt: 'Patch for a student association subdivision.',
      },
    ],
  },
  {
    title: 'Social media',
    description: 'A selection of graphics I’ve designed for Instagram posts over the years.',
    items: [
      {
        title: 'Wesibussi Wall',
        image: '/assets/designs/social/wb_wall.png',
        alt: 'Social media graphic for Wesibussi event',
      },
      {
        title: 'Wesibussi Donation',
        image: '/assets/designs/social/wb_donate.png',
        alt: 'Social media graphic for Wesibussi donation milestone.',
      },
      {
        title: 'OTiT Recruitment Ad',
        image: '/assets/designs/social/otit_recruit.png',
        alt: 'Social media graphic for Wesibussi event',
      },
      {
        title: 'OTY Teekkari Traditions\' Day',
        image: '/assets/designs/social/tek_teekkari.png',
        alt: 'Social media graphic for Wesibussi event',
      },
    ],
  },
  {
    title: 'Other',
    description: '',
    items: [
      {
        title: 'Terminaali 2/2024',
        image: '/assets/designs/other/terminaali2_24.png',
        alt: 'Cover art for guild magazine 2024',
      },
      {
        title: 'Terminaali 35th Anniversary Edition',
        image: '/assets/designs/other/terminaali35.png',
        alt: 'Cover art for guild magazine 35th anniversary edition',
      },
      {
        title: 'Wesibussi Background',
        image: '/assets/designs/other/wb_bg.png',
        alt: 'Social media background for Wesibussi',
      },
      {
        title: 'Wesibussi 100k Donation Milestone Poster',
        image: '/assets/designs/other/wb_donate.png',
        alt: 'A framed poster hanged on Oulu Children\'s hospital wall.',
      },
    ],
  },
];