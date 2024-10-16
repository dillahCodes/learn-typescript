// TypeScript has two main kinds of files. .ts files are implementation files that contain
//  types and executable code. These are the files that produce .js outputs, and are where
//  you’d normally write your code. .d.ts files are declaration files that contain only type information.
//  These files don’t produce .js outputs; they are only used for typechecking.

declare namespace ProductManager {
  export interface Product {
    category: string;
    stock: number;
  }
}
