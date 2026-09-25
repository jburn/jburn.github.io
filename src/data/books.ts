export const previewBooks = [
  {
    title: 'Unknown Soldiers',
    author: 'Väinö Linna',
    editionId: 'OL25693936M',
  },
  {
    title: 'The Egyptian',
    author: 'Mika Waltari',
    editionId: 'OL8596182M',
  },
  {
    title: 'Blood Meridian',
    author: 'Cormac McCarthy',
    editionId: 'OL1566695M',
  },
  {
    title: 'The Alchemist',
    author: 'Paul Coelho',
    editionId: 'OL7288233M',
  },
  {
    title: '1984',
    author: 'George Orwell',
    editionId: 'OL32693896M',
  },
  {
    title: 'Metro 2033',
    author: 'Dmitry Glukhovsky',
    editionId: 'OL32323358M',
  },
];

export const favouriteBooks = [
  {
    title: 'Unknown Soldiers',
    author: 'Väinö Linna',
    editionId: 'OL25693936M',
  },
  {
    title: 'The Egyptian',
    author: 'Mika Waltari',
    editionId: 'OL8596182M',
  },
  {
    title: 'Blood Meridian',
    author: 'Cormac McCarthy',
    editionId: 'OL1566695M',
  },
  {
    title: 'The Alchemist',
    author: 'Paul Coelho',
    editionId: 'OL7288233M',
  },
  {
    title: '1984',
    author: 'George Orwell',
    editionId: 'OL32693896M',
  },
  {
    title: 'Metro 2033',
    author: 'Dmitry Glukhovsky',
    editionId: 'OL32323358M',
  },
  {
    title: 'And Then There Were None',
    author: 'Agatha Christie',
    editionId: 'OL49808404M',
  },
  {
    title: 'Wool',
    author: 'Hugh Howey',
    editionId: 'OL42864895M',
  },
  {
    title: 'The Picture of Dorian Grey',
    author: 'Oscar Wilde',
    editionId: 'OL37044585M',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    editionId: 'OL27918581M',
  },
]

export function bookCoverUrl(editionId: string): string {
  return `https://covers.openlibrary.org/b/olid/${editionId}-M.jpg`;
}