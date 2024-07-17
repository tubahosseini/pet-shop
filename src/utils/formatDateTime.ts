export const formatDateTime = (dateTime: any) => {
  const formattedDate = new Date(dateTime)
    .toLocaleString("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .replace(/,/g, " ");
  return formattedDate;
};
