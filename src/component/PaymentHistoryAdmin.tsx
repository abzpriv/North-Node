'use client';

import React, { useEffect, useState } from 'react';
import NavbarAdmin from './NavbarAdmin';

interface Payment {
  id: number;
  userName: string;
  amount: string;
  paymentMethod: string;
  date: string;
  status: string;
}

const initialPaymentHistory: Payment[] = [
  {
    id: 1,
    userName: 'John Doe',
    amount: '$150',
    paymentMethod: 'Credit Card',
    date: '2024-09-01',
    status: 'Completed',
  },
  {
    id: 2,
    userName: 'Jane Smith',
    amount: '$250',
    paymentMethod: 'Credit Card',
    date: '2024-09-05',
    status: 'Pending',
  },
  {
    id: 3,
    userName: 'Alice Johnson',
    amount: '$200',
    paymentMethod: 'Credit Card',
    date: '2024-09-10',
    status: 'Completed',
  },
];

const PaymentHistoryAdmin: React.FC = () => {
  const [paymentHistory] = useState<Payment[]>(initialPaymentHistory);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen">
      <NavbarAdmin />
      <div className="container mx-auto mt-16 py-8 px-4">
        <h2 className="text-4xl font-bold text-customGold text-center mb-8">Payment History</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gold-300 rounded-lg shadow-md">
            <thead className="bg-customGold text-white">
              <tr>
                <th className="py-4 px-6 text-left font-semibold">User Name</th>
                <th className="py-4 px-6 text-left font-semibold">Amount</th>
                <th className="py-4 px-6 text-left font-semibold">Payment Method</th>
                <th className="py-4 px-6 text-left font-semibold">Date</th>
                <th className="py-4 px-6 text-left font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr
                  key={payment.id}
                  className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} transition-colors hover:bg-gray-200`}
                >
                  <td className="py-4 px-6 text-gray-800">{payment.userName}</td>
                  <td className="py-4 px-6 text-gray-800">{payment.amount}</td>
                  <td className="py-4 px-6 text-gray-800">{payment.paymentMethod}</td>
                  <td className="py-4 px-6 text-gray-800">{payment.date}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        payment.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PaymentHistoryAdmin;
