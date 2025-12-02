import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Button } from './Button';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-kitty-cream dark:bg-gray-900 p-4">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl max-w-md w-full text-center space-y-6">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto text-red-500">
              <AlertTriangle size={40} />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-kitty-text dark:text-white mb-2">
                Oops! Something went wrong 😿
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                Don't worry, our best kitty engineers are looking into it.
              </p>
              {this.state.error && (
                <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-left overflow-auto max-h-32 text-xs font-mono text-gray-600 dark:text-gray-300">
                  {this.state.error.toString()}
                </div>
              )}
            </div>

            <Button 
              onClick={() => window.location.reload()} 
              className="w-full gap-2 justify-center"
            >
              <RefreshCw size={18} />
              Reload Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
