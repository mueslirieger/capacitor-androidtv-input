declare module '@capacitor/core' {
  interface PluginRegistry {
    AndroidTvInput: AndroidTvInputPlugin;
  }
}

export interface AndroidTvInputPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
