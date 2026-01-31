import React from 'react';

export enum ViewState {
  LANDING = 'LANDING',
  READER = 'READER',
  DASHBOARD = 'DASHBOARD'
}

export interface PaperSection {
  id: string;
  title: string;
  content: string | React.ReactNode;
}

export interface PaperData {
  title: string;
  subtitle: string;
  authors: string[];
  publicationDate: string;
  journal: string;
  stats: {
    citations: number;
    datasetPoints: string;
    accuracy: string;
  };
  abstract: string;
  sections: PaperSection[];
}