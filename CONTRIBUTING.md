# Contributing to Argenté

Thank you for your interest in contributing to Argenté! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/argente.git
   cd argente
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Workflow

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments for complex logic
   - Keep components small and focused

3. **Test your changes**
   - Test in multiple browsers
   - Test responsive design on different screen sizes
   - Ensure no console errors or warnings

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

## 💻 Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Keep components under 200 lines when possible
- Extract reusable logic into custom hooks

### CSS
- Follow BEM naming convention where applicable
- Use CSS variables from `:root` in index.css
- Keep selectors specific but not overly complex
- Group related styles together
- Add comments for complex styling

### File Structure
- Components go in `src/components/`
- Pages go in `src/pages/`
- Context providers go in `src/context/`
- Place component-specific CSS in the same directory

## 🎯 Commit Message Format

Use conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding tests
- `chore:` - Maintenance tasks

Example:
```
feat: add product comparison feature
fix: resolve cart total calculation bug
docs: update README with new features
```

## 🧪 Testing Checklist

Before submitting a pull request:

- [ ] Code runs without errors
- [ ] No console warnings
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Tested in Chrome, Firefox, and Safari
- [ ] No accessibility issues (check with browser tools)
- [ ] Cart persistence works correctly
- [ ] Navigation between pages works smoothly
- [ ] Forms validate properly
- [ ] Images load correctly

## 🔄 Pull Request Process

1. **Update documentation** if needed
2. **Ensure your PR description** clearly describes the changes
3. **Link any related issues** in the PR description
4. **Request review** from maintainers
5. **Address feedback** promptly and professionally

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tested on multiple browsers
```

## 🐛 Reporting Bugs

When reporting bugs, include:

1. **Description** - Clear description of the bug
2. **Steps to Reproduce** - Detailed steps to reproduce
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Screenshots** - If applicable
6. **Environment** - Browser, OS, screen size
7. **Console Errors** - Any error messages

## 💡 Feature Requests

When requesting features:

1. **Clear title** - Descriptive feature title
2. **Problem** - What problem does this solve?
3. **Solution** - Your proposed solution
4. **Alternatives** - Other solutions considered
5. **Additional Context** - Mockups, examples, etc.

## 📚 Resources

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🤝 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

## ❓ Questions?

If you have questions:
- Check existing issues and discussions
- Create a new discussion on GitHub
- Reach out to maintainers

---

Thank you for contributing to Argenté! 🌟
