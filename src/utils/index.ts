import { format } from "date-fns";

export const getDefaultProfileImg = (username: string) => `https://avatars.dicebear.com/api/initials/${encodeURIComponent(username)}.svg`;

export const sleep = (t: number) => new Promise((r) => setTimeout(r, t));

export const formatDate = (date = new Date(), formatVal = "yyyy-MM-dd") => format(date, formatVal);
