export const reduceSearchParams = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  return Object.entries(searchParams).reduce((acc, [key, value], index) => {
    if (value !== undefined && value !== "") {
      const prefix = index === 0 ? "?" : "&";
      return `${acc}${prefix}${key}=${value}`;
    }
    return acc;
  }, "");
};
