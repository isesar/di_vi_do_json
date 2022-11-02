export const recompose = (obj: any, str: string): any => {
  var parts = str.split(".");
  var newObj = obj[parts[0]];
  if (parts[1]) {
    parts.splice(0, 1);
    var newString = parts.join(".");
    return recompose(newObj, newString);
  }
  return newObj;
};

export const fetchJsons = async (filenames: string[]) => {
  return await Promise.all(
    filenames?.map(async (name: string) => {
      return await fetchOneFile(name);
    })
  );
};

export const fetchOneFile = async (name: string) => {
  try {
    const body = await import(`../../fixtures/${name}.json`);
    return body.default ? body.default : null;
  } catch (err) {
    console.log(err);
  }
};
