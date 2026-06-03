// types ? mongoose.d.ts

import "mongoose";

declare module "mongoose" {
  // Add query helper
  interface Query<ResultType, DocType, THelpers = {}, RawDocType = unknown, QueryOp = "find", TDocOverrides = Record<string, never>> {
    withDeleted(): this;
  }

  // Add instance method to document
  interface Document {
    deleted?: boolean;
    deletedAt?: Date;
    deletedBy?: any;
    softDelete(userId?: any): Promise<this>;
  }

  // Add static method to model
  interface Model<T extends Document> {
    softDeleteById(id: any, userId?: any): Promise<any>;
  }
}
