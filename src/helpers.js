export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function searchFields(entry, fields, query) {
  for (var i = 0; i < fields.length; i++) {
    let field = entry[fields[i]];
    if (field && field.toLowerCase().indexOf(query) !== -1) return true;
  }
  return false;
}
