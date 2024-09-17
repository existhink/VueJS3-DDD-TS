import { execSync } from 'child_process';

try {
  // Run eslint
  console.log('Running eslint...');
  execSync('npx eslint ./src', { stdio: 'inherit' });

  // If no errors, run the start:dev script
  console.log('Eslint passed. Starting the app...');
  execSync('vite', { stdio: 'inherit' });
} catch {
  console.error('Eslint failed. Please fix the issues before starting the app.');
  process.exit(1);
}
