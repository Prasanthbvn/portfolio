const NotFound = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="text-muted-foreground">The page you are looking for does not exist.</p>
        <a className="text-primary underline" href="/">Go Home</a>
      </div>
    </div>
  )
}

export default NotFound


