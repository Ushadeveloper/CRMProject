import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const ADForm = () => {

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <div className="card card-custom card-flush">
            <div className="card-header">
                <h3 className="card-title">Mutamar</h3>

            </div>
            <div className="card-body py-5">
                <div className='row '>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Title" variant="filled" className='w-100' />
                        </Box>
                    </div>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Passport No" variant="filled" className='w-100' />
                        </Box>
                    </div>
                </div>
                <div className='row '>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="First Name" variant="filled" className='w-100' />
                        </Box>
                    </div>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Family Name" variant="filled" className='w-100' />
                        </Box>
                    </div>
                </div>
                <div className='row '>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Mutamer Name" variant="filled" className='w-100' />
                        </Box>
                    </div>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Please select your Gender"
                                defaultValue="Gender"
                                helperText="Please select your Gender"
                                variant="filled"
                                className='w-100'
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Box>

                    </div>
                </div>
                <div className='row '>
                    <div className="col-md-6">
                  

                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                             <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DatePicker label="DOB" className='w-100' variant="filled" />

                                <DemoContainer components={['DatePicker']}>
                                </DemoContainer>
                            </LocalizationProvider>

                        </Box>
                    </div>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Age" variant="filled" className='w-100' />
                        </Box>
                    </div>
                </div>
                
                <div className='row '>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField

                                id="filled-select-currency"
                                select
                                label="Select"
                                defaultValue="PAX"
                                helperText="Please select your PAX"
                                variant="filled"
                                className='w-100'
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Box>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Family Head" />
                    </div>
                    <div className="col-md-6">
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField

                                id="filled-select-currency"
                                select
                                label="Select"
                                defaultValue="Relation"
                                helperText="Please select your Relation"
                                variant="filled"
                                className='w-100'
                            >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Box>
                    </div>
                </div>
                <div className='row '>
                    <div className="col-md-6">
                   
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                             <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DatePicker label="Issue" className='w-100' variant="filled" />

                                <DemoContainer components={['DatePicker']}>
                                </DemoContainer>
                            </LocalizationProvider>

                        </Box>
                    </div>
                    <div className="col-md-6">
                   
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                             <LocalizationProvider dateAdapter={AdapterDayjs}>
                             <DatePicker label="Expiry" className='w-100' variant="filled" />

                                <DemoContainer components={['DatePicker']}>
                                </DemoContainer>
                            </LocalizationProvider>

                        </Box>
                    </div>
                </div>
                <div className='row '>
                    <div className="col-md-6">
                    <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                             <FormControlLabel control={<Checkbox defaultChecked />} label="PAX Locked" />
                             <FormControlLabel control={<Checkbox defaultChecked />} label="Duplicate" />
                             <FormControlLabel control={<Checkbox defaultChecked />} label="Bed" />
                        </Box>
                    </div>
                    <div className="col-md-6">
                    <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Mehram Name" variant="filled" className='w-100' />
                        </Box>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                Footer
            </div>
        </div>
    )
}

export default ADForm;