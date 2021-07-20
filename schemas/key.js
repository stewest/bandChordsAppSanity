export default {
  name: 'key',
  title: 'Key',
  type: 'document',
  fields: [
    {
      name: 'keyName',
      title: 'Key Name',
      type: 'string',
      description: 'Key name like C',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 5,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'number',
      description: 'The position of the key from C as 0',
    },
    {
      name: 'alternate_key',
      title: 'Alternate Key',
      type: 'reference',
      // This reference is only allowed to point to a document of the type person,
      // we could list more types, but let's keep this simple:
      to: [{ type: 'key' }],
      description: 'The Alternate name of the key like C# is also Db',
    },
  ],
};
