import axios, { AxiosError } from 'axios';
import { EmailConfirmationData, EmailResponse } from '@/types/email';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const emailService = {
  sendConfirmation: async (data: EmailConfirmationData): Promise<EmailResponse> => {
    try {
      const response = await axios.post<EmailResponse>(
        `${API_BASE_URL}/api/send-confirmation`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000, // 10 segundos
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<EmailResponse>;
        return {
          success: false,
          message: axiosError.response?.data?.message || 'Error al enviar el email',
        };
      }

      return {
        success: false,
        message: 'Error desconocido al enviar el email',
      };
    }
  },
};