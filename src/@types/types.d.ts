export type Prediction =
  | {
      success: true;
      vegetable: string;
    }
  | {
      success: false;
      error: string;
    };
