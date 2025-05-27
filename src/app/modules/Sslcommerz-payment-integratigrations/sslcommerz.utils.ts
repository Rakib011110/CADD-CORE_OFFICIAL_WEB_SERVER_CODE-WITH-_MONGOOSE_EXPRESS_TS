// sslcommerz.utils.ts
import SSLCommerzPayment, { SslCommerzPayment } from 'sslcommerz';

const store_id = process.env.SSLCOMMERZ_STORE_ID!;
const store_passwd = process.env.SSLCOMMERZ_STORE_PASSWORD!;
const isLive = false; // true for production

export const initiateSSLCommerzPayment = async ({
  amount,
  transactionId,
  successUrl,
  failUrl,
  cancelUrl,
  customer,
}: {
  amount: number;
  transactionId: string;
  successUrl: string;
  failUrl: string;
  cancelUrl: string;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
}) => {
  const data = {
    total_amount: amount,
    currency: 'BDT',
    tran_id: transactionId,
    success_url: successUrl,
    fail_url: failUrl,
    cancel_url: cancelUrl,
    cus_name: customer.name,
    cus_email: customer.email,
    cus_add1: customer.address,
        ipn_url: `${process.env.SSL_PAYMENT_IPN_URL}/${transactionId}`, // IPN URL সংশোধন


    cus_phone: customer.phone,
    shipping_method: 'NO',
    cus_timezone: '+6', 
    product_name: 'Course Purchase',
    product_category: 'Education',
    product_profile: 'general',
  };

  const sslcz = new SslCommerzPayment(store_id, store_passwd, isLive);
  return await sslcz.init(data);
};