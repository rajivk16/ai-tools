export function safeRender(data: any): string {
    if (typeof data === 'string') return data;
    if (typeof data === 'number') return data.toString();
    if (data === null || data === undefined) return '';
    return JSON.stringify(data);
  }