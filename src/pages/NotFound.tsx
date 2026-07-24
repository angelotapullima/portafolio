const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-lg w-full border border-border bg-card p-8">
        <div className="font-mono text-xs text-muted-foreground mb-4 pb-3 border-b border-border">
          <span className="text-error">error</span>
          <span className="mx-2">|</span>
          <span>404</span>
        </div>
        <h1 className="font-mono text-4xl font-bold text-foreground mb-3">command not found</h1>
        <p className="text-muted-foreground mb-8 font-sans">
          La ruta que intentaste no existe en este sistema.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <span>$</span>
          <span>cd /home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
