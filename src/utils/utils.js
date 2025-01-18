import axios from "axios";

export const cloudImageUpload = async ({ file, cloudName, preset }) => {
  const form__data = new FormData();
  form__data.append("file", file);
  form__data.append("upload_preset", preset);
  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    form__data
  );
  return response.data;
};

/**
 * get time ago
 * @param {*} postDate
 * @returns
 */
export const formatPostTime = (timestamp) => {
  const currentTime = new Date();
  const eventTime = new Date(timestamp);
  const timeDifference = currentTime - eventTime;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    return eventTime.toLocaleDateString(); // If more than 7 days, return full date
  } else if (days > 0) {
    return days === 1 ? "1 d" : days + " d";
  } else if (hours > 0) {
    return hours === 1 ? "1 h" : hours + " h";
  } else if (minutes > 0) {
    return minutes === 1 ? "1 m" : minutes + " m";
  } else {
    return "Just now";
  }
};

/**
 * id generator
 * @returns
 */

export const createId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
    return ((Math.random() * 16) | 0).toString(16);
  });
  const processId = (Math.floor(Math.random() * 1000) % 1000)
    .toString(16)
    .padStart(3, "0");
  const counter = ((Math.random() * 16777216) | 0)
    .toString(16)
    .padStart(6, "0");

  return timestamp + machineId + processId + counter;
};
