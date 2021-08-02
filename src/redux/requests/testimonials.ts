import { apiRequest } from '../api';
import { IRootState } from '../reducers';
import { IAPIResponse } from '../types';

export const fetchTestimonials = async (state: IRootState): Promise<IAPIResponse> =>
  apiRequest("/testimonials");