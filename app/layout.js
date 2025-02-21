import '../styles/globals.css';

export const metadata = {
  title: 'GText AI',
  description:
    "This is an AI-Powered text processing interface, a Next.js web app that leverages Chrome's AI APIs for language detectConflictingPaths, translation and summarization in a chat-like interface.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="images/gtAI.png" type="image/x-icon" />
        <meta
          httpEquiv="origin-trial"
          content={process.env.ORIGIN_TRIAL_TRANSLATOR_API}
        />
        <meta
          httpEquiv="origin-trial"
          content={process.env.ORIGIN_TRIAL_LANGUAGE_DETECTOR_API}
        />
        <meta
          httpEquiv="origin-trial"
          content={process.env.ORIGIN_TRIAL_SUMMARIZATION_API}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
