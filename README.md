# My Project

A collection of web development experiments and projects including Node.js servers and React applications.

## Projects

This repository contains various experiments organized into folders:

- **Experiment-0 to Experiment-6**: Web development experiments
- **node-projects/**: Node.js and Express server projects
  - Experiment-10: Employee Management System
  - Experiment-11: Card Management API
  - Experiment-12: Seat Booking System with Locking
- **react-projects/**: React application experiments
  - Experiment-1: React application
  - Experiment-2: Book Management App

## Getting Started

### Prerequisites

- Node.js and npm (for node-projects and react-projects)
- Git
- A code editor (VS Code, Sublime, etc.)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/neecoteen24/my-project.git
cd my-project
```

2. Navigate to the specific project you want to run and install dependencies:
```bash
cd node-projects/Experiment-10
npm install
npm start
```

## Git Authentication Setup

### Having trouble pushing code? 

If you're unable to authenticate your SSH keys or push code to GitHub, we have guides to help:

📖 **[Complete SSH Setup Guide](./SSH_SETUP.md)** - Detailed step-by-step instructions

⚡ **[Quick SSH Reference](./QUICK_SSH_REFERENCE.md)** - Fast command reference card

These guides cover:
- Generating SSH keys for your new device
- Adding SSH keys to GitHub
- Switching from HTTPS to SSH authentication
- Troubleshooting common SSH issues
- Quick reference commands

### Quick Fix

If you need to push code immediately and SSH isn't working:

1. **Using HTTPS (temporary solution):**
   ```bash
   git remote set-url origin https://github.com/neecoteen24/my-project.git
   git push
   ```
   You'll be prompted for your GitHub username and personal access token.

2. **For long-term solution:** Follow the [SSH Setup Guide](./SSH_SETUP.md)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## Common Issues

### Cannot Push to Repository

If you see errors like:
- `Permission denied (publickey)`
- `Authentication failed`
- `fatal: Could not read from remote repository`

👉 See the [SSH Setup Guide](./SSH_SETUP.md) for detailed solutions.

## License

This project is for educational purposes.

## Author

Anurag (@neecoteen24)
