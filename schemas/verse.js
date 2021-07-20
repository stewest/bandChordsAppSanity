export default {
  name: 'verse',
  title: 'Verse',
  type: 'document',
  fields: [
    {
      name: 'verseContent',
      title: 'Verse Content',
      type: 'string',
    },
    {
      name: 'verseNumber',
      title: 'Verse Number',
      type: 'number',
      description: 'The Verse Iterator, like Verse 1, Verse 2 etc.',
    },
    {
      name: 'notes',
      Title: 'Notes',
      type: 'string',
      description: 'Verse Notes',
    },
  ],
};
