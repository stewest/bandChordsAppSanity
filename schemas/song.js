// RichTextEditor.js
import React from 'react';

const highlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>;
const highlightRender = (props) => (
  <span style={{ backgroundColor: 'yellow' }}>{props.children}</span>
);

export default {
  title: 'Song',
  name: 'song',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      title: 'Writer',
      name: 'writer',
      type: 'string',
    },
    {
      name: 'key',
      title: 'Key',
      type: 'reference',
      to: [{ type: 'key' }],
    },
    {
      name: 'tempo',
      title: 'Tempo',
      type: 'number',
    },
    {
      name: 'songtimesignature',
      title: 'Time Signature',
      type: 'reference',
      to: [{ type: 'timeSignature' }],
    },
    {
      name: 'songContent',
      title: 'Song Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              {
                title: 'Highlight',
                value: 'highlight',
                blockEditor: {
                  icon: highlightIcon,
                  render: highlightRender,
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
