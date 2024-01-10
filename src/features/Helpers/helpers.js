import moment from "moment";

export const time = (utc) => {
    const dateTime = new Date(utc * 1000);
    return moment(dateTime).fromNow();
}

export const addK = (num) => {
    return Math.abs(num) > 999 ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k' : Math.sign(num) * Math.abs(num);
  };
  