import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { marked } from 'marked';
import { readFile } from 'fs/promises';
import authRoutes from './routes/auth.js';
import { authenticateToken } from './middleware/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Documentation route
app.get('/docs', async (req, res) => {
  try {
    const markdown = await readFile('API.md', 'utf-8');
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>API Documentation</title>
          <meta charset="utf-8">
          <style>
            body {
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              font-family: system-ui, -apple-system, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            pre {
              background: #f6f8fa;
              padding: 16px;
              border-radius: 6px;
              overflow-x: auto;
            }
            code {
              font-family: monospace;
              background: #f6f8fa;
              padding: 2px 4px;
              border-radius: 3px;
            }
            h1, h2, h3 {
              border-bottom: 1px solid #eaecef;
              padding-bottom: 0.3em;
            }
          </style>
        </head>
        <body>
          ${marked(markdown)}
        </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load documentation' });
  }
});

// Public routes
app.use('/auth', authRoutes);

// Protected route example
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});