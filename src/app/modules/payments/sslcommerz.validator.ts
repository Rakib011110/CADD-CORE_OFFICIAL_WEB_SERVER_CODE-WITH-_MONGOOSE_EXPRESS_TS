import  { SslCommerzPayment } from 'sslcommerz';

const store_id = process.env.SSLCOMMERZ_STORE_ID!;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD!;
const is_live = false; // true for production

export const validateSSLCommerzPayment = async (val_id: string) => {
  const sslcz = new SslCommerzPayment(store_id, store_passwd, is_live);
  
  const validationData = {
    val_id,
    format: 'json' // Request JSON response
  };

  try {
    const validationResponse = await sslcz.validate(validationData);
    
    // According to SSLCOMMERZ docs, status should be 'VALID'
    if (validationResponse.status !== 'VALID') {
      throw new Error(`Payment validation failed: ${validationResponse.status}`);
    }

    return {
      isValid: true,
      data: validationResponse,
      transactionId: validationResponse.tran_id,
      amount: validationResponse.amount
    };
  } catch (error) {
    console.error('SSLCOMMERZ Validation Error:', error);
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation failed'
    };
  }
};