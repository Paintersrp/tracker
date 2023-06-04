type ErrorType = string;
type ErrorsType = ErrorType[];

type NestedErrorsType = {
  [key: string]: ErrorsType;
};

type SetErrorsType = React.Dispatch<
  React.SetStateAction<ErrorsType | NestedErrorsType>
>;

const handleClearErrors = (
  index: number,
  errors: ErrorsType,
  setErrors: SetErrorsType
): void => {
  const updatedErrors: ErrorsType = [...errors];
  updatedErrors.splice(index, 1);
  setErrors(updatedErrors);
};

const handleClearNestedErrors = (
  index: number,
  setErrors: SetErrorsType,
  nestedName: string
): void => {
  setErrors((prevErrors: ErrorsType | NestedErrorsType) => {
    const updatedErrors: any = { ...prevErrors };
    const sectionErrors: ErrorsType = [...prevErrors[nestedName]];
    sectionErrors.splice(index, 1);
    updatedErrors[nestedName] = sectionErrors;
    return updatedErrors;
  });
};

export { handleClearErrors, handleClearNestedErrors };
