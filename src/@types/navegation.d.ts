export interface GameParams {
  id: string;
  name: string;
  bannerUrl: string;
}

export declare global {
  namespace ReactNavegation {
    interface RootParamList {
      home: undefined;
      game: GameParams;
    }
  }
}
