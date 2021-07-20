import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(value));
}

export default function VerseInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>{type.title}</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

VerseInput.focus = function () {
  this._inputElement.focus();
};
