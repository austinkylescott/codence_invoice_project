import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border: 2px solid red;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.5rem;
`;

const StyledLabel = styled.label`
  font-size: 1.2rem;
`;

const StyledField = styled(Field)`
  height: 2rem;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  height: 2rem;
  width: 4rem;
  margin: 0 auto;
  font-size: 1rem;
  background-color: ${(props) => props.theme.buttonColor};
`;

export default function InvoiceForm() {
  return (
    <Formik
      initialValues={{
        date: new Date().toLocaleDateString(),
        invoiceNumber: "",
        PONumber: "",
        shippingAddress: "",
        billingAddress: "",
        shippingCost: "",
        salesTax: "",
        discount: "",
        total: "",
        orderNotes: "",
        file: "",
      }}
      validationSchema={Yup.object({
        date: Yup.date().required("Date is required."),
        invoiceNumber: Yup.string().required("Invoice number is required"),
        PONumber: Yup.string().required("PO Number is required"),
        shippingAddress: Yup.string().required("Shipping address is required."),
        billingAddress: Yup.string().required("Billing address is required."),
        shippingCost: Yup.number().required("Shipping cost is required."),
        salesTax: Yup.number().required("Sales tax amount is required."),
        discount: Yup.number().required("Discount amount is required."),
        total: Yup.number().required("Total is required."),
        orderNotes: Yup.string(),
        file: Yup.string(),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <StyledForm>
        <FormGroup>
          <StyledLabel htmlFor="date">Date</StyledLabel>
          <StyledField name="date" type="text" />
        </FormGroup>
        <ErrorMessage name="date" />

        <FormGroup>
          <StyledLabel htmlFor="invoiceNumber">Invoice Number</StyledLabel>
          <StyledField name="invoiceNumber" type="text" />
        </FormGroup>
        <ErrorMessage name="invoiceNumber" />

        <FormGroup>
          <StyledLabel htmlFor="PONumber">PO Number</StyledLabel>
          <StyledField name="PONumber" type="text" />
        </FormGroup>
        <ErrorMessage name="PONumber" />

        <FormGroup>
          <StyledLabel htmlFor="billingAddress">Billing Address</StyledLabel>
          <StyledField name="billingAddress" type="text" />
        </FormGroup>
        <ErrorMessage name="billingAddress" />

        <FormGroup>
          <StyledLabel htmlFor="shippingAddress">Shipping Address</StyledLabel>
          <StyledField name="shippingAddress" type="text" />
        </FormGroup>
        <ErrorMessage name="shippingAddress" />

        <FormGroup>
          <StyledLabel htmlFor="shippingCost">Shipping Cost</StyledLabel>
          <StyledField name="shippingCost" type="text" />
        </FormGroup>
        <ErrorMessage name="shippingCost" />

        <FormGroup>
          <StyledLabel htmlFor="salesTax">Sales Tax</StyledLabel>
          <StyledField name="salesTax" type="text" />
        </FormGroup>
        <ErrorMessage name="salesTax" />

        <FormGroup>
          <StyledLabel htmlFor="discount">Discount</StyledLabel>
          <StyledField name="discount" type="text" />
        </FormGroup>
        <ErrorMessage name="discount" />

        <FormGroup>
          <StyledLabel htmlFor="total">Invoice Total</StyledLabel>
          <StyledField name="total" type="text" />
        </FormGroup>
        <ErrorMessage name="total" />

        <FormGroup>
          <StyledLabel htmlFor="orderNotes">Order Notes</StyledLabel>
          <StyledField name="orderNotes" type="text" rows="3" />
        </FormGroup>
        <ErrorMessage name="orderNotes" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </StyledForm>
    </Formik>
  );
}
