import { useMMKVString } from 'react-native-mmkv';
import { MobilyFlowService } from './mobilyflow-service';
import { MobilyEnvironment } from 'mobilyflow-react-native-sdk';

export const useMobilyflowParams = () => {
  const storage = MobilyFlowService['storage'];

  const [customerId] = useMMKVString('customerId', storage);
  const [environment] = useMMKVString('environment', storage);
  const [apiUrl] = useMMKVString('apiURL', storage);

  return {
    customerId,
    apiUrl,
    environment: (environment ?? MobilyEnvironment.DEVELOPMENT) as MobilyEnvironment,
  };
};
