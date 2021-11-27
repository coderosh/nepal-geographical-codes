const capitalize = (str: string) =>
  str
    .trim()
    .toLowerCase()
    .replace(/\b[\w]/gm, (c) => c.toUpperCase())

export { capitalize }
