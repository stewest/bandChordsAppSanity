// RichTextEditor.js
import React from 'react';

const chordsIcon = () => <span style={{ fontWeight: 'bold' }}>Chords</span>;
const chordsRender = (props) => (
  <span className="chords" style={{ fontWeight: 'bold' }}>{props.children}</span>
);

const sectionIcon = () => <span style={{ fontWeight: 'bold' }}>Section</span>;
const sectionRender = (props) => (
  <span className="section" style={{ fontStyle: 'italic' }}>{props.children}</span>
);

const infoIcon = () => <span style={{ fontWeight: 'bold' }}>Info</span>;
const infoRender = (props) => (
  <span className="info" style={{ fontWeight: '100', fontStyle: 'italic' }}>{props.children}</span>
);

const highlightIcon = () => <span style={{ fontWeight: 'bold' }}>H</span>;
const highlightRender = (props) => (
  <span className="highlight font-extralight" style={{ fontWeight: '200', fontStyle: 'italic' }}>{props.children}</span>
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
      name: 'songTime',
      title: 'Song time in seconds',
      type: 'number',
      description: 'Add the song duration in minutes (decimal format), like 2.5',
      validation: Rule => Rule.min(1).max(20).precision(2)
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
              {
                title: 'Chords',
                value: 'chords',
                blockEditor: {
                  icon: chordsIcon,
                  render: chordsRender,
                },
              },
              {
                title: 'Section',
                value: 'section',
                blockEditor: {
                  icon: sectionIcon,
                  render: sectionRender,
                },
              },
              {
                title: 'Info',
                value: 'info',
                blockEditor: {
                  icon: infoIcon,
                  render: infoRender,
                },
              },
              {
                title: 'Highlight',
                value: 'highlight',
                blockEditor: {
                  icon: highlightIcon,
                  render: highlightRender,
                }
              },
            ],
          },
        },
      ],
    },
    {
      title: 'Patch',
      name: 'songpatch',
      type: 'string',
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'string',
    },
  ],
};
