import { XCircleIcon } from '@heroicons/react/20/solid';

interface IAlertProps {
    alert: IAlertOptions
    handleClose: () => void
}

interface IAlertOptions {
    active: boolean,
    autoClose: boolean
    message: string,
}

const Alert = ({ alert, handleClose }: IAlertProps) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div x-data={ alert?.active } className="bg-indigo-100 p-5 w-full rounded mb-8">
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">{alert.message}</div>
            <button type="button">
              <XCircleIcon className="w-6 h-6 text-gray-600" onClick={handleClose} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;