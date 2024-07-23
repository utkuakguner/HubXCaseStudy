import {
  TbCertificate,
  TbColorFilter,
  TbFile,
  TbFileExport,
  TbScan,
} from 'react-icons/tb';

import AdvancedFilters from './components/AdvancedFilters';
import BatchScanning from './components/BatchScanning';
import DocumentScanner from './components/DocumentScanner';
import ExportShare from './components/ExportShare';
import { ReactElement } from 'react';
import SignStamp from './components/SignStamp';

export interface StringObject {
  [key: string]: string;
}

export interface Slides {
  [key: string]: Slide;
}

export interface Slide {
  key: string;
  icon: ReactElement;
  showcase: ReactElement;
  tabText: string;
  headerText: string;
  titleText: string;
  descriptionText: string;
}

export const strings: StringObject = {
  documentScannerHeader: 'DOCUMENT SCANNER',
  documentScannerTitle: 'Scan with Ease',
  documentScannerDescription:
    'Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format.',
  signStampHeader: 'SIGN & STAMP',
  signStampTitle: 'One-Tap Focus',
  signStampDescription:
    'Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!',
  batchScanningHeader: 'BATCH SCANNING',
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
  navigationDocumentScanner: 'Document Scanner',
  navigationSignStamp: 'Sign & Stamp',
  navigationBatchScanning: 'BatchScanning',
  navigationAdvancedFilters: 'Advanced Filters',
  navigationExportShare: 'Export & Share',
  learnMore: 'Learn More',
};

export const slides: Slides = {
  documentScanner: {
    key: 'documentScanner',
    icon: <TbFile size={32} />,
    showcase: <DocumentScanner />,
    tabText: strings.navigationDocumentScanner,
    headerText: strings.documentScannerHeader,
    titleText: strings.documentScannerTitle,
    descriptionText: strings.documentScannerDescription,
  },
  signStamp: {
    key: 'signStamp',
    icon: <TbCertificate size={32} />,
    showcase: <SignStamp />,
    tabText: strings.navigationSignStamp,
    headerText: strings.signStampHeader,
    titleText: strings.signStampTitle,
    descriptionText: strings.signStampDescription,
  },
  batchScanning: {
    key: 'batchScanning',
    icon: <TbScan size={32} />,
    showcase: <BatchScanning />,
    tabText: strings.navigationBatchScanning,
    headerText: strings.batchScanningHeader,
    titleText: strings.batchScanningTitle,
    descriptionText: strings.batchScanningDescription,
  },
  advancedFilters: {
    key: 'advancedFilters',
    icon: <TbColorFilter size={32} />,
    showcase: <AdvancedFilters />,
    tabText: strings.navigationAdvancedFilters,
    headerText: strings.advancedFiltersHeader,
    titleText: strings.advancedFiltersTitle,
    descriptionText: strings.advancedFiltersDescription,
  },
  exportShare: {
    key: 'exportShare',
    icon: <TbFileExport size={32} />,
    showcase: <ExportShare />,
    tabText: strings.navigationExportShare,
    headerText: strings.exportShareHeader,
    titleText: strings.exportShareTitle,
    descriptionText: strings.exportShareDescription,
  },
};
