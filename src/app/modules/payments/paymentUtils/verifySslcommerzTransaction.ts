import { SslCommerzPayment } from 'sslcommerz';

export const verifySslcommerzTransaction = async (valId: string) => {
  const sslcz = new SslCommerzPayment(
    process.env.SSLCOMMERZ_STORE_ID!,
    process.env.SSLCOMMERZ_STORE_PASSWORD!,
    false
  );

  try {
    const result = await sslcz.validate({ val_id: valId });
    return result;
  } catch (err) {
    console.error('Validation error:', err);
    return null;
  }
};
