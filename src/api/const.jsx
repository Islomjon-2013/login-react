export const apiUrl = "https://api.alicoder.uz/api/";
const token = localStorage.getItem("token");
export const headerToken = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
