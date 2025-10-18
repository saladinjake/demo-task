export type IResponse = {
  id?: string;
  isSuccessful?: boolean;
  message?: string;
  statusCode?: string;
  totalRecordInStore?: number;
  totalRecordsInStore?: number;
  totalCount?: number;
  totalRecords?: number;
  financialDate?: string;

  containsErrors?: boolean;
  status?: string;
  referenceNumber?: any;
  product?: any;
  alreadyReversedCount?: any;
  duplicateCount?: any;
};
