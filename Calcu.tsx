import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Calculadora() {
  const [input, setInput] = useState('');

  const botones = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'AC'];

  const handleClick = (valor) => {
    if (valor === 'AC') {
      setInput('');
    } else if (valor === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + valor);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 4, width: 300 }}>
        <Typography variant="h6" align="center" gutterBottom>
          Calculadora
        </Typography>

        <TextField
          fullWidth
          value={input}
          sx={{ mb: 2 }}
          inputProps={{ readOnly: true }}
        />

        <Grid container spacing={1}>
          {botones.map((label, index) => (
            <Grid item xs={4} key={index}>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleClick(label)}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
