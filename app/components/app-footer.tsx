export const AppFooter: React.FC = () => (
  <footer className="p-6 bg-black text-white/80 flex justify-between">
    <div>
      <span>Copyright &copy;{new Date().getUTCFullYear()} </span>
      <a
        rel="noreferrer noopener"
        target="_blank"
        href="https://github.com/dmithamo"
        className="underline underline-offset-2"
      >
        dmithamo
      </a>
    </div>
  </footer>
);
