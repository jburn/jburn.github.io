export const previewBooks = [
  {
    title: 'Unknown Soldiers',
    editionId: 'OL25693936M',
  },
  {
    title: 'The Egyptian',
    editionId: 'OL8596182M',
  },
  {
    title: 'Blood Meridian',
    editionId: 'OL1566695M',
  },
  {
    title: 'The Alchemist',
    editionId: 'OL7288233M',
  },
  {
    title: '1984',
    editionId: 'OL32693896M',
  },
  {
    title: 'Metro 2033',
    editionId: 'OL32323358M',
  }
];

export function bookCoverUrl(editionId: string): string {
  return `https://covers.openlibrary.org/b/olid/${editionId}-M.jpg`;
}