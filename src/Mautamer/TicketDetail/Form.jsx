import React from 'react'

export const FormTicketD = () => {
    return (
        <form>  
            <h2>Ticket Information</h2>
            <label>Ticket Date:</label>
            <input type="date" name="ticketDateInput" />
            <label>PNR:</label>
            <input type="text" name="pnrInput" />
            <label>Ticket:</label>
            <input type="text" name="ticketInput" />
            <h2>Airline Payable</h2>

            <label>Basic Fare:</label>
            <input type="number" name="basicFareInput" />
            <label>Taxes Amount:</label>
            <input type="number" name="taxesAmountInput" />
            <label>Air Com Amount:</label>
            <input type="number" name="airComAmountInput" />
            <label>WHAir Percentage:</label>
            <input type="number" name="whAirPercentageInput" />
            <label>WHAir Amount:</label>
            <input type="number" name="whAirAmountInput" />
            <label>Airline Payable Ticket:</label>
            <input type="number" name="airlinePayableTicketInput" />
            <h2>Purchase Form</h2>

            <label>Service Provider:</label>
            <select name="serviceProviderInput">
                {/* Options for Service Provider go here */}
            </select>
            <label>Airline Cost:</label>
            <select name="airlineCostInput">
                {/* Options for Airline Cost go here */}
            </select>
            <label>Exchange Rate:</label>
            <input type="number" name="exchangeRateInput" />
            <h2>Customer Recievable</h2>

            <label>Customer Received Ticket:</label>
            <input type="number" name="customerReceivedTicketInput" />
        </form>
    )
}
