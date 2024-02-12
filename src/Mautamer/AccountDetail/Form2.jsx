import React from 'react'

export const FormADetail = () => {
    return (
        <form>
            <h2>Amount</h2>

            <label>Approval Amount:</label>
            <input type="number" name="approvalAmountInput" />
            <label>Hotel Amount:</label>
            <input type="number" name="hotelAmountInput" />
            <label>Transport Amount:</label>
            <input type="number" name="transportAmountInput" />
            <label>Service Amount:</label>
            <input type="number" name="serviceAmountInput" />
            <label>Mutamar Adjustment:</label>
            <input type="number" name="mutamarAdjustmentInput" />
            <h2>Cost</h2>
            <label>Approval Cost:</label>
            <input type="number" name="approvalCostInput" />
            <label>Hotel Cost:</label>
            <input type="number" name="hotelCostInput" />
            <label>Transport Cost:</label>
            <input type="number" name="transportCostInput" />
            <label>Service Cost:</label>
            <input type="number" name="serviceCostInput" />
        </form>
    )
}
