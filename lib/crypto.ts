export function serializeObject(value: Record<string, any>) {
  return encodeURIComponent(window.btoa(JSON.stringify(value)));
}

export function deserializeObject(value: string) {
  try {
    return JSON.parse(window.atob(decodeURIComponent(value)));
  } catch {
    return null;
  }
}
