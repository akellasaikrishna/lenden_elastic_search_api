"use strict";
const { Client } = require("@elastic/elasticsearch");
const client = new Client({ node: "http://localhost:9200" });
async function run() {
  await client.index(
    {
      index: "lendenbot",
      body: {
        question: "I am unable to accept my loan agreement",
        answer:
          "We request you to check if your GPS is on as it requires access to your location and if you still face any error please mail us the screenshot of the error on cs@lendenclub.com."
      }
    },
    function(err, resp, status) {
      console.log(resp);
    }
  );

  await client.index({
    index: "lendenbot",
    body: {
      question: "Can I apply for 2 loans at the same time with Lendenclub?",
      answer:
        "You can avail only one loan at a time. If you wish to apply for another loan, you will have to make sure that your active loan is fully paid and closed in the system. Once it is closed, you will get the option in the app itself to raise a new loan request."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question:
        "I canceled my loan a few months back, now I am unable to apply for the new loan?",
      answer:
        "If your loan was canceled on your request, you will not be able to re-apply within 3 months from the cancellation date. If you wish to re-apply before 3 months of cancellation, you will have to drop an email on cs@lendenclub.com with your latest 90 days bank statement (Salary Account bank statement). Please note that you will have to bear the verification fee of Rs. 199 again for your new loan request. "
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question:
        "Can I get a higher loan amount as an existing InstaMoney customer?",
      answer:
        "You can apply for a higher amount after the closure of your existing loan. You can check eligibility for a higher amount from the link https://app.lendenclub.com/loan-eligibility If you are eligible then we will arrange a call from our concern team for the further process."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How to upload NACH form?",
      answer:
        "please check here https://lendenclub.zendesk.com/hc/en-us/articles/360030613332-How-to-upload-NACH-form-"
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How do I check my loan eligibility?",
      answer:
        "To check your InstaMoney loan eligibility, you can either download the mobile app from Play Store or visit our website www.lendenclub.com "
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "I had entered incorrect bank details, what now?",
      answer:
        "If you have entered incorrect bank details while applying for the loan, please email us the details immediately to loan@lendenclub.com. It is important to note that you must enter the bank details of your salary account. Incorrect bank details may lead to loan disbursal to a wrong bank account and it is the sole responsibility of the applicant to ensure they enter correct bank details. Bank details cannot be changed once the amount is disbursed and before the existing loan is closed. You must provide proof of your salary bank account in order to change your bank details."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question:
        "What are the minimum credit requirements to get InstaMoney loan?",
      answer:
        "To get an InstaMoney loan, you must meet the following eligibility criteria:Age should be between 21 to 45.Monthly in-hand salary should be more than Rs. 12,000.You should receive salary in full and not in part payments.You must be receiving your salary via Bank Transfer or Cheque.InstaMoney is only for salaried individuals.You must have a credit score of 650 or above.You should not have any delay/Default/Settlements in your past loans.Please note that InstaMoney is only operational in 9 Indian cities at the moment, which includes Mumbai, Pune, Bangalore, Chennai, Ahmedabad, Coimbatore, Cochin, Hyderabad, Bhubaneswar."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What if my app is not responding?",
      answer:
        "This might happen if your device is unsupported or if have an old version of the app. Try updating the app to the latest version. If you have the latest version and if you are still facing the issue, close and restart the app. That should solve the problem.If you still have no luck, email us at loan@lendenclub.com with the error screenshot."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How do I apply for an InstaMoney loan?",
      answer:
        'To apply for an Instamoney loan, you need to download the Instamoney app from the play store and install it on your phone.If you are applying for the first time, you need to click on "Apply for a new loan" in the app. Initially, you will be asked few questions in order to check your loan eligibility. Please ensure you provide correct details here as this will further take you to the next step of application.Once this is done, you will get the details of how much loan you are eligible for. If you wish to confirm your request for the eligible loan amount, you may proceed with sign up.On signing up successfully, you may have to fill some more details and upload the documents to get your profile verified by the credit team.'
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "Why should I pay application fee?",
      answer:
        "While applying for an InstaMoney loan, we charge a small fee of Rs. 199/- to verify your credit details. This fee is adjusted in the cost incurred to fetch your credit report through sources.Please note that this fee does not guarantee any approval for your loan. It is only charged for the verification purpose and it has to be paid each time you apply for a loan.Please ensure to enter correct and authentic details while checking your eligibility for the loan to avoid any further disappointments.Registration fee, in any circumstances, is non-refundable. "
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "While applying, it says PAN / Aadhaar already exist",
      answer:
        "If you come across an error that says your PAN, Aadhaar already exists, chances are you have already registered with us for a loan. To solve the error either login using your earlier email ID and password or email us from your registered email ID with your PAN/Aadhaar Number, PAN/Aadhaar documents to loan@lendenclub.com."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "Unable to upload documents",
      answer:
        "If you are facing issue while uploading documents, please close and restart the app. Try uploading the documents again. Make sure to click on ‘Upload Now’, once you have selected the document. Then click on ‘Continue’ or ‘Submit’ to go to the next screen.If it still doesn’t work, please email us with the error screenshot on loan@lendenclub.com."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "Where will be my loan amount transferred",
      answer:
        "The loan amount is credited to your salary bank account which you have provided during your loan application submission.As of now, it is not allowed to have the amount transferred to any other bank account. "
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question:
        "My loan is approved however, I am not able to login to dashboard",
      answer:
        "You can only login to the dashboard once the amount is disbursed to your bank account."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "I received approval letter but the amount is not yet credited",
      answer:
        "If you have received the approval email but the amount is not credited to your account, please note that it usually takes 3-4 hours for the amount to get credited in your account after approval.Also, disbursements only happen between Monday - Friday 11 AM to 5 PM. No disbursements are processed on Saturday/Sunday and on holidays due to banking limitations. If your request is approved after these hours, your amount will be credited on the next working day."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What is the processing fee & gap interest?",
      answer:
        "The processing fee for InstaMoney loan depends on the loan amount.Loan amount Rs. 5,000 - Rs. 200 + GST.Loan amount Rs. 6,000 - Rs. 7,000 - Rs. 300 + GST.Loan amount Rs. 8,000 - Rs. 10,000 - Rs. 400 + GST"
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How do I check my loan status?",
      answer:
        "When you apply for a loan, the application goes for credit verification after you have made the application fee payment. It takes us less than 2 hours to validate your profile and approve it if all documents are proper.To learn the current status of your loan application, keep following your SMS and Email from us. We usually email / SMS you with the status of your loan.If you do not receive any communication from us even after 48 hours of your application submission, please email us at loan@lendenclub.com."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How do I change my profile data?",
      answer:
        "You may always go back in the app while applying for the loan to change your profile details.Once the loan request is submitted, it is not allowed to the user to change any profile data."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How long does it take to get my loan approved?",
      answer:
        "For an InstaMoney loan, if all documents uploaded by you is correct, your approval is done within 2 Hours. It’s that fast.However, in case you have uploaded documents where we fail to verify your salary or address, or if the NACH is not in proper format, the approval might get delayed."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What if my loan is rejected?",
      answer:
        "Loan requests are usually rejected if the details provided by you fails to meet our credit norms. If your loan is rejected, you will be notified via SMS and Email with the reason behind the rejection. You may reapply after 3 months, if the reason of your rejection is resolved."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How do I cancel my loan application?",
      answer:
        "You may cancel your loan application until it is approved by sending us an email to loan@lendenclub.com. However, once the loan is approved, cancellations are not allowed as the disbursement process has already begun. Cancellation charges of Rs.500/- applicable"
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question:
        "When can I reapply for a loan after closing an earlier loan with LenDenClub?",
      answer:
        "Once your existing loan is closed you will be able to re apply for new loan however if you have done the prepayment or made the payment before your due date then you have to wait for 24 - 48 hours to apply for a new loan."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "Can I close my loan partially?",
      answer:
        "We currently do not have the option of Partial closure however you can always opt for Pre-closure/Foreclosure of your loan."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "Will my EMI auto debit or do I need to pay manually?",
      answer:
        "If your NACH mandate is approved, the EMI will be auto-debited from your bank account on the due date. It is required to maintain sufficient balance 24 hours in advance in order to have a successful debit of the EMI. If your NACH mandate is approved and you still wish to manually transfer the amount, pay at least 72 hours in advance and share the UTR ID of the transaction to pay@lendenclub.com."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What is my loan EMI amount?",
      answer:
        "All loan related details are shown to you during the loan application process. If you have missed the details, you may login to your app and find all loan repayment related details including EMI amount on the Dashboard."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What is my loan EMI amount?",
      answer:
        "All loan related details are shown to you during the loan application process. If you have missed the details, you may login to your app and find all loan repayment related details including EMI amount on the Dashboard."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What is my repayment date?",
      answer:
        "Repayment date is always two days ahead of your salary date to make it easier for your repay. To know the exact EMI date, please login to the app or check your email for repayment schedule."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "How do I pay my loan EMI?",
      answer:
        "If your ECS Mandate is approved, you do not have to manually pay your loan EMI. The amount will be auto-debited from your bank account. However, if your ECS Mandate is not approved, you may transfer the amount to our LenDenClub"
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "Is there any prepayment charges?",
      answer:
        "No. There are no prepayment charges. You may prepay your loan, by paying full due amount at any time. Follow this article for payment related details."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question: "What if I delay in loan repayment?",
      answer:
        "Delaying in your loan repayment has negative effect in your overall credit history. It affects your Credit score which might cause problems in future loans. There is also a penalty of Rs. 250/- per week if you delay in repayments. 2% penal charges is applicable if delay is beyond a month."
    }
  });
  await client.index({
    index: "lendenbot",
    refresh: true,
    body: {
      question:
        "Is my loan data reported to credit bureau like CIBIL, Experian?",
      answer:
        "Yes. We report the loan details to Experian, CIBIL and Equifax. If you have a good repayment history, it helps you increase your Credit score."
    }
  });
}

run().catch(console.log);
