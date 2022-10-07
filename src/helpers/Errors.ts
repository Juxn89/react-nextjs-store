interface IError {
  [key: string]: string;
}

const Errors: IError = {
  '401': 'Not authorized',
};

export const getErrorMessage = (key: string): string => {
  return Errors[key] ?? 'Not defined';
};

export default Errors;
