import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export const formatDate = (date: string) => {
  return dayjs(date).format("Do MMM YYYY");
};
