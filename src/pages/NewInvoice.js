import React from "react";
import InvoiceForm from "../components/InvoiceForm";

export default function NewInvoice() {
  return (
    <div>
      <p>Submit a CSV file OR manually enter invoice information.</p>
      <InvoiceForm />
    </div>
  );
}
