import React from 'react';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
//TODO: Add Publisable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK)
const Payment = () => {
      return (
            <div>
                  <SectionTitle subHeading="Payment" heading="please pay to eat"></SectionTitle>
                  <div>
                        <Elements stripe={stripePromise}>
                              <CheckOutForm></CheckOutForm>
                        </Elements>
                  </div>
            </div>
      );
};

export default Payment;