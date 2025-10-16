import ThemeToggle from "../components/ThemeToggle";

export default function Settings() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <svg 
              className="w-24 h-24 text-foreground/20" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
            </svg>
            {/* Animated dots */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Settings Coming Soon
          </h1>
          <p className="text-foreground/60 text-lg">
            I am currently building this page. Check back soon for accessibility options and preferences.
          </p>
        </div>

        {/* Theme Toggle Preview */}
        <div className="pt-4 border-t">
          <p className="text-sm text-foreground/50 mb-3">
            Meanwhile, try the theme toggle:
          </p>
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Optional: Feature list */}
        <div className="pt-6 text-left bg-foreground/5 rounded-lg p-6 space-y-2">
          <p className="text-sm font-semibold text-foreground/70 mb-3">
            Coming features:
          </p>
          <ul className="space-y-2 text-sm text-foreground/60">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Accessibility features</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              <span>Analytics Dashboard</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}