type AlertDialogIds = {
  titleId: string;
  descriptionId: string;
};

export const getAlertDialogIds = (baseId: string): AlertDialogIds => {
  return {
    titleId: `${baseId}-title`,
    descriptionId: `${baseId}-description`,
  };
};
