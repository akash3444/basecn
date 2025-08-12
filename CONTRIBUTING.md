# Contributing to FloorUI

Thank you for your interest in contributing to FloorUI! We welcome contributions from the community and are excited to see what you'll bring to the project.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or npm
- **Git**

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/floorui.git
   cd floorui

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start the development server**:
   ```bash
   pnpm dev
   ```

5. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Types of Contributions

We welcome several types of contributions:

### 🐛 Bug Reports
- Use the GitHub issue tracker
- Include a clear description of the problem
- Provide steps to reproduce the issue
- Include screenshots or code snippets when helpful

### ✨ Feature Requests
- Open an issue with the "feature request" label
- Describe the feature and its use case
- Explain why this feature would be beneficial

### 🔧 Code Contributions
- Bug fixes
- New components
- Component enhancements
- Documentation improvements
- Performance optimizations

### 📚 Documentation
- Improve existing documentation
- Add examples and use cases
- Fix typos and grammatical errors

## 🛠️ Development Workflow

### Branch Naming Convention

Use descriptive branch names that indicate the type of work:

```bash
feature/add-button-component
fix/avatar-fallback-issue
docs/update-installation-guide
refactor/improve-component-structure
```

### Making Changes

1. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards (see below)

3. **Test your changes** thoroughly:
   ```bash
   pnpm dev  # Test in development
   pnpm build  # Ensure it builds correctly
   ```

4. **Commit your changes** with a descriptive message:
   ```bash
   git add .
   git commit -m "feat: add new button component with variants"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

## 📝 Coding Standards

### TypeScript Guidelines
- Use TypeScript for all new code
- Prefer `interface` over `type` for object shapes
- Avoid `any` types - use proper typing
- Export interfaces for component props

### File Organization
- Place new components in `src/registry/components/ui/`
- Add demo examples in `src/components/demo/`
- Follow the existing naming conventions
- Create corresponding documentation in `content/docs/components/`

## 🤝 Community Guidelines

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Maintain a positive environment

### Communication
- Use GitHub issues for bug reports and feature requests
- Join discussions in pull requests
- Ask questions in GitHub discussions
- Be patient and helpful with newcomers

## Getting Help

If you need help or have questions:

1. **Check existing issues** on GitHub
2. **Search the documentation** for answers
3. **Open a discussion** on GitHub
4. **Ask in pull request comments** for specific code questions

Thank you for contributing to FloorUI! Your efforts help make this project better for everyone.