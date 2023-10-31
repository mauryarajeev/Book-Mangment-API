const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Set up database connection
mongoose.connect('mongodb+srv://rajeevmaurya511:admin@cluster0.esxso4w.mongodb.net/Contact_management_db?retryWrites=true&w=majority',
 { 
    useNewUrlParser: true, 
    useUnifiedTopology: true    
 })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database: ', error);
  });

// Body parser middleware
app.use(express.json());

// Use routes
app.use('/api', bookRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Not found middleware
app.use((req, res) => {
  res.status(404).send('Not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
