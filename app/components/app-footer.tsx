export const AppFooter: React.FC = () => (
  <footer className="flex justify-between bg-black p-6 text-white/80">
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
