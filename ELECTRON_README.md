# Accounting Dashboard - Desktop Application

This is a desktop version of the accounting dashboard built with React, Vite, and Electron.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
# Start the development server with hot reload
npm run electron-dev
```

### Production Build
```bash
# Build the React app and Electron main process
npm run build
npm run build-electron

# Run the built app
npm run electron
```

### Create Distributable
```bash
# Create installer/package for your platform
npm run dist
```

## 📁 Project Structure

```
├── src/                    # React application source
│   ├── app/               # Main app components
│   ├── styles/            # CSS and styling
│   └── main.tsx           # React entry point
├── electron/              # Electron main process
│   ├── main.ts            # Main Electron process
│   ├── preload.ts         # Preload script
│   └── tsconfig.json      # Electron TypeScript config
├── dist/                  # Built React app
├── dist-electron/         # Built Electron main process
└── release/               # Built distributables
```

## 🛠️ Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build React app for production
- `npm run build-electron` - Compile Electron TypeScript
- `npm run electron` - Run Electron app (production mode)
- `npm run electron-dev` - Run in development mode with hot reload
- `npm run dist` - Create distributable packages

## 🎯 Features

- ✅ Modern React 18 with TypeScript
- ✅ Tailwind CSS for styling
- ✅ Electron for desktop functionality
- ✅ Hot reload in development
- ✅ Cross-platform builds (Windows, macOS, Linux)
- ✅ Professional dashboard UI with charts and analytics
- ✅ Responsive design
- ✅ Modern component architecture

## 🔧 Customization

### App Icon
Replace the icon file referenced in `electron/main.ts` with your custom app icon.

### Window Settings
Modify window properties in `electron/main.ts`:
- Window size
- Minimum/maximum dimensions
- Title bar style
- Menu configuration

### Build Configuration
Update `electron-builder.json` for:
- App metadata
- Build targets
- Installer options
- Code signing (for distribution)

## 📦 Distribution

The app can be packaged for:
- **Windows**: NSIS installer (.exe)
- **macOS**: DMG package (.dmg)
- **Linux**: AppImage (.AppImage)

## 🐛 Troubleshooting

### Common Issues

1. **Module not found errors**: Run `npm install` to ensure all dependencies are installed
2. **Electron won't start**: Make sure you've run `npm run build-electron` first
3. **White screen**: Check that `npm run build` completed successfully

### Development Tips

- Use Chrome DevTools in Electron for debugging
- Check the console for React errors
- Electron main process logs appear in the terminal

## 🚀 Next Steps

1. Add your business logic and data connections
2. Customize the UI to match your brand
3. Add more dashboard features
4. Set up automatic updates
5. Configure code signing for distribution

## 📄 License

This project is private and proprietary.