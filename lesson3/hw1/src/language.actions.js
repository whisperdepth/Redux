export const SET_LANGUAGE = "LANGUAGE/SET_LANGUAGE";

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};
