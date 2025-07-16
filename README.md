# Daily News Audio Summary App

A modern React web application built with Next.js 15, React 19, Tailwind CSS v4, TypeScript, and Supabase that fetches top headlines from NewsAPI, generates audio summaries using ElevenLabs, and emails personalized news briefings.

## 🚀 Features

- **Latest Headlines**: Fetches top US news stories from NewsAPI
- **AI Audio Generation**: Converts news summaries to high-quality audio using ElevenLabs
- **Email Delivery**: Sends audio summaries with rich HTML emails via SMTP
- **Modern UI**: Responsive design with Tailwind CSS v4 and React 19
- **Real-time Updates**: Auto-refresh functionality for latest news
- **Audio Player**: Built-in audio player with progress tracking
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (ready for future features)
- **Email**: Nodemailer with SMTP
- **Audio**: ElevenLabs Text-to-Speech API
- **News**: NewsAPI for headlines

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aloewright/11
   cd news-audio-summary
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # API Keys
   NEWSAPI_KEY=your_newsapi_key
   ELEVENLABS_API_KEY=your_elevenlabs_key
   
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Email Configuration
   EMAIL_FROM=your_email@example.com
   EMAIL_TO=recipient@example.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## ⚙️ Configuration

### Email Setup (Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password for the application
3. Use the App Password in the `SMTP_PASS` environment variable

### API Keys
- **NewsAPI**: Sign up at [newsapi.org](https://newsapi.org) for free
- **ElevenLabs**: Get your API key from [elevenlabs.io](https://elevenlabs.io)
- **Supabase**: Create a project at [supabase.com](https://supabase.com)

## 🎯 Usage

1. **View Headlines**: Browse the latest news articles with images and descriptions
2. **Generate Audio**: Click "Generate Audio Summary" to create a spoken version of top stories
3. **Listen**: Use the built-in audio player to listen to your summary
4. **Email Summary**: Send the audio summary to your email for offline listening
5. **Refresh**: Get the latest news with the refresh button

## 🔒 Security Features

- Environment variables for sensitive data
- Server-side API routes protect credentials
- Input validation and sanitization
- HTTPS enforcement for production
- Rate limiting considerations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Configure build settings and environment variables
- **Railway**: Add environment variables and deploy
- **Self-hosted**: Ensure Node.js 18+ and configure reverse proxy

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🧪 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure
```
src/
├── components/     # Reusable React components
├── lib/           # Utility functions and configurations
├── pages/         # Next.js pages and API routes
├── styles/        # Global styles and Tailwind CSS
└── types/         # TypeScript type definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Check the [Issues](https://github.com/your-repo/issues) section
- Review the documentation
- Contact the development team

---

**Note**: Remember to regenerate and secure your API keys after development, and never commit sensitive information to version control.
