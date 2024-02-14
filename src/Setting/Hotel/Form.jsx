import React from 'react'

export const FormH = () => {
    return (
        <form action="#" method="post">
            {/* Hotel Section */}
            <h2>Hotel:</h2>
            <label htmlFor="hotelID">ID:</label>
            <input type="text" id="hotelID" name="hotelID" />
            <label htmlFor="hotelTitle">Title:</label>
            <input type="text" id="hotelTitle" name="hotelTitle" />
            <label htmlFor="displayTitle">Display Title:</label>
            <input type="text" id="displayTitle" name="displayTitle" />
            <label htmlFor="city">City:</label>
            <select id="city" name="city">
                {/* Add city options here */}
            </select>
            <label htmlFor="distance">Distance:</label>
            <input type="text" id="distance" name="distance" />
            <label htmlFor="category">Category:</label>
            <select id="category" name="category">
                {/* Add category options here */}
            </select>
            <label htmlFor="hotelType">Hotel Type:</label>
            <select id="hotelType" name="hotelType">
                {/* Add hotel type options here */}
            </select>
            <label htmlFor="hotelStar">Hotel Star:</label>
            <select id="hotelStar" name="hotelStar">
                {/* Add hotel star options here */}
            </select>
            <label htmlFor="effectiveDate">Effective Date:</label>
            <input type="date" id="effectiveDate" name="effectiveDate" />
            <label htmlFor="ceaseDate">Cease Date:</label>
            <input type="date" id="ceaseDate" name="ceaseDate" />
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
            <label htmlFor="hotelContact">Hotel Contact:</label>
            <input type="text" id="hotelContact" name="hotelContact" />
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" />
            <label htmlFor="restrictedID">Restricted ID:</label>
            <input type="text" id="restrictedID" name="restrictedID" />
            {/* Arabic Section */}
            <h2>Arabic:</h2>
            <label htmlFor="arabicTitle">Title:</label>
            <input type="text" id="arabicTitle" name="arabicTitle" />
            <label htmlFor="arabicAddress">Address:</label>
            <input type="text" id="arabicAddress" name="arabicAddress" />
            <label htmlFor="arabicContact">Contact:</label>
            <input type="text" id="arabicContact" name="arabicContact" />
            {/* Financial Detail Section */}
            <h2>Financial Detail:</h2>
            <label htmlFor="saleAccount">Sale Account:</label>
            <input type="text" id="saleAccount" name="saleAccount" />
            <label htmlFor="payableAccount">Payable Account:</label>
            <input type="text" id="payableAccount" name="payableAccount" />
            <label htmlFor="purchaseAccount">Purchase Account:</label>
            <input type="text" id="purchaseAccount" name="purchaseAccount" />
            <label htmlFor="expenseAccount">Expense Account:</label>
            <input type="text" id="expenseAccount" name="expenseAccount" />
            <label htmlFor="purchaseAccountKSA">Purchase Account KSA:</label>
            <input type="text" id="purchaseAccountKSA" name="purchaseAccountKSA" />
            <label htmlFor="payableAccountKSA">Payable Account KSA:</label>
            <input type="text" id="payableAccountKSA" name="payableAccountKSA" />
            <label htmlFor="serviceProvider">Service Provider:</label>
            <select id="serviceProvider" name="serviceProvider">
                {/* Add service provider options here */}
            </select>
            {/* Setting Section */}
            <h2>Setting:</h2>
            <label htmlFor="bookingAllowed">Booking Allowed:</label>
            <input type="checkbox" id="bookingAllowed" name="bookingAllowed" />
            <label htmlFor="active">Active:</label>
            <input type="checkbox" id="active" name="active" />
            <label htmlFor="fullRoomCharge">Full Room Charge:</label>
            <input type="checkbox" id="fullRoomCharge" name="fullRoomCharge" />
            <label htmlFor="voucherOnly">Voucher Only:</label>
            <input type="checkbox" id="voucherOnly" name="voucherOnly" />
            <label htmlFor="disableForCustomer">Disable For Customer:</label>
            <input type="checkbox" id="disableForCustomer" name="disableForCustomer" />
            <label htmlFor="zeroRate">Zero Rate:</label>
            <input type="checkbox" id="zeroRate" name="zeroRate" />
            <label htmlFor="showInCalculator">Show In Calculator:</label>
            <input type="checkbox" id="showInCalculator" name="showInCalculator" />
            <label htmlFor="showInReport">Show In Report:</label>
            <input type="checkbox" id="showInReport" name="showInReport" />
        </form>

    )
}
