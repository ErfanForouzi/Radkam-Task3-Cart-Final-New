export const saveToLocalStorage = <T>(key: string, value: T): void => {
  if (typeof window !== "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error, "error");
  }
};
