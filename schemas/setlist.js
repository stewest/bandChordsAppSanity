export default {
  name: 'setlistdoc',
  title: 'Set List',
  type: 'document',
  fields: [
    {
      name: 'setListName',
      title: 'SetList Name',
      type: 'string',
      description: 'User Location like "The Bay Gig" with the date.',
    },
    {
      name: 'setlistdate',
      title: 'Datetime',
      type: 'datetime',
      description: 'The Date of the gig',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today'
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'setListName',
      },
    },
    {
      title: 'Set List Songs',
      name: 'setlistsongs',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'song'},
          ]
        }
      ]
    }
  ],
};
