import { WebPlugin } from '@capacitor/core';
import { AndroidTvInputPlugin } from './definitions';

export class AndroidTvInputWeb extends WebPlugin implements AndroidTvInputPlugin {
  constructor() {
    super({
      name: 'AndroidTvInput',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const AndroidTvInput = new AndroidTvInputWeb();

export { AndroidTvInput };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AndroidTvInput);
