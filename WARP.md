# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

CodeSphere is an AI-powered online coding platform that supports multiple programming languages with compilation, execution, and AI-assisted debugging. The project consists of a React frontend and Node.js/Express backend with multi-language compilation support.

- **Website**: https://codespr.netlify.app/
- **Architecture**: Frontend (React) + Backend (Node.js/Express) + AI Integration (OpenAI/Google Gemini)
- **Supported Languages**: C, C++, Python, JavaScript, Java, TypeScript, Go, Rust, PHP, R, SQL (SQLite/PostgreSQL/MySQL), and more

## Development Commands

### Frontend (React)
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test
```

### Backend (Node.js/Express)
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start server in development (runs on port 5000)
node server.js

# Build and run with Docker
docker build -t codesphere-backend .
docker run -p 5000:5000 codesphere-backend
```

### Environment Setup
Backend requires `.env` file with:
- `OPENAI_API_KEY` - for AI chat functionality
- `PORT` - server port (defaults to 5000)

## Architecture Overview

### Frontend Structure
- **Entry Point**: `src/App.js` - Main routing with React Router
- **Pages**: 
  - `HomePage.js` - Landing page with language selection
  - `CompilerPage.js` - Main code editor and execution interface
  - `Chatbot.js` - AI chat integration
- **Components**: 
  - `Editor.js` - CodeMirror-based code editor
  - `Navbar.js` - Navigation header
  - `DarkModeToggle.js` - Theme switcher
- **Context**: `ThemeContext.js` - Global theme management

### Backend Structure
- **Main Server**: `server.js` - Express server with compilation endpoints
- **Controllers**: `controllers/compileController.js` - Code compilation logic
- **Routes**: `routes/compile.js` - API endpoint definitions
- **Language Support**: Multi-language compilation with `languageConfigs` object

### Key Technical Details

#### Language Configuration System
The backend uses a `languageConfigs` object that defines:
- File extensions for each language
- Compilation commands (where needed)
- Execution commands
- Input handling capabilities

#### Code Execution Flow
1. Frontend sends code, language, and input to `/compile` endpoint
2. Backend writes code to temporary file in `temp/` directory
3. Executes compilation (if needed) followed by program execution
4. Returns output or error messages
5. Cleans up temporary files

#### CodeMirror Integration
Frontend uses CodeMirror 6 with:
- Language-specific syntax highlighting via `@codemirror/lang-*` packages
- Monokai theme for consistent UI
- Dynamic language mode switching based on route parameters

#### Docker Environment
Backend Dockerfile includes comprehensive language support:
- Ubuntu 22.04 base with build tools
- Node.js 18, Python 3, Java 17, PHP
- Go 1.21.5, Rust (via rustup)
- TypeScript compiler globally installed

### URL Structure
- `/` - Homepage with language selection
- `/compiler/:language` - Code editor for specific language (e.g., `/compiler/python`)

### API Endpoints
- `POST /compile` - Execute code with language, code, and input parameters
- `POST /chat` - AI assistant (currently commented out)

### Development Notes
- Frontend runs on port 3000, backend on port 5000
- Production backend URL is hardcoded as `https://spherecodes.onrender.com`
- Temporary files are created in `backend/temp/` directory during execution
- CodeMirror extensions are imported individually for each supported language

### Language-Specific Notes
- **R Language**: Uses `Rscript` execution, supports data analysis and statistical computing
- **SQL Support**: Multiple variants (SQLite primary, PostgreSQL, MySQL) with temporary database setup
- **Docker Environment**: Includes R runtime and SQL clients for comprehensive language support
- **Special Handling**: Java class extraction, SQL database setup, R working directory management
