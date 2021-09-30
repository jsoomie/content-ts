export const dateStringToDate = (dateString: string): Date => {
  //  28/10/2018
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  const DAY = dateParts[0];
  const MONTH = dateParts[1] - 1;
  const YEAR = dateParts[2];

  return new Date(YEAR, MONTH, DAY);
};
