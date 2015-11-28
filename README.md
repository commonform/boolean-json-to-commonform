```javascript
var assert = require('assert')
var toCF = require('boolean-json-to-commonform')

assert.deepEqual(
  toCF(
    [ { use: 'Purchaser' }, ' is a natural person' ]),
  { content: [
      { use: 'Purchaser' },
      ' is a natural person' ] })

assert.deepEqual(
  toCF(
    { and: [
        [ { use: 'Purchaser' }, ' is a natural person' ],
        [ { use: 'Purchaser' }, ' pays in cash' ] ] }),
  { content: [
      'all of the following are true:',
      { form: {
          content: [ { use: 'Purchaser' }, ' is a natural person' ] } },
      { form: {
          content: [ { use: 'Purchaser' }, ' pays in cash' ] } } ] })

assert.deepEqual(
  toCF(
    { or: [
        [ { use: 'Purchaser' }, ' is a natural person' ],
        [ { use: 'Purchaser' }, ' pays in cash' ] ] }),
  { content: [
      'any of the following is true:',
      { form: {
          content: [ { use: 'Purchaser' }, ' is a natural person' ] } },
      { form: {
          content: [ { use: 'Purchaser' }, ' pays in cash' ] } } ] })

assert.deepEqual(
  toCF(
    { or: [
        [ { use: 'Purchaser' }, ' is a natural person' ],
        { not: [ { use: 'Purchaser' }, ' pays in cash' ] } ] }),
  { content: [
      'any of the following is true:',
      { form: {
          content: [ { use: 'Purchaser' }, ' is a natural person' ] } },
      { form: {
          content: [
            'it is not the case that ',
            { use: 'Purchaser' }, ' pays in cash' ] } } ] })
```
