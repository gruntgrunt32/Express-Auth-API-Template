import jwt from 'jsonwebtoken';
import supabase from '../config/supabase.js';

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create user in Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: data.user.id, email: data.user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: data.user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Sign in with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { userId: data.user.id, email: data.user.email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: data.user
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};