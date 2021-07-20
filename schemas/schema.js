import song from './song';
import key from './key';
import timesignature from './timesignature';
import setlist from './setlist';
// import verse from './verse';
// import chorus from './chorus';

// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'bandChords',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([key, song, timesignature, setlist]),
});
