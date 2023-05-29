import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'mi-asignacion',
  webDir: 'dist/mi-asignacion',
  server: {
    androidScheme: 'https'
  }
};

export default config;
