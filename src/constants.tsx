import {
  TbCertificate,
  TbColorFilter,
  TbFile,
  TbFileExport,
  TbScan,
} from 'react-icons/tb';

import { ReactElement } from 'react';

interface Strings {
  [key: string]: string;
}

export const strings: Strings = {
  documentScannerHeader: 'DOCUMENT SCANNER',
  documentScannerTitle: 'Scan with Ease',
  documentScannerDescription: 'DOCUMENT SCANNER',
  signStampHeader: 'DOCUMENT SCANNER',
  signStampTitle: 'DOCUMENT SCANNER',
  signStampDescription: 'DOCUMENT SCANNER',
  batchScanningHeader: 'DOCUMENT SCANNER',
  batchScanningTitle: 'Multiple Page Scan',
  batchScanningDescription:
    'Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.',
  advancedFiltersHeader: 'ADVANCED FILTERS',
  advancedFiltersTitle: 'Unique Filters',
  advancedFiltersDescription:
    'Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.',
  exportShareHeader: 'EXPORT & SHARE',
  exportShareTitle: 'All-Round Conversion',
  exportShareDescription: 'Export your scans as PDF,JPG,ZIP,TXT and Word.',
  learnMore: 'Learn More',
  navigateDocumentScanner: 'Document Scanner',
  navigateSignStamp: 'Sign & Stamp',
  navigateBatchScanning: 'BatchScanning',
  navigateAdvancedFilters: 'Advanced Filters',
  navigateExportShare: 'Export & Share',
};

interface Slide {
  key: string;
  label: string;
  icon: ReactElement;
}

interface Slides {
  [key: string]: Slide;
}

export const slides: Slides = {
  documentScanner: {
    key: 'documentScanner',
    label: strings.navigateDocumentScanner,
    icon: <TbFile size={32} />,
  },
  signStamp: {
    key: 'signStamp',
    label: strings.navigateSignStamp,
    icon: <TbCertificate size={32} />,
  },
  batchScanning: {
    key: 'batchScanning',
    label: strings.navigateBatchScanning,
    icon: <TbScan size={32} />,
  },
  advancedFilters: {
    key: 'advancedFilters',
    label: strings.navigateAdvancedFilters,
    icon: <TbColorFilter size={32} />,
  },
  exportShare: {
    key: 'exportShare',
    label: strings.navigateExportShare,
    icon: <TbFileExport size={32} />,
  },
};
