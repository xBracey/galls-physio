import { apiRequest } from '../api';
import { IRootState } from '../reducers';
import { IAPIResponse } from '../types';

export const fetchContact = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/contact");