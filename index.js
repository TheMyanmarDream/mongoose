const connectDB = require('./config/database');
const User = require('./models/User');

// Connect to MongoDB
connectDB();

// Example usage
async function createUser() {
  try {
    const newUser = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'hashedpassword123'
    });
    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser();
