module.exports = function booleanJSONToCommonForm (argument) {
  if (Array.isArray(argument)) {
    return {content: argument}
  } else if ('and' in argument) {
    return {
      content: ['all of these are the case:']
      .concat(
        argument.and.map(function (conjunct) {
          return {form: booleanJSONToCommonForm(conjunct)}
        })
      )
    }
  } else if ('or' in argument) {
    return {
      content: ['any of these is the case:']
      .concat(
        argument.or.map(function (disjunct) {
          return {form: booleanJSONToCommonForm(disjunct)}
        })
      )
    }
  } else if ('not' in argument) {
    return {
      content: ['it is not the case that ']
      .concat(booleanJSONToCommonForm(argument.not).content)
    }
  } else {
    throw new Error('Invalid input')
  }
}
