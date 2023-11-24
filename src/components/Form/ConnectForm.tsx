import { useFormContext } from 'react-hook-form';

import { IConnectForm } from './types/FormTypes';

const ConnectForm = ({ children }: IConnectForm) => {
  const methods = useFormContext();

  return children({ ...methods });
};

export default ConnectForm;
