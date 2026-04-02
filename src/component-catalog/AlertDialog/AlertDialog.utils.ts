export const getAlertDialogIds = (baseId: string) => {
  return {
    titleId: `${baseId}-title`,
    descriptionId: `${baseId}-description`,
  };
};