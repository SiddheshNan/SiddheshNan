interface Window {
  grecaptcha: {
    render: (container: string | HTMLElement, parameters: { sitekey: string }) => number;
    reset: (widgetId?: number) => void;
    getResponse: (widgetId?: number) => string;
  };
}
