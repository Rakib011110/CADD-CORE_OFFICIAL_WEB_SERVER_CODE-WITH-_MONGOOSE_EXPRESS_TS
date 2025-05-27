export const paymentSuccessTemplate = (
  userName: string,
  courseTitle: string,
  amount: number,
  transactionId: string
) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
        .details { margin: 15px 0; }
        .detail-item { margin-bottom: 10px; }
        .button { 
            display: inline-block; padding: 10px 20px; background-color: #4CAF50; 
            color: white; text-decoration: none; border-radius: 5px; margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎉 Payment Successful!</h2>
        </div>
        <div class="content">
            <p>Dear ${userName},</p>
            <p>Thank you for purchasing <strong>${courseTitle}</strong> with CADD CORE.</p>
            
            <div class="details">
                <div class="detail-item"><strong>Amount:</strong> ৳${amount.toFixed(2)}</div>
                <div class="detail-item"><strong>Transaction ID:</strong> ${transactionId}</div>
                <div class="detail-item"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
            </div>
            
            <p>You can now access your course materials in your dashboard.</p>
            <a href="${process.env.CLIENT_URL}/dashboard" class="button">Go to Dashboard</a>
        </div>
        <div class="footer">
            <p>If you have any questions, please contact our support team.</p>
            <p>📞 CADD CORE Helpline: 01313-123456</p>
            <p>© ${new Date().getFullYear()} CADD CORE. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export const paymentFailedTemplate = (
  userName: string,
  amount: number,
  transactionId: string
) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f44336; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .footer { margin-top: 20px; font-size: 12px; text-align: center; color: #777; }
        .details { margin: 15px 0; }
        .detail-item { margin-bottom: 10px; }
        .button { 
            display: inline-block; padding: 10px 20px; background-color: #f44336; 
            color: white; text-decoration: none; border-radius: 5px; margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>❌ Payment Failed</h2>
        </div>
        <div class="content">
            <p>Dear ${userName},</p>
            <p>We regret to inform you that your payment was not successful.</p>
            
            <div class="details">
                <div class="detail-item"><strong>Amount:</strong> ৳${amount.toFixed(2)}</div>
                <div class="detail-item"><strong>Transaction ID:</strong> ${transactionId}</div>
                <div class="detail-item"><strong>Date:</strong> ${new Date().toLocaleDateString()}</div>
            </div>
            
            <p>Please try again or contact your bank if the amount was deducted from your account.</p>
            <a href="${process.env.CLIENT_URL}/payment" class="button">Try Payment Again</a>
        </div>
        <div class="footer">
            <p>If you need assistance, please contact our support team.</p>
            <p>📞 CADD CORE Helpline: 01313-123456</p>
            <p>© ${new Date().getFullYear()} CADD CORE. All rights reserved.</p>
        </div>
    </div>
</html>
`;