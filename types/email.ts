export interface EmailConfirmationData {
  to: string;
  userName: string;
  confirmationUrl: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  emailId?: string;
}