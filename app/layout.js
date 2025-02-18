import './globals.css';

export const metadata = {
  title: 'Create Next App',
  description:
    "This is an AI-Powered text processing interface, a Next.js web app that leverages Chrome's AI APIs for language detectConflictingPaths, translation and summarization in a chat-like interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
