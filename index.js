module.exports = booleanJSONToCommonForm

function booleanJSONToCommonForm(argument) {
  if (Array.isArray(argument)) {
    return { content: argument } }
  else if ('and' in argument) {
    return {
      content: [ 'all of the following are true:' ]
        .concat(
          argument.and.map(function(conjunct) {
            return {
              form: booleanJSONToCommonForm(conjunct) } })) } }
  else if ('or' in argument) {
    return {
      content: [ 'any of the following is true:' ]
        .concat(
          argument.or.map(function(disjunct) {
            return {
              form: booleanJSONToCommonForm(disjunct) } })) } }
  else if ('not' in argument) {
    return {
      content: [ 'it is not the case that ' ]
        .concat(booleanJSONToCommonForm(argument.not).content) } }
  else {
    throw new Error('Invalid input') } }
